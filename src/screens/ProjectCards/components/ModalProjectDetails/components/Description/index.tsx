import { ContainerModalProject } from '@/components';
import * as S from "./styles";

type Props = {
  projectData: {
    description?: string;
  };
};

export const Description = ({ projectData }: Props) => {
  return (
    <ContainerModalProject>
      <S.Title>Project Description</S.Title>
      <S.Text>{projectData.description}</S.Text>
    </ContainerModalProject>
  );
};
