import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
  flex
  h-screen
  w-screen
`;

interface MainAreaProps {
  $isMinimizedSidebar: boolean;
}

export const MainArea = tw.div<MainAreaProps>`
  ${(p) =>
    p.$isMinimizedSidebar ? "w-[calc(100%-65px)]" : "w-[calc(100%-250px)]"}
  ml-auto
  h-full

  transition-all
  duration-300
  ease-in-out
`;

export const MainContent = tw.div`
  mt-[60px]

  flex
  p-5
  items-center
  justify-center
  h-[calc(100%-60px)]
  bg-[#141413]
`;
