import React from 'react';
import * as S from './styles';

interface ButtonNavSidebarProps {
  children: React.ReactNode;
  selectedCategoryId: string;
  isMinimized: boolean;
  categoryId: string;
  handleCategoryClick: (id: string) => void;
}

export const ButtonNavSidebar = ({
  children,
  selectedCategoryId,
  isMinimized,
  categoryId,
  handleCategoryClick,
  ...rest
}: ButtonNavSidebarProps) => {
  return (
    <S.ButtonNavSidebar
      selectedCategoryId={selectedCategoryId}
      isMinimized={isMinimized}
      categoryId={categoryId}
      onClick={() => handleCategoryClick(categoryId)}
      {...rest}
    >
      {children}
      
      <S.HoverEffectDiv />
    </S.ButtonNavSidebar>
  );
};
