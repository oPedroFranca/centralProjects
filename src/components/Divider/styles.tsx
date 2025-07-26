import tw from 'tailwind-styled-components';

interface DividerProps {
  color: string;
  thickness: string;
}

export const Divider = tw.div<DividerProps>`
  w-full
  ${({ color }) => `bg-${color}`}
  ${({ thickness }) => thickness}
  mb-4
  mt-4
`;
