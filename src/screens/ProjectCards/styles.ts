import tw from "tailwind-styled-components";
import { Button } from "@/components";

export const CardsGrid = tw.div`
  grid 
  grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] 
  gap-3 
  justify-items-start
`;

export const NewProjectButton = tw(Button)`
  h-fit 
  m-auto
`;
