import React from 'react';
import { DropdownMenu, DropdownMenuItem } from '../../DropdownMenu';
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
import { FaRegTrashCan } from "react-icons/fa6";
import * as S from './styles';

interface IDropdownActionsProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

export const DropdownActions: React.FC<IDropdownActionsProps> = ({
  onEdit,
  onDelete,
}) => {
  return (
    <S.DropdownContainer>
      <DropdownMenu
        trigger={
          <S.TriggerButton
            role="button"
            tabIndex={0}
            aria-label="Opções do item"
          >
            <PiDotsThreeVerticalBold />
          </S.TriggerButton>
        }
      >
        <DropdownMenuItem onClick={onEdit}>
          <GoPencil />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDelete}>
          <FaRegTrashCan />
          Delete
        </DropdownMenuItem>
      </DropdownMenu>
    </S.DropdownContainer>
  );
};
