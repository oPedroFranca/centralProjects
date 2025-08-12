import React from 'react';
import { LuSparkles } from "react-icons/lu";
import { Container, ContentWrapper, Title, Icon, Description } from './styles';

interface HeaderPagesTitleProps {
  title: string;
  description: string;
  descriptionColor?: string;
  buttons?: React.ReactNode;
}

export const HeaderPagesTitle = ({
  title,
  description,
  buttons,
}: HeaderPagesTitleProps) => {
  return (
    <Container>
      <ContentWrapper>
        <Title>
          <Icon />
          {title}
        </Title>
        <Description>
          {description}
        </Description>
      </ContentWrapper>

      {buttons && (
        <div className="flex ">{buttons}</div>
      )}
    </Container>
  );
};
