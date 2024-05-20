import { createConnection } from 'typeorm';
import { Author } from './src/entities/Author';
import { Category } from './src/entities/Category';
import { Post } from './src/entities/Post';
import { Tag } from './src/entities/Tag';

export const connectDatabase = async () => {
  await createConnection({
    type: 'sqlite',
    database: 'blog.db',
    entities: [Author, Category, Post, Tag],
    synchronize: true,
  });
};
