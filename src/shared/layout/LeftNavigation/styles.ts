import tw from "tailwind-styled-components";

interface IContainerProps {
  $isMinimized: boolean;
}

export const Container = tw.div<IContainerProps>`
  ${(p) => (p.$isMinimized ? "w-[65px] pl-3 pr-3" : "w-[250px] pl-5 pr-5")}

  fixed
  left-0
  top-0
  h-full
  bg-background/30
  backdrop-blur-xl
  border-r
  border-white/10
  transition-all
  duration-300
  ease-in-out
  flex
  flex-col
  z-50
`;
