import * as S from "./styles";
import { FaCode } from "react-icons/fa6";

export const HeaderProjectDetails = ({ projectData }: any) => {
  return (

    <S.Header>
      <S.Title>
        <S.IconWrapper>
          <FaCode className="w-6 h-6 text-secondary-purple-300" />
        </S.IconWrapper>
        {projectData?.name}
      </S.Title>
    </S.Header>
  )
}