import { Response } from "express";

const list = async (_, res: Response) => {
  //DB logic
  res.json([]);
};
const findOne = async (req, res) => {
  //DB logic
  res.json({});
};
const deleteOne = async (req, res: Response) => {
  //DB logic
  res.json({ success: true });
};
export default { list, findOne, deleteOne };
