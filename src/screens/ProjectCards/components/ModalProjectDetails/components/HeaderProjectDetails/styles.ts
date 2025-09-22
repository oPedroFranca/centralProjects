import tw from "tailwind-styled-components";

export const Header = tw.div`
  flex
  flex-col
  space-y-1.5
  text-center
  sm:text-left
  pb-6
  border-b
  border-primary-gray-500/50
`;

export const Title = tw.div`
  leading-none
  tracking-tight
  text-3xl
  font-bold
  bg-gradient-to-r
  from-primary-gray-200
  to-primary-gray-200/70
  bg-clip-text
  flex
  items-center
  gap-3
`;

export const IconWrapper = tw.div`
  p-2
  rounded-lg
  bg-secondary-purple-600/20
  border
  border-secondary-purple-600/30
  flex
  items-center
  justify-center¡
`;