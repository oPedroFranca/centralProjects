import tw from "tailwind-styled-components";

export const Backdrop = tw.div`
  fixed
  inset-0
  z-[1000]

  bg-primary-gray-800/40

  flex
  items-center
  justify-center
`;

export const Dialog = tw.div`
  relative
  w-full
  max-w-lg
  p-6

  rounded-lg

  bg-primary-gray-700
  dark:bg-primary-gray-800

  shadow-2xl

  ring-1
  ring-primary-gray-500/40
  dark:ring-primary-gray-400/30

  transition
  data-[state=open]:animate-[modal-in_160ms_ease-out]
`;
