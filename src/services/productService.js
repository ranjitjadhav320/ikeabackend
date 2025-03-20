const prisma = require('../models/prismaClient');

exports.getAllProducts = async () => {
  return await prisma.Ikeaproduct.findMany();
};

exports.getProductById = async (id) => {
  return await prisma.Ikeaproduct.findUnique({
    where: { id: parseInt(id) },
  });
};

exports.createProduct = async (data) => {
  return await prisma.Ikeaproduct.create({
    data,
  });
};

exports.updateProduct = async (id, data) => {
  return await prisma.Ikeaproduct.update({
    where: { id: parseInt(id) },
    data,
  });
};

exports.deleteProduct = async (id) => {
  return await prisma.Ikeaproduct.delete({
    where: { id: parseInt(id) },
  });
};
