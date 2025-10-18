"use client";;
import { useSidebarStore } from '@/shared/zustand';
import Header from '../Header';
import LeftNavigation from '../LeftNavigation';
import * as S from './styles';

const LayoutStructure = ({ children }: React.PropsWithChildren) => {
  const { isMinimizedSidebar } = useSidebarStore();

  return (
    <S.Wrapper>
      <LeftNavigation />

      <S.MainArea $isMinimizedSidebar={isMinimizedSidebar}>
        <Header />
        <S.MainContent>{children}</S.MainContent>
      </S.MainArea>
    </S.Wrapper>
  );
};

export default LayoutStructure;
