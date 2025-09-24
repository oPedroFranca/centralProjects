import { ContainerModalProject, Tooltip } from '@/components';
import { FaUsers } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import * as S from "./styles";

type Participant = {
  name: string;
  role: string;
  linkedinUrl?: string;
  githubUrl?: string;
};

type Props = {
  projectData: {
    participants?: Participant[];
  };
};

export const TeamProject = ({ projectData }: Props) => {
  const { participants } = projectData;

  if (!participants || participants.length === 0) return null;

  return (
    <ContainerModalProject
      title="Equipe do Projeto"
      icon={<FaUsers size={18} />}
    >
      <S.TeamGrid>
        {participants.map((participant, index) => (
          <S.TeamItem key={index}>
            <S.ParticipantInfo>
              <S.ParticipantName>{participant.name}</S.ParticipantName>
              <S.ParticipantRole>{participant.role}</S.ParticipantRole>
            </S.ParticipantInfo>

            <S.SocialWrapper>
              {participant.linkedinUrl && (
                <S.SocialButtonBlue
                  as="a"
                  href={participant.linkedinUrl}
                  target="_blank"
                  onClick={(e: any) => e.stopPropagation()}
                >
                  <FaLinkedin />
                </S.SocialButtonBlue>
              )}
              {participant.githubUrl && (
                <S.SocialButtonPurple
                  as="a"
                  href={participant.githubUrl}
                  target="_blank"
                  onClick={(e: any) => e.stopPropagation()}
                >
                  <FiGithub />
                </S.SocialButtonPurple>
              )}
            </S.SocialWrapper>
          </S.TeamItem>
        ))}
      </S.TeamGrid>
    </ContainerModalProject>
  );
};
