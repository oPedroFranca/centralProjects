import tw from 'tailwind-styled-components';
import { IoAlertCircleOutline } from 'react-icons/io5';

export const ErrorWrapper = tw.div`
  flex
  items-center
  justify-start
  w-full
  gap-2
  bg-red-500/10
  border
  border-red-400/20
  rounded-lg
  px-3
  py-1.5
  mt-2
`;

export const ErrorMessage = tw.p`
  text-red-400
  text-xs
  font-medium
`;

export const AlertIcon = tw(IoAlertCircleOutline)`
  h-3
  w-3
  text-red-400
  flex-shrink-0
`;

