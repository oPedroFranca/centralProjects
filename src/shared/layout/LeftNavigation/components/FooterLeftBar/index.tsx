import React from 'react';
import { useSidebarStore } from '@/shared/zustand';
import * as S from './styles';

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
