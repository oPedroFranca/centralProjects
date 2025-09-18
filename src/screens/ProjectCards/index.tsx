"use client";

import { BiPlus } from "react-icons/bi";
import { Container, HeaderPagesTitle, ProjectCard } from "@/components";
import { mockCardProject } from "./mockCardProject";
import ModalCreateProjectCard from "./components/ModalCreateProjectCard";
import { useState } from "react";
import ModalProjectDetails from "./components/ModalProjectDetails";
import * as S from "./styles";

export const ProjectCards = () => {
  const [isModalOpenProject, setIsModalOpenProject] = useState(false);
  const [isModalOpenDetails, setIsModalOpenDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const handleOpenDetails = (project: any) => {
    setSelectedProject(project);
    setIsModalOpenDetails(true);
  };

  return (
    <>
      <HeaderPagesTitle
        title="Qualquer Nome"
        description="Gerencie e acompanhe seus projetos pessoais"
        buttons={
          <S.NewProjectButton
            variant="gradient"
            onClick={() => setIsModalOpenProject(true)}
          >
            <BiPlus className="h-4 w-4 m-auto" />
            New Project
          </S.NewProjectButton>
        }
      />

      <Container>
        <S.CardsGrid>
          {mockCardProject.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onProjectClick={() => handleOpenDetails(project)}
            />
          ))}
        </S.CardsGrid>
      </Container>

      <ModalCreateProjectCard
        isOpen={isModalOpenProject}
        onClose={() => setIsModalOpenProject(false)}
      />

      <ModalProjectDetails
        isOpen={isModalOpenDetails}
        onClose={() => setIsModalOpenDetails(false)}
        projectData={selectedProject}
      />
    </>
  );
}
