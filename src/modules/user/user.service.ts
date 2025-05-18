import prisma from "../../shared/prisma";
import bcrypt from "bcrypt";

const getAllUsers = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const createUser = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 12);
  const result = await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const getUserById = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const updateUser = async (id: string, data: any) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 12);
  }
  const result = await prisma.user.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const deleteUser = async (id: string) => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

export const userService = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
}; 