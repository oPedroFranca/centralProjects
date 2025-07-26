import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
  flex
  h-screen
  w-screen
`;

export const MainArea = tw.div`
  w-[calc(100%-250px)]
  ml-auto

  h-full
  h-[calc(100%)]
`;

export const MainContent = tw.div`
  flex
  p-5
  items-center
  justify-center
  h-[calc(100%-60px)]
  bg-[#141413]
`;
