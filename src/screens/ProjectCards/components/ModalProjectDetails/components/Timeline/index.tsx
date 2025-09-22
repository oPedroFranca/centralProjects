import { ContainerModalProject } from '@/components';
import { FiCalendar } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { RiTimelineView } from "react-icons/ri";

import * as S from "./styles";
import { TimelineCard } from "./TimelineCard";

type Props = {
  projectData: {
    startDate?: string;
    endDate?: string;
  };
};

export const Timeline = ({ projectData }: Props) => {
  const { startDate, endDate } = projectData;

  let developmentDays: number | null = null;
  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    developmentDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  return (
    <ContainerModalProject title="Linha do Tempo" icon={<RiTimelineView size={20} />}>
      {(startDate || endDate) && (
        <S.TimelineGrid>
          {startDate && (
            <TimelineCard
              icon={<S.IconGreen><FiCalendar size={16}/></S.IconGreen>}
              title="Data de Início"
              value={startDate}
            />
          )}

          {endDate && (
            <TimelineCard
              icon={<S.IconRed><FiCalendar size={16}/></S.IconRed>}
              title="Data de Conclusão"
              value={endDate}
            />
          )}

          {developmentDays !== null && (
            <TimelineCard
              icon={<S.IconBlue><FaRegClock size={16}/></S.IconBlue>}
              title="Duração Total"
              value={`${developmentDays} dias`}
            />
          )}
        </S.TimelineGrid>
      )}
    </ContainerModalProject>
  );
};
