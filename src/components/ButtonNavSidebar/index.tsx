import React from 'react';
import * as S from './styles';
interface ButtonNavSidebarProps {
  categoryName: string;
  selectedCategoryId: string;
  isMinimized: boolean;
  categoryId: string;
  handleCategoryClick: (id: string) => void;
}

export const ButtonNavSidebar = ({
  categoryName,
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
      title={isMinimized ? categoryName : undefined}
      {...rest}
    >
      {selectedCategoryId === categoryId ? (
        <S.FolderOpen />
      ) : (
        <S.FolderClosed />
      )}

      {!isMinimized && (
        <S.CategoryName>{categoryName}</S.CategoryName>
      )}

      {/* Subtle shine effect on hover */}
      <S.HoverEffectDiv />
    </S.ButtonNavSidebar>
  );
};
