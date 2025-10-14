import tw from 'tailwind-styled-components';

export const DropdownContainer = tw.div`
  absolute
  right-2
  pointer-events-auto
`;

export const TriggerButton = tw.div`
  h-6
  w-6
  p-0
  opacity-0
  group-hover:opacity-100
  transition-opacity
  duration-200
  hover:bg-white/10
  inline-flex
  items-center
  justify-center
  rounded-md
  cursor-pointer
`;
