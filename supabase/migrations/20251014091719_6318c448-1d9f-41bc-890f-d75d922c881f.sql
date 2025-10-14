-- Create user role enum
CREATE TYPE app_role AS ENUM ('student', 'agency_admin', 'super_admin');

-- User Roles Table (CRITICAL: Separate table for security)
CREATE TABLE user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- User Profiles Table
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  language_preference TEXT DEFAULT 'en' CHECK (language_preference IN ('en', 'ru', 'uz')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Agencies Table
CREATE TABLE agencies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  contact_email TEXT,
  contact_phone TEXT,
  description TEXT,
  visible_publicly BOOLEAN DEFAULT false,
  admin_user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE agencies ENABLE ROW LEVEL SECURITY;

-- Universities Table
CREATE TABLE universities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_en TEXT NOT NULL,
  name_ru TEXT,
  name_uz TEXT,
  overview_en TEXT,
  overview_ru TEXT,
  overview_uz TEXT,
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  tuition_min DECIMAL,
  tuition_max DECIMAL,
  currency TEXT DEFAULT 'USD',
  application_fee DECIMAL,
  duration_months INTEGER,
  accommodation_available BOOLEAN DEFAULT false,
  living_cost_estimate DECIMAL,
  highlight_course TEXT,
  agency_id UUID REFERENCES agencies(id),
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE universities ENABLE ROW LEVEL SECURITY;

-- Programs Table
CREATE TABLE programs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  university_id UUID REFERENCES universities(id) ON DELETE CASCADE NOT NULL,
  name_en TEXT NOT NULL,
  name_ru TEXT,
  name_uz TEXT,
  degree_type TEXT NOT NULL CHECK (degree_type IN ('certificate', 'bachelors', 'masters', 'diploma', 'phd')),
  field_of_study TEXT NOT NULL,
  subfield TEXT,
  tuition_fee DECIMAL,
  intake_dates TEXT[],
  scholarship_available BOOLEAN DEFAULT false,
  duration_months INTEGER,
  description_en TEXT,
  description_ru TEXT,
  description_uz TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE programs ENABLE ROW LEVEL SECURITY;

-- Scholarships Table
CREATE TABLE scholarships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_en TEXT NOT NULL,
  name_ru TEXT,
  name_uz TEXT,
  description_en TEXT,
  description_ru TEXT,
  description_uz TEXT,
  country TEXT,
  field_of_study TEXT[],
  degree_type TEXT[],
  amount TEXT,
  coverage_type TEXT CHECK (coverage_type IN ('full', 'partial', 'tuition_only')),
  eligibility_en TEXT,
  eligibility_ru TEXT,
  eligibility_uz TEXT,
  deadline DATE,
  application_link TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE scholarships ENABLE ROW LEVEL SECURITY;

-- Applications Table (Student Lead Management)
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  university_id UUID REFERENCES universities(id) NOT NULL,
  program_id UUID REFERENCES programs(id),
  agency_id UUID REFERENCES agencies(id),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected')),
  student_name TEXT NOT NULL,
  student_email TEXT NOT NULL,
  student_phone TEXT,
  desired_intake TEXT,
  gpa DECIMAL,
  english_score TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Feedback Table
CREATE TABLE feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  agency_id UUID REFERENCES agencies(id),
  category TEXT CHECK (category IN ('application_delay', 'communication', 'visa_support', 'overall_experience', 'other')),
  comment TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  visible_to_public BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Saved Universities Table (Student Favorites)
CREATE TABLE saved_universities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  university_id UUID REFERENCES universities(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, university_id)
);

ALTER TABLE saved_universities ENABLE ROW LEVEL SECURITY;

-- Careers Table
CREATE TABLE careers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title_en TEXT NOT NULL,
  title_ru TEXT,
  title_uz TEXT,
  description_en TEXT,
  description_ru TEXT,
  description_uz TEXT,
  average_salary_min DECIMAL,
  average_salary_max DECIMAL,
  currency TEXT DEFAULT 'USD',
  demand_level TEXT CHECK (demand_level IN ('low', 'medium', 'high', 'very_high')),
  pros_en TEXT[],
  pros_ru TEXT[],
  pros_uz TEXT[],
  cons_en TEXT[],
  cons_ru TEXT[],
  cons_uz TEXT[],
  skills_en TEXT[],
  skills_ru TEXT[],
  skills_uz TEXT[],
  related_fields TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE careers ENABLE ROW LEVEL SECURITY;

