import prisma from "../../shared/prisma";

const getAllProjectCredentials = async () => {
  const result = await prisma.projectCredential.findMany({
    include: {
      project: true,
    },
  });
  return result;
};

const createProjectCredential = async (data: any) => {
  const result = await prisma.projectCredential.create({
    data,
    include: {
      project: true,
    },
  });
  return result;
};

const getProjectCredentialById = async (id: string) => {
  const result = await prisma.projectCredential.findUnique({
    where: {
      id,
    },
    include: {
      project: true,
    },
  });
  return result;
};

const updateProjectCredential = async (id: string, data: any) => {
  const result = await prisma.projectCredential.update({
    where: {
      id,
    },
    data,
    include: {
      project: true,
    },
  });
  return result;
};

const deleteProjectCredential = async (id: string) => {
  const result = await prisma.projectCredential.delete({
    where: {
      id,
    },
    include: {
      project: true,
    },
  });
  return result;
};

export const projectCredentialService = {
  getAllProjectCredentials,
  createProjectCredential,
  getProjectCredentialById,
  updateProjectCredential,
  deleteProjectCredential,
}; 