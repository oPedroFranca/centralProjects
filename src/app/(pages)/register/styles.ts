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
  h-[70px]
  w-[70px]
`;

export const Title = tw.h1`
  text-4xl
  font-bold
  tracking-wide
  text-white
  tracking-wider
`;

export const Form = tw.div`
  bg-primary-gray-800
  p-8
  rounded-xl
  w-[400px]
  text-white
`;


export const Options = tw.div`
  text-center
  mt-4
`;

export const Divider = tw.div`
  flex
  items-center
  gap-4
  my-4
`;

export const Line = tw.div`
  flex-grow
  border-t
  border-primary-gray-400
`;

export const DividerText = tw.span`
  text-white
  text-sm
  whitespace-nowrap
`;

export const SocialButtons = tw.div`
  flex
  justify-center
  gap-4
  mt-4
`;

export const FlexBetween = tw.div`
  flex
  justify-between
  mt-4
`;

export const SignInLink = tw.a`
  text-white
  no-underline
  hover:underline
  cursor-pointer
`;