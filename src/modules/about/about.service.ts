import { About } from "@prisma/client";
import prisma from "../../shared/prisma";

const getAllAbouts = async () => {
  const result = await prisma.about.findMany({
 
  });
  return result;
};

const createAbout = async (data: About) => {
 
  const result = await prisma.about.create({
    data,
  
  });
  return result;
};

const getAboutById = async (id: string) => {
  const result = await prisma.about.findUnique({
    where: {
      id,
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
   
  });
  return result;
};

const deleteAbout = async (id: string) => {
  const result = await prisma.about.delete({
    where: {
      id,
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