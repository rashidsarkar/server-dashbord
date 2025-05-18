import prisma from "../../shared/prisma";

const getAllSkills = async () => {
  const result = await prisma.skill.findMany({});
  return result;
};

const createSkill = async (data: any) => {
  const result = await prisma.skill.create({
    data,
  });
  return result;
};

const getSkillById = async (id: string) => {
  const result = await prisma.skill.findUnique({
    where: {
      id,
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
  });
  return result;
};

const deleteSkill = async (id: string) => {
  const result = await prisma.skill.delete({
    where: {
      id,
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
