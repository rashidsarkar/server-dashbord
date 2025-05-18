import prisma from "../../shared/prisma";

const getAllBikes = async () => {
  const result = await prisma..findMany({
    select: {
      bikeId: true,
      brand: true,
      model: true,
      year: true,
      customerId: true,
    },
  });
  return result;
};