import * as S from './styles';
import { IoCodeSlashOutline } from "react-icons/io5";

interface CardHeaderProps {
  project: any;
}

const CardHeader = ({ project }: CardHeaderProps) => {
  const projectImage = project.image || (project.images && project.images[0]);

  return (
    <S.CardHeader>
      {projectImage ? (
        <S.ProjectImage>
          <img
            src={projectImage}
            alt={project.name || 'Projeto'}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />
        </S.ProjectImage>
      ) : (
        <S.FallbackImage>
          <S.ImageIcon className="w-5 h-5 text-primary/70" />
        </S.FallbackImage>
      )}

      <S.Metadata>
        <S.ProjectTitle>
          <S.CodeIcon />
          {project.name || 'Projeto sem nome'}
        </S.ProjectTitle>

        <S.ProjectMetaData>
          <S.CalendarIcon />
          <span>Criado recentemente</span>
        </S.ProjectMetaData>
      </S.Metadata>
    </S.CardHeader>
  );
};

export default CardHeader;
