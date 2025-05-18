import prisma from "../../shared/prisma";

const getAllProjects = async () => {
  const result = await prisma.project.findMany({
    include: {
      features: true,
      projectCredential: true,
    },
  });
  return result;
};

const createProject = async (data: any) => {
  const result = await prisma.project.create({
    data,
    include: {
      features: true,
      projectCredential: true,
    },
  });
  return result;
};

const getProjectById = async (id: string) => {
  const result = await prisma.project.findUnique({
    where: {
      id,
    },
    include: {
      features: true,
      projectCredential: true,
    },
  });
  return result;
};

const updateProject = async (id: string, data: any) => {
  const result = await prisma.project.update({
    where: {
      id,
    },
    data,
    include: {
      features: true,
      projectCredential: true,
    },
  });
  return result;
};

const deleteProject = async (id: string) => {
  const result = await prisma.project.delete({
    where: {
      id,
    },
    include: {
      features: true,
      projectCredential: true,
    },
  });
  return result;
};

export const projectService = {
  getAllProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
}; 