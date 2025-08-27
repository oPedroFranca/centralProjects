import tw from 'tailwind-styled-components';

interface IDividerProps {
  color: string;
  thickness: string;
}

export const Divider = tw.div<IDividerProps>`
  w-full
  ${({ color }) => `bg-${color}`}
  ${({ thickness }) => thickness}
  mb-4
  mt-4
  data-testid="divider"
`;
