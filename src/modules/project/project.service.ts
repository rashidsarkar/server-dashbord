import { Project } from "@prisma/client";
import prisma from "../../shared/prisma";

const getAllProjects = async () => {
  const result = await prisma.project.findMany({});
  return result;
};

const createProject = async (payload: Project) => {
  const result = await prisma.project.create({
    data: { ...payload },
  });

  return result;
};

const getProjectById = async (id: string) => {
  const result = await prisma.project.findUnique({
    where: {
      id,
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
  });
  return result;
};

const deleteProject = async (id: string) => {
  const result = await prisma.project.delete({
    where: {
      id,
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
