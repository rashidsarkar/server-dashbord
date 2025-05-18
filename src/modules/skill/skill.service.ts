import prisma from "../../shared/prisma";

const getAllSkills = async () => {
  const result = await prisma.skill.findMany({
    include: {
      category: true,
    },
  });
  return result;
};

const createSkill = async (data: any) => {
  const result = await prisma.skill.create({
    data,
    include: {
      category: true,
    },
  });
  return result;
};

const getSkillById = async (id: string) => {
  const result = await prisma.skill.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });
  return result;
};

const updateSkill = async (id: string, data: any) => {
  const result = await prisma.skill.update({
    where: {
      id,
    },
    data,
    include: {
      category: true,
    },
  });
  return result;
};

const deleteSkill = async (id: string) => {
  const result = await prisma.skill.delete({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });
  return result;
};

export const skillService = {
  getAllSkills,
  createSkill,
  getSkillById,
  updateSkill,
  deleteSkill,
}; 