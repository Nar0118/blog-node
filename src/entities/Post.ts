import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Author } from './Author';
import { Category } from './Category';
import { Tag } from './Tag';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  content!: string;

  @ManyToOne(() => Author, author => author.posts)
  author!: Author;

  @ManyToOne(() => Category, category => category.posts)
  category!: Category;

  @ManyToMany(() => Tag, tag => tag.posts)
  @JoinTable()
  tags!: Tag[];
}
