import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json({
      ok: true,
      data: users,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { body } = req;
    const user = await prisma.user.create({
      data: {
        ...body,
      },
    });
    res.json({
      ok: true,
      data: user,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const user = await prisma.user.update({
      where: {id},
      data: req.body,
    })
    res.json({
      ok: true,
      data: user,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
}

export const remove = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = await prisma.user.delete({
      where: { id },
    });
    res.json({
      ok: true,
      data: user,
    });
  } catch (error) {
    res.json({
      ok: "Delete student",
      data: error.message,
    });
  }
};
