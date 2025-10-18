import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
  flex
  h-screen
  w-screen
`;

interface IMainAreaProps {
  $isMinimizedSidebar: boolean;
}

export const MainArea = tw.div<IMainAreaProps>`
  ${(p) =>
    p.$isMinimizedSidebar ? "w-[calc(100%-65px)]" : "w-[calc(100%-250px)]"}
  ml-auto
  h-full

  transition-all
  duration-300
  ease-in-out
  overflow-auto
`;

export const MainContent = tw.div`
  flex
  flex-col
  gap-4
  mt-[60px]
  p-5

  min-h-[calc(100vh-60px)]
  bg-[#141413]
`;
