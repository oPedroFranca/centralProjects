import React, { ReactNode } from 'react';
import { DropdownActions } from './DropdownActions';
import * as S from './styles';

interface IButtonNavSidebarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Text?: string;
  $isSelected?: boolean;
  isMinimized: boolean;
  handleCategoryClick: () => void;
  icon?: ReactNode;
  disableThreeDots?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const ButtonNavSidebar = ({
  Text,
  $isSelected = false,
  isMinimized,
  handleCategoryClick,
  icon,
  disableThreeDots = false,
  onEdit,
  onDelete,
  ...rest
}: IButtonNavSidebarProps) => {
  return (
    <S.ButtonNavSidebar
      $isSelected={$isSelected}
      $isMinimized={isMinimized}
      onClick={handleCategoryClick}
      title={isMinimized ? Text : undefined}
      {...rest}
    >
      {icon ? (
        <span>{icon}</span>
      ) : $isSelected ? (
        <S.FolderOpen data-testid="FolderOpen" />
      ) : (
        <S.FolderClosed data-testid="FolderClosed" />
      )}

      {!isMinimized && <S.CategoryName>{Text}</S.CategoryName>}


      {!isMinimized && !disableThreeDots && (
        <DropdownActions onEdit={onEdit} onDelete={onDelete} />
      )}
    </S.ButtonNavSidebar>
  );
};
