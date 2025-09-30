import { ContainerModalProject } from '@/components';
import { LuFileText } from "react-icons/lu";
import { Project } from '@/shared/interfaces';

import * as S from "./styles";

type Props = {
  projectData: Project;
};

export const Description = ({ projectData }: Props) => {
  return (
    <ContainerModalProject
      title="Project Description"
      icon={<LuFileText size={18}/>}
    >
      <S.Text>{projectData.description}</S.Text>
    </ContainerModalProject>
  );
};
