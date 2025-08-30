import tw from "tailwind-styled-components";

export const Header = tw.div`
  w-full
  flex
  items-center
  justify-between
  gap-3
  mb-6
`;

export const Title = tw.h3`
  text-base
  font-semibold
  text-neutral-900 
  dark:text-neutral-100
`;

export const CloseX = tw.button`
  flex
  items-center
  justify-center
  
  transition-colors
  hover:text-neutral-800
  dark:text-neutral-400
  dark:hover:text-neutral-200
`;
