import tw from 'tailwind-styled-components';
import { IoAlertCircleOutline } from 'react-icons/io5';

export const Container = tw.div`
  w-full
  flex
  flex-col
`;

export const InputWrapper = tw.div`
  w-full
  flex
  items-center
  relative
`;

export const LeftIcon = tw.div`
  text-primary-gray-400
  mr-2
  absolute
  left-3
  top-1/2
  transform
  -translate-y-1/2
  h-4
  w-4 
`;

interface InputProps {
  hasErrorMessage?: string;
  hasLeftIcon?: boolean;
}

export const Input = tw.input<InputProps>`
  w-full
  h-10 
  pr-10

  ${({ hasLeftIcon }) => (hasLeftIcon ? 'pl-10' : 'pl-3')}

  transition-all
  duration-300

  text-white
  bg-transparent
  rounded-lg
  placeholder-primary-gray-400
  
  border
  focus:outline-none
  
  ${({ hasErrorMessage }) =>
    hasErrorMessage
      ? 'border-red-400/50 focus:border-red-400/50 bg-red-500/5'
      : 'border-white/20 focus:border-primary/50 focus:bg-background/60'}
`;

export const AlertIcon = tw(IoAlertCircleOutline)`
  absolute
  right-3
  top-1/2
  transform
  -translate-y-1/2
  h-4
  w-4
  text-red-400
`;
