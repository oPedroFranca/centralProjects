import { FiCalendar } from "react-icons/fi";
import * as S from "./styles";

type Props = {
  projectData: {
    status?: "active" | "offline";
  };
};

export const FooterProjectDetails = ({ projectData }: Props) => {
  const isActive = projectData.status === "active";

  return (
    <S.FooterContainer>
      <S.Content>
        <S.LeftContent>
          <FiCalendar className="w-4 h-4 text-muted-foreground" />
          <S.StatusLabel>Status:</S.StatusLabel>
          <S.StatusBadge $isActive={isActive}>
            {isActive ? "Ativo" : "Offline"}
          </S.StatusBadge>
        </S.LeftContent>
      </S.Content>
    </S.FooterContainer>
  );
};
