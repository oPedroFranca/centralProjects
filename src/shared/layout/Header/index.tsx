import { FiUser } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { useSidebarStore } from "@/shared/zustand";
import * as S from './styles';

const Header = () => {
  const { isMinimizedSidebar } = useSidebarStore();

  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <S.Container $isMinimizedSidebar={isMinimizedSidebar}>
      <S.HeaderWrapper>
        <div className=""></div>

        <S.DateContainer>
          <CiCalendar className="h-4 w-4 text-secondary-purple-300" />
          <S.DateText>
            {today}
          </S.DateText>
        </S.DateContainer>

        <S.UserInfoContainer>
          <S.UserDetails>
            <S.UserText >Usuário</S.UserText>
            <S.UserText >Admin</S.UserText>
          </S.UserDetails>
          <S.Avatar>
            <S.AvatarFallback>
              <FiUser className="h-4 w-4" />
            </S.AvatarFallback>
          </S.Avatar>
        </S.UserInfoContainer>
      </S.HeaderWrapper>
    </S.Container>
  );
};

export default Header;
