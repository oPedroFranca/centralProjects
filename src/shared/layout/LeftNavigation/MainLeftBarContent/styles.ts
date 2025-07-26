import tw from "tailwind-styled-components";

export const Container = tw.div`
  pt-4
  pb-4
`;

export const Title = tw.p`
  text-base
  font-semibold
  text-foreground/90
  drop-shadow-sm
`;

export const List = tw.div`
  pt-2
  relative
  flex
  flex-1
  flex-col

  space-y-2
`;

export const Divider = tw.div`
  bg-white/20
`;
