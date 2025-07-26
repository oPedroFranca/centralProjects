import tw from 'tailwind-styled-components';

export const ButtonNavSidebar = tw.button`
  w-full
  flex
  items-center
  gap-3
  p-2
  h-10
  rounded-md
  text-left
  transition-all
  duration-300
  backdrop-blur-sm
  group

  ${({ selectedCategoryId, isMinimized, categoryId }) => `
    ${selectedCategoryId === categoryId
      ? 'bg-purple-300/20 border border-purple-300/30 text-foreground shadow-lg shadow-purple-300/10'
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