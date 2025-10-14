export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      agencies: {
        Row: {
          admin_user_id: string | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
          visible_publicly: boolean | null
        }
        Insert: {
          admin_user_id?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
          visible_publicly?: boolean | null
        }
        Update: {
          admin_user_id?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
          visible_publicly?: boolean | null
        }
        Relationships: []
      }
      applications: {
        Row: {
          agency_id: string | null
          created_at: string | null
          desired_intake: string | null
          english_score: string | null
          gpa: number | null
          id: string
          notes: string | null
          program_id: string | null
          status: string | null
          student_email: string
          student_name: string
          student_phone: string | null
          university_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          agency_id?: string | null
          created_at?: string | null
          desired_intake?: string | null
          english_score?: string | null
          gpa?: number | null
          id?: string
          notes?: string | null
          program_id?: string | null
          status?: string | null
          student_email: string
          student_name: string
          student_phone?: string | null
          university_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          agency_id?: string | null
          created_at?: string | null
          desired_intake?: string | null
          english_score?: string | null
          gpa?: number | null
          id?: string
          notes?: string | null
          program_id?: string | null
          status?: string | null
          student_email?: string
          student_name?: string
          student_phone?: string | null
          university_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "applications_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agencies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_university_id_fkey"
            columns: ["university_id"]
            isOneToOne: false
            referencedRelation: "universities"
            referencedColumns: ["id"]
          },
        ]
      }
      careers: {
        Row: {
          average_salary_max: number | null
          average_salary_min: number | null
          cons_en: string[] | null
          cons_ru: string[] | null
          cons_uz: string[] | null
          created_at: string | null
          currency: string | null
          demand_level: string | null
          description_en: string | null
          description_ru: string | null
          description_uz: string | null
          id: string
          pros_en: string[] | null
          pros_ru: string[] | null
          pros_uz: string[] | null
          related_fields: string[] | null
          skills_en: string[] | null
          skills_ru: string[] | null
          skills_uz: string[] | null
          title_en: string
          title_ru: string | null
          title_uz: string | null
          updated_at: string | null
        }
        Insert: {
          average_salary_max?: number | null
          average_salary_min?: number | null
          cons_en?: string[] | null
          cons_ru?: string[] | null
          cons_uz?: string[] | null
          created_at?: string | null
          currency?: string | null
          demand_level?: string | null
          description_en?: string | null
          description_ru?: string | null
          description_uz?: string | null
          id?: string
          pros_en?: string[] | null
          pros_ru?: string[] | null
          pros_uz?: string[] | null
          related_fields?: string[] | null
          skills_en?: string[] | null
          skills_ru?: string[] | null
          skills_uz?: string[] | null
          title_en: string
          title_ru?: string | null
          title_uz?: string | null
          updated_at?: string | null
        }
        Update: {
          average_salary_max?: number | null
          average_salary_min?: number | null
          cons_en?: string[] | null
          cons_ru?: string[] | null
          cons_uz?: string[] | null
          created_at?: string | null
          currency?: string | null
          demand_level?: string | null
          description_en?: string | null
          description_ru?: string | null
          description_uz?: string | null
          id?: string
          pros_en?: string[] | null
          pros_ru?: string[] | null
          pros_uz?: string[] | null
          related_fields?: string[] | null
          skills_en?: string[] | null
          skills_ru?: string[] | null
          skills_uz?: string[] | null
          title_en?: string
          title_ru?: string | null
          title_uz?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      feedback: {
        Row: {
          agency_id: string | null
          category: string | null
          comment: string
          created_at: string | null
          id: string
          rating: number | null
          user_id: string
          visible_to_public: boolean | null
        }
        Insert: {
          agency_id?: string | null
          category?: string | null
          comment: string
          created_at?: string | null
          id?: string
          rating?: number | null
          user_id: string
          visible_to_public?: boolean | null
        }
        Update: {
          agency_id?: string | null
          category?: string | null
          comment?: string
          created_at?: string | null
          id?: string
          rating?: number | null
          user_id?: string
          visible_to_public?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "feedback_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agencies"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          language_preference: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          language_preference?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          language_preference?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      programs: {
        Row: {
          created_at: string | null
          degree_type: string
          description_en: string | null
          description_ru: string | null
          description_uz: string | null
          duration_months: number | null
          field_of_study: string
          id: string
          intake_dates: string[] | null
          name_en: string
          name_ru: string | null
          name_uz: string | null
          scholarship_available: boolean | null
          subfield: string | null
          tuition_fee: number | null
          university_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          degree_type: string
          description_en?: string | null
          description_ru?: string | null
          description_uz?: string | null
          duration_months?: number | null
          field_of_study: string
          id?: string
          intake_dates?: string[] | null
          name_en: string
          name_ru?: string | null
          name_uz?: string | null
          scholarship_available?: boolean | null
          subfield?: string | null
          tuition_fee?: number | null
          university_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          degree_type?: string
          description_en?: string | null
          description_ru?: string | null
          description_uz?: string | null
          duration_months?: number | null
          field_of_study?: string
          id?: string
          intake_dates?: string[] | null
          name_en?: string
          name_ru?: string | null
          name_uz?: string | null
          scholarship_available?: boolean | null
          subfield?: string | null
          tuition_fee?: number | null
          university_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "programs_university_id_fkey"
            columns: ["university_id"]
            isOneToOne: false
            referencedRelation: "universities"
            referencedColumns: ["id"]
          },
        ]
      }
      saved_universities: {
        Row: {
          created_at: string | null
          id: string
          university_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          university_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          university_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "saved_universities_university_id_fkey"
            columns: ["university_id"]
            isOneToOne: false
            referencedRelation: "universities"
            referencedColumns: ["id"]
          },
        ]
      }
      scholarships: {
        Row: {
          amount: string | null
          application_link: string | null
          country: string | null
          coverage_type: string | null
          created_at: string | null
          deadline: string | null
          degree_type: string[] | null
          description_en: string | null
          description_ru: string | null
          description_uz: string | null
          eligibility_en: string | null
          eligibility_ru: string | null
          eligibility_uz: string | null
          field_of_study: string[] | null
          id: string
          name_en: string
          name_ru: string | null
          name_uz: string | null
          updated_at: string | null
        }
        Insert: {
          amount?: string | null
          application_link?: string | null
          country?: string | null
          coverage_type?: string | null
          created_at?: string | null
          deadline?: string | null
          degree_type?: string[] | null
          description_en?: string | null
          description_ru?: string | null
          description_uz?: string | null
          eligibility_en?: string | null
          eligibility_ru?: string | null
          eligibility_uz?: string | null
          field_of_study?: string[] | null
          id?: string
          name_en: string
          name_ru?: string | null
          name_uz?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: string | null
          application_link?: string | null
          country?: string | null
          coverage_type?: string | null
          created_at?: string | null
          deadline?: string | null
          degree_type?: string[] | null
          description_en?: string | null
          description_ru?: string | null
          description_uz?: string | null
          eligibility_en?: string | null
          eligibility_ru?: string | null
          eligibility_uz?: string | null
          field_of_study?: string[] | null
          id?: string
          name_en?: string
          name_ru?: string | null
          name_uz?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      universities: {
        Row: {
          accommodation_available: boolean | null
          agency_id: string | null
          application_fee: number | null
          city: string
          country: string
          created_at: string | null
          currency: string | null
          duration_months: number | null
          highlight_course: string | null
          id: string
          image_url: string | null
          living_cost_estimate: number | null
          name_en: string
          name_ru: string | null
          name_uz: string | null
          overview_en: string | null
          overview_ru: string | null
          overview_uz: string | null
          tuition_max: number | null
          tuition_min: number | null
          updated_at: string | null
        }
        Insert: {
          accommodation_available?: boolean | null
          agency_id?: string | null
          application_fee?: number | null
          city: string
          country: string
          created_at?: string | null
          currency?: string | null
          duration_months?: number | null
          highlight_course?: string | null
          id?: string
          image_url?: string | null
          living_cost_estimate?: number | null
          name_en: string
          name_ru?: string | null
          name_uz?: string | null
          overview_en?: string | null
          overview_ru?: string | null
          overview_uz?: string | null
          tuition_max?: number | null
          tuition_min?: number | null
          updated_at?: string | null
        }
        Update: {
          accommodation_available?: boolean | null
          agency_id?: string | null
          application_fee?: number | null
          city?: string
          country?: string
          created_at?: string | null
          currency?: string | null
          duration_months?: number | null
          highlight_course?: string | null
          id?: string
          image_url?: string | null
          living_cost_estimate?: number | null
          name_en?: string
          name_ru?: string | null
          name_uz?: string | null
          overview_en?: string | null
          overview_ru?: string | null
          overview_uz?: string | null
          tuition_max?: number | null
          tuition_min?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "universities_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agencies"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "student" | "agency_admin" | "super_admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["student", "agency_admin", "super_admin"],
    },
  },
} as const
