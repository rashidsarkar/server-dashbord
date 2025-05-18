import prisma from "../../shared/prisma";

const getAllProjectFeatures = async () => {
  const result = await prisma.projectFeature.findMany({
    include: {
      project: true,
    },
  });
  return result;
};

const createProjectFeature = async (data: any) => {
  const result = await prisma.projectFeature.create({
    data,
    include: {
      project: true,
    },
  });
  return result;
};

const getProjectFeatureById = async (id: string) => {
  const result = await prisma.projectFeature.findUnique({
    where: {
      id,
    },
    include: {
      project: true,
    },
  });
  return result;
};

const updateProjectFeature = async (id: string, data: any) => {
  const result = await prisma.projectFeature.update({
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

const deleteProjectFeature = async (id: string) => {
  const result = await prisma.projectFeature.delete({
    where: {
      id,
    },
    include: {
      project: true,
    },
  });
  return result;
};

export const projectFeatureService = {
  getAllProjectFeatures,
  createProjectFeature,
  getProjectFeatureById,
  updateProjectFeature,
  deleteProjectFeature,
}; 