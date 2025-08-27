import tw from 'tailwind-styled-components';

export const Overlay = tw.div`
  fixed
  inset-0
  bg-black/50
  flex
  justify-center
  items-center
  z-50
`;

export const ModalContainer = tw.div`
  bg-black
  p-6
  rounded-lg
  shadow-lg
  max-w-sm
  w-full
  text-center
`;
