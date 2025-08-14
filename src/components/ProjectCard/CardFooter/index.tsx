import * as S from './styles';

interface CardDropdownProps {
  status: string;
}

const CardFooter = ({ status, }: CardDropdownProps) => {
  return (
    <S.StatusContainer>
      <S.StatusIndicator>
        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
        <span className="text-xs text-muted-foreground">{status}</span>
      </S.StatusIndicator>

      <div></div>
    </S.StatusContainer>
  );
};

export default CardFooter;
