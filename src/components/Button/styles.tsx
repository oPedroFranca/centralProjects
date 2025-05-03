import tw from 'tailwind-styled-components';

interface ButtonStyleProps {
  $variant?: 'primary' | 'secondary';
}

export const Button = tw.button<ButtonStyleProps>`
  flex
  items-center
  justify-center

  transition
  duration-200
  ease-in-out

  w-full
  h-full

  focus:outline-none
  focus:ring-2
  focus:ring-gray-500

  ${(p) =>
    p.$variant === 'primary' &&
    `
      m-auto
      text-gray-900
      bg-white
      hover:bg-gray-100

      border
      border-gray-400
      hover:border-gray-600

      font-medium
      rounded-lg
      text-sm
      px-5
      py-2.5
      text-center

      dark:bg-gray-600
      dark:border-gray-400
      dark:hover:bg-gray-500
      dark:hover:border-gray-300
      dark:text-white
    `}

  ${(p) =>
    p.$variant === 'secondary' &&
    `
      w-10
      h-10

      bg-white
      text-gray-900

      border
      border-gray-400
      rounded-full

      hover:bg-gray-100
      hover:border-gray-600

      dark:bg-gray-600
      dark:border-gray-400
      dark:hover:bg-gray-500
      dark:hover:border-gray-300
      dark:text-white
    `}
`;
