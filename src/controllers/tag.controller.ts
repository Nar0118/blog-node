import { Request, Response } from 'express';
import { FindOneOptions, getRepository } from 'typeorm';
import { Tag } from '../entities/Tag';

export const getTags = async (_: Request, res: Response) => {
  const tags = await getRepository(Tag).find();
  res.json(tags);
};

export const createTag = async (req: Request, res: Response) => {
  const tag = getRepository(Tag).create(req.body);
  const result = await getRepository(Tag).save(tag);
  res.json(result);
};

export const getTag = async (req: Request, res: Response) => {
  const id = req!.params!.id as FindOneOptions<any>;
  const tag = await getRepository(Tag).findOne(id);
  res.json(tag);
};

export const updateTag = async (req: Request, res: Response) => {
  const id = req!.params!.id as FindOneOptions<any>;
  const tag: any = await getRepository(Tag).findOne(id);
  getRepository(Tag).merge(tag, req.body);
  const result = await getRepository(Tag).save(tag);
  res.json(result);
};

export const deleteTag = async (req: Request, res: Response) => {
  const result = await getRepository(Tag).delete(req.params.id);
  res.json(result);
};
