import tw from "tailwind-styled-components";
import { Button as DefaultButton} from "../../Button";

export const Footer = tw.div`
  mt-6
  flex
  items-center
  justify-end
  gap-3
`;

export const ButtonConfirm = tw(DefaultButton)`
  w-[100px]
  h-[36px]
  m-0
`;

export const ButtonCancel = tw(DefaultButton)`
  w-[100px]
  h-[36px]
  m-0
`;