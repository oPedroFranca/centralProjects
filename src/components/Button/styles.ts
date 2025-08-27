import tw from 'tailwind-styled-components';

interface IButtonStyleProps {
  $variant?: 'primary' | 'secondary';
}

export const Button = tw.button<IButtonStyleProps>`
  flex
  items-center
  justify-center

  transition
  duration-300
  ease-in-out

  w-full
  h-full

  focus:outline-none
  focus:ring-2
  focus:ring-primary-gray-500

  ${(p) =>
    p.$variant === 'primary' &&
    `
      m-auto
      text-primary-gray-900
      bg-white
      hover:bg-primary-gray-100

      border
      border-primary-gray-400
      hover:border-primary-gray-600

      font-medium
      rounded-md
      text-sm
      px-5
      py-2.5
      text-center

      dark:bg-primary-gray-600
      dark:border-primary-gray-400
      dark:hover:bg-primary-gray-500
      dark:hover:border-primary-gray-300
      dark:text-white
    `}

  ${(p) =>
    p.$variant === 'secondary' &&
    `
      w-10
      h-10

      bg-white
      text-primary-gray-900

      border
      border-primary-gray-400
      rounded-full

      hover:bg-primary-gray-100
      hover:border-primary-gray-600

      dark:bg-primary-gray-600
      dark:border-primary-gray-400
      dark:hover:bg-primary-gray-500
      dark:hover:border-primary-gray-300
      dark:text-white
    `}

    ${(p) =>
    p.$variant === 'gradient' &&
    `
      gap-2
      px-3
      py-1.5

      bg-gradient-to-r
      from-purple-500/20
      to-purple-600/5
      
      hover:bg-gradient-to-r
      hover:from-purple-600/20
      hover:to-purple-700/10
      text-purple-200
      hover:text-purple-100

      border-purple-400/30
      hover:border-purple-400/50
      rounded-md

      shadow-lg
      hover:shadow-xl
      border

      transition-all
      duration-300

      font-medium
    `}
`;
