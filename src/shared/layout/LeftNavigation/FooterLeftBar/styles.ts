import tw from "tailwind-styled-components";

export const Container = tw.div`
  mt-auto
  mb-3
  pt-3
  border-t
  border-white/10
`;

export const TextWrapper = tw.div`
  text-xs
  text-muted-foreground/60
  text-center
  drop-shadow-sm
`;

export const Link = tw.a`
  cursor-pointer
  ml-1
  text-secondary-purple-200
`;
