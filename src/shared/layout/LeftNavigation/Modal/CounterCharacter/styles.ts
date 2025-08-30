import tw from "tailwind-styled-components";

export const CounterRow = tw.div`
  flex
  justify-between
  items-center
`;

export const CounterRight = tw.div`
  ml-auto
`;

interface CounterProps {
  $warning?: boolean;
}
export const Counter = tw.span<CounterProps>`
  text-xs
  font-medium
  backdrop-blur-sm
  px-2
  py-1
  rounded-md
  border
  ${({ $warning }) =>
    $warning
      ? "text-orange-400 bg-orange-500/10 border-orange-400/30"
      : "text-primary-gray-300 bg-background/10 border-white/20"}
`;
