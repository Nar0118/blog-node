import { Request, Response } from 'express';
import { FindOneOptions, getRepository } from 'typeorm';
import { Author } from '../entities/Author';

export const getAuthors = async (req: Request, res: Response) => {
  const authors = await getRepository(Author).find();
  res.json(authors);
};

export const createAuthor = async (req: Request, res: Response) => {
  const author = getRepository(Author).create(req.body);
  const result = await getRepository(Author).save(author);
  res.json(result);
};

export const getAuthor = async (req: Request, res: Response) => {
  const id = req!.params!.id as FindOneOptions<any>;
  const author = await getRepository(Author).findOne(id);
  res.json(author);
};

export const updateAuthor = async (req: Request, res: Response) => {
  const id = req!.params!.id as FindOneOptions<any>;
  const author: any = await getRepository(Author).findOne(id);
  getRepository(Author).merge(author, req.body);
  const result = await getRepository(Author).save(author);
  res.json(result);
};

export const deleteAuthor = async (req: Request, res: Response) => {
  const result = await getRepository(Author).delete(req.params.id);
  res.json(result);
};
