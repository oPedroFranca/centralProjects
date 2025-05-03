import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex
  h-screen
  w-screen
  justify-center
  items-center
`;

export const LogoContainer = tw.div`
  flex
  flex-col
  justify-center
  items-center
`;

export const Logo = tw.div`
  h-16
  w-16
`;

export const Title = tw.h1`
  text-4xl
  font-bold
  tracking-wide
  text-white

  tracking-wider
`;

export const Form = tw.div`
  bg-gray-800
  p-8
  rounded-xl
  w-96
  text-white
`;

export const LoginButton = tw.button`
  w-full
  p-3
  bg-blue-600
  rounded-lg
  text-white
  font-bold
  focus:outline-none
  hover:bg-blue-700
`;

export const Options = tw.div`
  text-center
  mt-4
`;

