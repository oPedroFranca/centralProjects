import tw from "tailwind-styled-components";

export const TimelineGrid = tw.div`
  grid
  grid-cols-1
  md:grid-cols-3
  gap-4
`;

export const TimelineItem = tw.div`
  flex
  items-center
  gap-3
  p-3
  rounded-lg
  bg-primary-gray-600
  border
  border-primary-gray-500
`;

export const IconGreen = tw.div`
  w-4 h-4 text-green-400
`;

export const IconRed = tw.div`
  w-4 h-4 text-red-400
`;

export const IconBlue = tw.div`
  w-4 h-4 text-blue-400
`;
