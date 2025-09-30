import { Button } from '@/components';
import * as S from './styles';
import { FiGithub } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import CardFooter from '../CardFooter';

interface CardContentProps {
  project: any;
}

const CardContent = ({ project }: CardContentProps) => {
  // Handle null/undefined project
  if (!project) {
    return (
      <S.CardContent>
        <S.ProjectDescription>Projeto sem descrição</S.ProjectDescription>
        <S.ActionButtons>
          {/* No action buttons for null/undefined project */}
        </S.ActionButtons>
        <CardFooter status='Ativo'/>
      </S.CardContent>
    );
  }

  return (
    <S.CardContent>
      <S.ProjectDescription>{project.description || 'Sem descrição disponível'}</S.ProjectDescription>

      <S.ActionButtons>
        {project.link && (
          <Button className="flex-1 p-1 text-xs gap-2">
            <MdOutlineRemoveRedEye className="w-3 h-3" />
            Demo
          </Button>
        )}

        {project.githubLink && (
          <Button className="flex-1 p-1 text-xs gap-2">
            <FiGithub className="w-3 h-3" />
            Código
          </Button>
        )}
      </S.ActionButtons>

      <CardFooter status='Ativo'/>
    </S.CardContent>
  );
};

export default CardContent;
