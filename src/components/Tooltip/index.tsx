import { ReactNode, useState } from "react";
import * as S from "./styles";

type TooltipProps = {
  children: ReactNode;  
  content?: ReactNode;  
  text?: string;        
};

export const Tooltip = ({ children, content, text }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <S.TooltipWrapper
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <S.TooltipContent>
          {text ?? content}
        </S.TooltipContent>
      )}
    </S.TooltipWrapper>
  );
};
