import React from 'react';
import { Container, ContentWrapper, Title, Icon, Description } from './styles';

interface IHeaderPagesTitleProps {
  title: string;
  description: string;
  descriptionColor?: string;
  buttons?: React.ReactNode;
}

export const HeaderPagesTitle = ({
  title,
  description,
  buttons,
}: IHeaderPagesTitleProps) => {
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
