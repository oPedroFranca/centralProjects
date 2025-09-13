import React from 'react';
import * as S from './styles';
import { useSidebarStore } from '@/shared/zustand/isOpenNavSidebarStore';

const FooterLeftBar = () => {
  const { isMinimizedSidebar } = useSidebarStore();

  return (
    <S.Container>
      {!isMinimizedSidebar && (
        <S.TextWrapper>
          created by tesseract
        </S.TextWrapper>
      )}
    </S.Container>
  );
};

export default FooterLeftBar;
