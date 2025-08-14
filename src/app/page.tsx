import { BiPlus } from 'react-icons/bi';
import { Button, Container, HeaderPagesTitle, ProjectCard } from '@/components';

import * as S from './styles';
import { mockCardProject } from './mockCardProject';

export default function Home() {
  return (
    <>
      <HeaderPagesTitle
        title="Qualquer Nome"
        description="Gerencie e acompanhe seus projetos pessoais"
        buttons={
          <Button variant="gradient" className="h-fit m-auto">
            <BiPlus className="h-4 w-4 m-auto" />
            Novo Projeto
          </Button>
        }
      />

      <Container>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] gap-3">
          <ProjectCard project={mockCardProject[0]} onProjectClick={() => { }} />
          <ProjectCard project={mockCardProject[0]} onProjectClick={() => { }} />
          <ProjectCard project={mockCardProject[0]} onProjectClick={() => { }} />
          <ProjectCard project={mockCardProject[0]} onProjectClick={() => { }} />
          <ProjectCard project={mockCardProject[0]} onProjectClick={() => { }} />
          <ProjectCard project={mockCardProject[0]} onProjectClick={() => { }} />
          <ProjectCard project={mockCardProject[0]} onProjectClick={() => { }} />
          <ProjectCard project={mockCardProject[0]} onProjectClick={() => { }} />
          <ProjectCard project={mockCardProject[0]} onProjectClick={() => { }} />
        </div>
      </Container>
    </>
  );
}
