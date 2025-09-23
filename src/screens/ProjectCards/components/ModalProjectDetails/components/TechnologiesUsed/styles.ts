import tw from "tailwind-styled-components";

export const Container = tw.div`
  bg-gradient-to-r
  from-primary-gray-700/20
  to-primary-gray-700/10
  backdrop-blur-sm
  rounded-xl
  p-6
  border
  border-primary-gray-500/20
`;

export const Header = tw.div`
  flex
  items-center
  gap-2
  mb-4
`;

export const Title = tw.h3`
  text-lg
  font-semibold
  text-primary-gray-200
`;

export const BadgesWrapper = tw.div`
  flex
  flex-wrap
  gap-3
`;

export const Badge = tw.div`
  flex
  items-center
  gap-2
  px-3
  py-2
  rounded-md
  border
  border-secondary-purple-300/30
  bg-secondary-purple-300/10
  text-primary-gray-200
  text-sm
  transition-colors
  duration-300
  hover:bg-secondary-purple-300/20
  hover:border-secondary-purple-300/50
  cursor-default
`;
