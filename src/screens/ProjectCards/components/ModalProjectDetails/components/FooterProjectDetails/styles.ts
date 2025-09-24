import tw from "tailwind-styled-components";

export const FooterContainer = tw.div`
  pt-4
  border-t
  border-white/10
`;

export const Content = tw.div`
  flex
  items-center
  justify-between
`;

export const LeftContent = tw.div`
  flex
  items-center
  gap-2
`;

export const StatusLabel = tw.span`
  text-sm
  text-muted-foreground
`;

interface IStatusBadgeProps {
  $isActive?: boolean;
}

export const StatusBadge = tw.span<IStatusBadgeProps>`
  inline-flex
  items-center
  rounded-full
  border
  px-2.5
  py-0.5
  text-xs
  font-semibold
  ${(p) =>
    p.$isActive
      ? "bg-green-500/20 text-green-200 border-green-400/30"
      : "bg-red-500/20 text-red-200 border-red-400/30"}
`;
