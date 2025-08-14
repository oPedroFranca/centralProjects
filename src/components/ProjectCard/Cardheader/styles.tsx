import tw from 'tailwind-styled-components';
import { IoCodeSlashOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

export const CardHeader = tw.div`
  pb-2
  relative
  z-10

  flex
  flex-col
  space-y-1.5
  p-3
`;

export const ProjectImage = tw.div`
  w-full
  h-28
  mb-2
  rounded-lg
  overflow-hidden
  bg-background/20
  backdrop-blur-sm
  border
  border-white/10

  group-hover:border-white/20
  transition-all
  duration-300
`;

export const FallbackImage = tw.div`
  w-full
  h-28
  mb-2
  rounded-lg
  bg-background/20
  backdrop-blur-sm
  border
  border-white/10

  group-hover:border-white/20
  flex
  items-center
  justify-center
  transition-all
  duration-300
`;

export const ImageIcon = tw.div`
  p-3
  rounded-full
  bg-primary/10
  group-hover:bg-primary/20
  transition-colors
  duration-300
`;

export const Metadata = tw.div`
  space-y-1
`;

export const ProjectTitle = tw.h3`
  text-base
  text-foreground/90
  group-hover:text-foreground
  transition-colors
  duration-300
  flex
  items-center
  gap-2
`;

export const ProjectMetaData = tw.div`
  flex
  items-center
  gap-2
  text-xs
  text-muted-foreground
`;

export const CalendarIcon = tw(CiCalendar)`
  w-3
  h-3
`;

export const CodeIcon = tw(IoCodeSlashOutline)`
  w-3
  h-3
  text-secondary-purple-300
`;
