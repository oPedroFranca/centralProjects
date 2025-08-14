import tw from 'tailwind-styled-components';

export const CardContent = tw.div`
  relative
  z-10
  p-3
  pt-0
`;

export const ProjectDescription = tw.p`
  text-muted-foreground/80
  mb-3
  line-clamp-3
  leading-relaxed
  group-hover:text-muted-foreground

  transition-colors
  duration-300
  text-xs
`;

export const ActionButtons = tw.div`
  flex
  gap-2
`;

export const EyeIcon = tw.div`
  transition-transform
  duration-300
  group-hover:btn:scale-110
`;

export const GithubIcon = tw.div`
  transition-transform
  duration-300
  group-hover:btn:scale-110
`;
