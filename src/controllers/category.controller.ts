import { Request, Response } from 'express';
import { FindOneOptions, getRepository } from 'typeorm';
import { Category } from '../entities/Category';

export const getCategories = async (_: Request, res: Response) => {
  const categories = await getRepository(Category).find();
  res.json(categories);
};

export const createCategory = async (req: Request, res: Response) => {
  const category = getRepository(Category).create(req.body);
  const result = await getRepository(Category).save(category);
  res.json(result);
};

export const getCategory = async (req: Request, res: Response) => {
  const category = await getRepository(Category).findOne((req.params  as any).id);
  res.json(category);
};

export const updateCategory = async (req: Request, res: Response) => {
  const id = req!.params!.id as FindOneOptions<any>;
  const category:any = await getRepository(Category).findOne(id);
  getRepository(Category).merge(category, req.body);
  const result = await getRepository(Category).save(category);
  res.json(result);
};

export const deleteCategory = async (req: Request, res: Response) => {
  const result = await getRepository(Category).delete(req.params.id);
  res.json(result);
};
