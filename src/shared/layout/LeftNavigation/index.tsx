"use client";

import { useSidebarStore } from '@/shared/zustand/isOpenNavSidebarStore';
import FooterLeftBar from './FooterLeftBar';
import HeaderLeftBar from './HeaderLeftBar';
import { MainLeftBarContent } from './MainLeftBarContent';
import * as S from './styles';

interface LeftNavigationProps {
  onOpenModal?: () => void;
}

const LeftNavigation = ({ onOpenModal }: LeftNavigationProps) => {
  const { isMinimizedSidebar } = useSidebarStore();

  return (
    <S.Container  $isMinimized={isMinimizedSidebar}>
      <HeaderLeftBar />

      <MainLeftBarContent onOpenModal={onOpenModal} />

      <FooterLeftBar />
    </S.Container>
  );
};

export default LeftNavigation;