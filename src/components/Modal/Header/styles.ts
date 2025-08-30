import tw from "tailwind-styled-components";

export const Header = tw.div`
  w-full
  flex
  items-center
  justify-between
  gap-3
`;

export const Title = tw.h3`
  text-base
  font-semibold
  text-primary-gray-600
`;

export const CloseX = tw.button`
  flex
  items-center
  justify-center
  
  transition-colors
  text-primary-gray-300
  hover:text-primary-gray-200
`;
