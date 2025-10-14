import tw from 'tailwind-styled-components';

interface IDropdownMenuStyleProps {
  $align?: 'start' | 'end';
}

export const DropdownContainer = tw.div`
  relative
  inline-block
`;

export const DropdownTrigger = tw.div`
  cursor-pointer
`;

export const DropdownContent = tw.div<IDropdownMenuStyleProps>`
  absolute
  z-[999]
  min-w-[120px]
  mt-1
  p-1

  rounded-md
  shadow-2xl
  border
  border-primary-gray-500

  bg-primary-gray-800
  overflow-hidden

  ${(p) => p.$align === 'end' ? 'right-0' : 'left-0'}
`;

export const DropdownItem = tw.button`
  w-full
  flex
  items-center
  px-2
  py-1.5
  gap-2

  text-sm
  text-primary-gray-200
  text-left

  transition-colors
  duration-200
  ease-in-out

  focus:outline-none
  focus:bg-primary-gray-500/50
  hover:bg-primary-gray-500/50

  cursor-pointer

  rounded-sm
`;
