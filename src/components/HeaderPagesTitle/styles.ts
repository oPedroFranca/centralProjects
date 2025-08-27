import tw from 'tailwind-styled-components';
import { LuSparkles } from "react-icons/lu";

export const Container = tw.div`
  flex
  justify-between
`;

export const ContentWrapper = tw.div`
  p-4
`;

export const Title = tw.h1`
  text-2xl
  font-bold
  mb-2
  text-foreground/90
  drop-shadow-sm
  flex
  items-center
  gap-3
`;

export const Icon = tw(LuSparkles)`
  w-6
  h-6
  text-secondary-purple-300
`;

export const Description = tw.p`
  text-primary-gray-300
  text-sm
`;
