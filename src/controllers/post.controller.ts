import { Request, Response } from 'express';
import { FindOneOptions, getRepository } from 'typeorm';
import { Post } from '../entities/Post';

export const getPosts = async (_: Request, res: Response) => {
  const posts = await getRepository(Post).find({ relations: ['author', 'category', 'tags'] });
  res.json(posts);
};

export const createPost = async (req: Request, res: Response) => {
  const post = getRepository(Post).create(req.body);
  const result = await getRepository(Post).save(post);
  res.json(result);
};

export const getPost = async (req: Request, res: Response) => {
    const post = await getRepository(Post).findOne({
      where: { id: parseInt(req.params.id, 10) },
      relations: ['author', 'category', 'tags']
    });
    res.json(post);
  };

export const updatePost = async (req: Request, res: Response) => {
  const id = req!.params!.id as FindOneOptions<any>;
  const post: any = await getRepository(Post).findOne(id);
  getRepository(Post).merge(post, req.body);
  const result = await getRepository(Post).save(post);
  res.json(result);
};

export const deletePost = async (req: Request, res: Response) => {
  const result = await getRepository(Post).delete(req.params.id);
  res.json(result);
};
