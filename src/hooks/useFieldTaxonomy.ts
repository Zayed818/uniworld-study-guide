import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Subfield {
  id: string;
  name: {
    en: string;
    uz: string;
    ru: string;
  };
}

interface Field {
  id: string;
  name: {
    en: string;
    uz: string;
    ru: string;
  };
  subfields: Subfield[];
}

export function useFieldTaxonomy() {
  const [fields, setFields] = useState<Field[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/get-fields`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.fields && Array.isArray(data.fields)) {
          setFields(data.fields);
        }
      } catch (error) {
        console.error('Error fetching fields:', error);
        setFields([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFields();
  }, []);

  const getFieldOptions = () => {
    return fields.map(field => ({
      value: field.id,
      label: field.name[language],
      subfields: field.subfields
    }));
  };

  const getSubfieldOptions = (fieldId: string) => {
    const field = fields.find(f => f.id === fieldId);
    if (!field) return [];
    
    return field.subfields.map(subfield => ({
      value: subfield.id,
      label: subfield.name[language]
    }));
  };

  return {
    fields,
    loading,
    getFieldOptions,
    getSubfieldOptions
  };
}
