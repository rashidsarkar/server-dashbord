import prisma from "../../shared/prisma";

const getAllSkillCategories = async () => {
  const result = await prisma.skillCategory.findMany({
    include: {
      skills: true,
    },
  });
  return result;
};

const createSkillCategory = async (data: any) => {
  const result = await prisma.skillCategory.create({
    data,
    include: {
      skills: true,
    },
  });
  return result;
};

const getSkillCategoryById = async (id: string) => {
  const result = await prisma.skillCategory.findUnique({
    where: {
      id,
    },
    include: {
      skills: true,
    },
  });
  return result;
};

const updateSkillCategory = async (id: string, data: any) => {
  const result = await prisma.skillCategory.update({
    where: {
      id,
    },
    data,
    include: {
      skills: true,
    },
  });
  return result;
};

const deleteSkillCategory = async (id: string) => {
  const result = await prisma.skillCategory.delete({
    where: {
      id,
    },
    include: {
      skills: true,
    },
  });
  return result;
};

export const skillCategoryService = {
  getAllSkillCategories,
  createSkillCategory,
  getSkillCategoryById,
  updateSkillCategory,
  deleteSkillCategory,
}; 