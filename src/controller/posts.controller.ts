import { Response } from "express";

const list = async (_, res: Response) => {
  //DB logic
  res.json([]);
};
const findOne = async (req, res) => {
  //DB logic

  res.set({
    "Last-Modified": Date.now(),
  });
  res.json({});
};
const deleteOne = async (req, res: Response) => {
  //DB logic
  res.json({ success: true });
};

const create = async (req, res: Response) => {
  //DB logic
  res.json({});
};

const update = async (req, res: Response) => {
  //DB logic
  res.json({});
};

const like = async (req, res: Response) => {
  //DB logic
  res.json({});
};

export default { list, findOne, deleteOne, create, update, like };