-- Security definer function to check user role (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.email
  );
  
  -- Assign default student role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'student');
  
  RETURN NEW;
END;
$$;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_agencies_updated_at BEFORE UPDATE ON agencies
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_universities_updated_at BEFORE UPDATE ON universities
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_programs_updated_at BEFORE UPDATE ON programs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_scholarships_updated_at BEFORE UPDATE ON scholarships
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON applications
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_careers_updated_at BEFORE UPDATE ON careers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- RLS POLICIES

-- Profiles: Users can view and update their own profile
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- User Roles: Users can view their own roles, admins can manage all
CREATE POLICY "Users can view their own roles"
  ON user_roles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Super admins can manage all roles"
  ON user_roles FOR ALL
  USING (public.has_role(auth.uid(), 'super_admin'));

-- Agencies: Public can view visible agencies, admins can manage
CREATE POLICY "Anyone can view visible agencies"
  ON agencies FOR SELECT
  USING (visible_publicly = true OR auth.uid() = admin_user_id OR public.has_role(auth.uid(), 'super_admin'));

CREATE POLICY "Agency admins can update their own agency"
  ON agencies FOR UPDATE
  USING (auth.uid() = admin_user_id);

CREATE POLICY "Super admins can manage all agencies"
  ON agencies FOR ALL
  USING (public.has_role(auth.uid(), 'super_admin'));

-- Universities: Public can view, admins can manage
CREATE POLICY "Anyone can view universities"
  ON universities FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Agency admins can update their universities"
  ON universities FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM agencies
      WHERE agencies.id = universities.agency_id
      AND agencies.admin_user_id = auth.uid()
    )
  );

CREATE POLICY "Super admins can manage all universities"
  ON universities FOR ALL
  USING (public.has_role(auth.uid(), 'super_admin'));

-- Programs: Public can view, admins can manage
CREATE POLICY "Anyone can view programs"
  ON programs FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Agency admins can manage their university programs"
  ON programs FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM universities u
      JOIN agencies a ON u.agency_id = a.id
      WHERE u.id = programs.university_id
      AND a.admin_user_id = auth.uid()
    )
  );

CREATE POLICY "Super admins can manage all programs"
  ON programs FOR ALL
  USING (public.has_role(auth.uid(), 'super_admin'));

-- Scholarships: Public can view, admins can manage
CREATE POLICY "Anyone can view scholarships"
  ON scholarships FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Super admins can manage scholarships"
  ON scholarships FOR ALL
  USING (public.has_role(auth.uid(), 'super_admin'));

-- Applications: Students can create and view their own, agencies can view theirs, admins all
CREATE POLICY "Students can create applications"
  ON applications FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own applications"
  ON applications FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Agency admins can view applications for their universities"
  ON applications FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM universities u
      JOIN agencies a ON u.agency_id = a.id
      WHERE u.id = applications.university_id
      AND a.admin_user_id = auth.uid()
    )
  );

CREATE POLICY "Agency admins can update their applications"
  ON applications FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM universities u
      JOIN agencies a ON u.agency_id = a.id
      WHERE u.id = applications.university_id
      AND a.admin_user_id = auth.uid()
    )
  );

CREATE POLICY "Super admins can manage all applications"
  ON applications FOR ALL
  USING (public.has_role(auth.uid(), 'super_admin'));

-- Feedback: Users can create their own, public can view visible ones
CREATE POLICY "Users can create feedback"
  ON feedback FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Anyone can view visible feedback"
  ON feedback FOR SELECT
  TO authenticated, anon
  USING (visible_to_public = true OR auth.uid() = user_id);

CREATE POLICY "Super admins can manage all feedback"
  ON feedback FOR ALL
  USING (public.has_role(auth.uid(), 'super_admin'));

-- Saved Universities: Users can manage their own saves
CREATE POLICY "Users can manage their own saved universities"
  ON saved_universities FOR ALL
  USING (auth.uid() = user_id);

-- Careers: Public can view, admins can manage
CREATE POLICY "Anyone can view careers"
  ON careers FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Super admins can manage careers"
  ON careers FOR ALL
  USING (public.has_role(auth.uid(), 'super_admin'));