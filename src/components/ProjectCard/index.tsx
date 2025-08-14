import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardHeader from './Cardheader';
import * as S from './styles';

interface ProjectCardProps {
  project: any;
  onProjectClick: (project: any) => void;
}

export const ProjectCard = ({ project, onProjectClick }: ProjectCardProps) => {
  // const handleCardClick = () => {
  //   onProjectClick(project);
  // };

  return (
    <S.CardContainer >
      <S.GradientOverlay />

      <CardHeader project={project} />

      <CardContent project={project} />
    </S.CardContainer>
  );
};
