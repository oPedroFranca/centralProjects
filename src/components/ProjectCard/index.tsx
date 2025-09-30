import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardHeader from './Cardheader';
import * as S from './styles';
import { ProjectCardProps } from '@/shared/interfaces';

export const ProjectCard = ({ project, onProjectClick }: ProjectCardProps) => {
  
  const handleCardClick = () => {
    onProjectClick(project);
  };

  return (
    <S.CardContainer onClick={handleCardClick}>
      <S.GradientOverlay />

      <CardHeader project={project} />

      <CardContent project={project} />
    </S.CardContainer>
  );
};
