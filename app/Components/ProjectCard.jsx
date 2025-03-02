import { useLanguage } from '@/hooks/useLanguage';

export default function ProjectCard({ project }) {
  const { language } = useLanguage();
  
  // Helper function to get localized content
  const getLocalizedContent = (field) => {
    if (!field) return '';
    // Handle new structure
    if (field[language]) return field[language];
    // Handle old structure
    return language === 'en' ? field.en || field : field.ar || field;
  };

  return (
    <div className="project-card">
      <h3>{getLocalizedContent(project.title)}</h3>
      <p>{getLocalizedContent(project.description)}</p>
      {project.details && (
        <div className="project-details">
          <h4>{getLocalizedContent(project.details.title)}</h4>
          <p>{getLocalizedContent(project.details.description1)}</p>
          <p>{getLocalizedContent(project.details.description2)}</p>
        </div>
      )}
    </div>
  );
} 