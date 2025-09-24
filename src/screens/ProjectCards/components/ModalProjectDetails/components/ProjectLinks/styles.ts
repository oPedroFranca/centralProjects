import tw from "tailwind-styled-components";
import { Button as DefaultButton } from "../../../../../../components/Button";

export const GreenButton = tw(DefaultButton)`
  bg-gradient-to-r
  from-green-500/20
  to-green-600/5

  hover:bg-gradient-to-r
  hover:from-green-600/20
  hover:to-green-700/10
  
  text-green-200
  hover:text-green-100

  border-green-400/30
  hover:border-green-400/50
`;

export const LinkContent = tw.a`
  flex
  items-center
  gap-2
`;
