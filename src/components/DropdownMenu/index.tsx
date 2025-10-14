import React, { useRef, useState, useEffect } from 'react';
import * as S from './styles';

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'start' | 'end';
  className?: string;
}

export const DropdownMenu: React.FC<DropdownProps> = ({
  trigger,
  children,
  align = 'end',
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <S.DropdownContainer ref={menuRef}>
      <S.DropdownTrigger
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        style={{ pointerEvents: 'auto' }}
      >
        {trigger}
      </S.DropdownTrigger>
      {open && (
        <S.DropdownContent
          $align={align}
          className={className}
          style={{ pointerEvents: 'auto' }}
        >
          {children}
        </S.DropdownContent>
      )}
    </S.DropdownContainer>
  );
};

interface DropdownMenuItemProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ onClick, className = '', children }) => {
  return (
    <S.DropdownItem
      type="button"
      className={className}
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (onClick) onClick();
      }}
      style={{ pointerEvents: 'auto' }}
    >
      {children}
    </S.DropdownItem>
  );
};
