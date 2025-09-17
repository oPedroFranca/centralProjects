import tw from 'tailwind-styled-components';

export const CardContainer = tw.div`
  rounded-lg
  border
  bg-card
  text-card-foreground
  shadow-sm

  group
  relative
  overflow-hidden
  bg-background/10
  backdrop-blur-xl
  border
  border-white/20

  hover:border-white/30
  shadow-xl
  hover:shadow-2xl
  transition-all
  duration-500
  hover:scale-[1]
  hover:-translate-y-1

  cursor-pointer
  max-w-xs
`;

export
const GradientOverlay = tw.div`
  absolute
  inset-0
  bg-gradient-to-br
  from-primary/5
  via-transparent
  to-background/5
  opacity-0

  group-hover:opacity-100
  transition-opacity
  duration-500
`;