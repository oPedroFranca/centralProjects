import { Button, ContainerModalProject } from "@/components";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import * as S from "./styles";

type Props = {
  projectData: {
    link?: string;
    githubLink?: string;
  };
};

export const ProjectLinks = ({ projectData }: Props) => {
  return (
    <ContainerModalProject
      title="Links do Projeto"
      icon={<FaGlobe size={18} />}
    >
      <div className="flex gap-3">
        {projectData.link && (
          <S.GreenButton variant="gradient">
            <S.LinkContent
              href={projectData.link}
              target="_blank"
            >
              <FiExternalLink size={16} />
              Ver Demo ao Vivo
            </S.LinkContent>
          </S.GreenButton>
        )}

        {projectData.githubLink && (
          <Button variant="gradient">
            <S.LinkContent
              href={projectData.githubLink}
              target="_blank"
            >
              <FaGithub size={16} />
              Código Fonte
            </S.LinkContent>
          </Button>
        )}
      </div>
    </ContainerModalProject>
  );
};
