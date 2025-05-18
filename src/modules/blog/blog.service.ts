import prisma from "../../shared/prisma";

const getAllBlog = async () => {
  const result = await prisma.blog.findMany();
  return result;
};

const createBlog = async (data: any) => {
  const result = await prisma.blog.create({
    data,
  });
  return result;
};

const getBlogById = async (id: string) => {
  const result = await prisma.blog.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateBlog = async (id: string, data: any) => {
  const result = await prisma.blog.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteBlog = async (id: string) => {
  const result = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return result;
};

export const blogService = {
  getAllBlog,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
