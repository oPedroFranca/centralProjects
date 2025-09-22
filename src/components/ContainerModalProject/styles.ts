import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex
  flex-col
  relative
  rounded-xl
  overflow-hidden
  bg-gradient-to-br
  from-primary-gray-700/30
  to-primary-gray-700/5
  backdrop-blur-sm
  border
  border-primary-gray-500/50
  p-4
  gap-4
`;

export const Header = tw.div`
  flex
  items-center
  gap-3
  text-sm
  font-medium
`;

export const IconWrapper = tw.div`
  w-4
  h-4
  text-secondary-purple-300
`;

export const Title = tw.span`
  mt-1
`;
