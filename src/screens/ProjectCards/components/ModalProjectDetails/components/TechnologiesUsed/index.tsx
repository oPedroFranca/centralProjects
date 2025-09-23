import { FaCode } from "react-icons/fa";
import { ContainerModalProject } from "@/components";
import { renderTechIcon } from "./utils/renderIcons";
import * as S from "./styles";

type Props = {
  technologies: string[];
};

export const ProjectTechnologies = ({ technologies }: Props) => {
  if (!technologies || technologies.length === 0) return null;

  return (
    <ContainerModalProject title="Tecnologias Utilizadas" icon={<FaCode className="text-secondary-purple-300" size={20} />}>
      <S.BadgesWrapper>
        {technologies.map((tech, index) => (
          <S.Badge key={index}>
            {renderTechIcon(tech)}
            <span>{tech}</span>
          </S.Badge>
        ))}
      </S.BadgesWrapper>
    </ContainerModalProject>
  );
};
