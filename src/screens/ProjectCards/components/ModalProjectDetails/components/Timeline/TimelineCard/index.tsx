import * as S from "./styles";

type Props = {
  icon: React.ReactNode;
  title: string;
  value: string | number;
};

export const TimelineCard = ({ icon, title, value }: Props) => {
  return (
    <S.TimelineItem>
      <S.IconWrapper>{icon}</S.IconWrapper>
      <div>
        <S.Label>{title}</S.Label>
        <S.Value>{value}</S.Value>
      </div>
    </S.TimelineItem>
  );
};
