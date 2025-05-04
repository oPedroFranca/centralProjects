import tw from 'tailwind-styled-components';

export const Container = tw.div`
  h-[40px]
  border-primary-gray-500
  flex
  justify-center
  items-center
  mt-auto
`;

export const TextWrapper = tw.div`
  text-xs
  text-primary-gray-400
  font-semibold
  flex
`;

export const Link = tw.a`
  cursor-pointer
  ml-1
  text-secondary-purple-200
`;
