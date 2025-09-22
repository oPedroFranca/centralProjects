import tw from "tailwind-styled-components";

export const TeamHeader = tw.div`
  flex
  items-center
  gap-2
`;

export const Title = tw.h3`
  text-lg
  font-semibold
  text-primary-gray-200
`;

export const TeamGrid = tw.div`
  grid
  grid-cols-1
  md:grid-cols-2
  gap-3
`;

export const TeamItem = tw.div`
  flex
  items-center
  justify-between
  p-3
  rounded-lg
  bg-primary-gray-600
  border
  border-primary-gray-500
  transition-colors
  duration-300
  hover:bg-primary-gray-500/40
`;

export const ParticipantInfo = tw.div`
  flex-1
`;

export const ParticipantName = tw.p`
  text-sm
  text-primary-gray-200
  font-medium
`;

export const ParticipantRole = tw.p`
  text-xs
  text-primary-gray-300
  mt-1
`;

export const SocialWrapper = tw.div`
  flex
  gap-2
`;

const BaseButton = tw.a`
  h-7
  w-7
  flex
  items-center
  justify-center
  border
  rounded-sm
  transition-all
  duration-300
  text-sm
`;

export const SocialButtonBlue = tw(BaseButton)`
  bg-blue-500/10
  border-blue-400/30
  text-blue-400
  hover:bg-blue-500/20
  hover:border-blue-400/50
`;

export const SocialButtonPurple = tw(BaseButton)`
  bg-secondary-purple-300/20
  border-secondary-purple-300/30
  text-secondary-purple-300
  hover:bg-secondary-purple-300/30
  hover:border-secondary-purple-300/50
`;
