import tw from "tailwind-styled-components";

export const Backdrop = tw.div`
  fixed
  inset-0
  z-[1000]

  bg-primary-gray-800/60

  flex
  items-center
  justify-center
`;

export const Dialog = tw.div`
  relative
  w-auto
  max-w-[800px]
  min-w-[320px]
  max-h-[95vh]
  p-5

  rounded-md

  bg-primary-gray-800/60
  backdrop-blur-xl

  shadow-2xl

  ring-2
  ring-primary-gray-500/40
  dark:ring-primary-gray-400/30
`;
