import tw from 'tailwind-styled-components';

export const Container = tw.div`
  h-[40px]
  border-gray-500
  flex
  justify-center
  items-center
  mt-auto
`;

export const TextWrapper = tw.div`
  text-xs
  text-gray-400
  font-semibold
  flex
`;

export const Link = tw.a`
  cursor-pointer
  ml-1
  text-purple-200
`;
