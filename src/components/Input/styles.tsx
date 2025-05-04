import tw from 'tailwind-styled-components';

export const Container = tw.div`
  w-full
  flex
  flex-col
`;

interface InputProps {
  hasErrorMessage?: string;
}

export const Input = tw.input<InputProps>`
  w-full
  p-3
  text-white
  bg-transparent
  rounded-lg
  placeholder-primary-gray-400
  
  border

  focus:outline-none
  
  transition
  duration-300
  ease-in-out

  ${({ hasErrorMessage }) => (!hasErrorMessage ? 'mb-4' : '')}
  ${({ hasErrorMessage }) =>
    hasErrorMessage
      ? 'border-red-500'
      : 'border-primary-gray-400 mb-4'}

  ${({ hasErrorMessage }) =>
    hasErrorMessage
      ? 'focus:border-red-500'
      : 'focus:border-primary-gray-300'}
`;

export const ErrorWrapper = tw.div`
  flex
  items-center
  justify-start
  w-full
  mb-4
  ml-2
  mt-1
`;

export const ErrorMessage = tw.p`
  text-red-500
  text-sm
`;