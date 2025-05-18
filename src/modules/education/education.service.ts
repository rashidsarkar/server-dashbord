import prisma from "../../shared/prisma";

const getAllEducations = async () => {
  const result = await prisma.education.findMany({
    include: {
      about: true,
    },
  });
  return result;
};

const createEducation = async (data: any) => {
  const result = await prisma.education.create({
    data,
    include: {
      about: true,
    },
  });
  return result;
};

const getEducationById = async (id: string) => {
  const result = await prisma.education.findUnique({
    where: {
      id,
    },
    include: {
      about: true,
    },
  });
  return result;
};

const updateEducation = async (id: string, data: any) => {
  const result = await prisma.education.update({
    where: {
      id,
    },
    data,
    include: {
      about: true,
    },
  });
  return result;
};

const deleteEducation = async (id: string) => {
  const result = await prisma.education.delete({
    where: {
      id,
    },
    include: {
      about: true,
    },
  });
  return result;
};

export const educationService = {
  getAllEducations,
  createEducation,
  getEducationById,
  updateEducation,
  deleteEducation,
}; 