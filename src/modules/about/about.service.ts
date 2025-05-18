import prisma from "../../shared/prisma";

const getAllAbouts = async () => {
  const result = await prisma.about.findMany({
    include: {
      education: true,
    },
  });
  return result;
};

const createAbout = async (data: any) => {
  const result = await prisma.about.create({
    data,
    include: {
      education: true,
    },
  });
  return result;
};

const getAboutById = async (id: string) => {
  const result = await prisma.about.findUnique({
    where: {
      id,
    },
    include: {
      education: true,
    },
  });
  return result;
};

const updateAbout = async (id: string, data: any) => {
  const result = await prisma.about.update({
    where: {
      id,
    },
    data,
    include: {
      education: true,
    },
  });
  return result;
};

const deleteAbout = async (id: string) => {
  const result = await prisma.about.delete({
    where: {
      id,
    },
    include: {
      education: true,
    },
  });
  return result;
};

export const aboutService = {
  getAllAbouts,
  createAbout,
  getAboutById,
  updateAbout,
  deleteAbout,
}; 