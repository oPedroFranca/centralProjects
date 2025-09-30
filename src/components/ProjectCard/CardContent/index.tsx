import { Button } from '@/components';
import * as S from './styles';
import { FiGithub } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import CardFooter from '../CardFooter';
import { CardContentProps } from '@/shared/interfaces';

const CardContent = ({ project }: CardContentProps) => {
  return (
    <S.CardContent>
      <S.ProjectDescription>{project.description}</S.ProjectDescription>

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
