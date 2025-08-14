import tw from 'tailwind-styled-components';
import { FaRegFolderOpen, FaRegFolder } from "react-icons/fa";

interface IButtonNavSidebarProps {
  $isSelected: boolean;
  isMinimized: boolean;
}

export const ButtonNavSidebar = tw.button<IButtonNavSidebarProps>`
  flex
  items-center
  gap-3
  p-3
  h-10
  rounded-md
  text-left
  transition-all
  duration-300
  backdrop-blur-sm
  
  group

  ${({ $isSelected, isMinimized }) => `
    ${$isSelected
      ? 'bg-secondary-purple-300/20 border border-secondary-purple-300/30 text-foreground shadow-lg shadow-secondary-purple-300/10'
      : 'bg-white/5 border border-transparent hover:bg-white/10 hover:border-white/20 text-muted-foreground hover:text-foreground'
    }
    ${isMinimized ? 'justify-center' : ''}
  `}
`;

export const HoverEffectDiv = tw.div`
  absolute
  inset-0
  rounded-lg
  opacity-0
  group-hover:opacity-100
  transition-opacity
  duration-300
  bg-gradient-to-r
  from-transparent
  via-white/5
  to-transparent
  pointer-events-none
`;

export const CategoryName = tw.span`
  font-medium
  drop-shadow-sm
  truncate
`;

export const FolderClosed = tw(FaRegFolder)`
  h-4
  w-4
  group-hover:text-primary/70
  transition-colors
  duration-200
  flex-shrink-0
`;

export const FolderOpen = tw(FaRegFolderOpen)`
  h-4
  w-4
  text-primary
  drop-shadow-sm
  flex-shrink-0
`;