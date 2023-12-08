import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Genre } from '../../genre/entities/genre.entity';
import { Author } from '../../author/entities/author.entity';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.subscription)
  users: User[];

  @ManyToMany(() => Genre, { onDelete: 'CASCADE' })
  @JoinTable({ name: 'pivot_preferences_genres' })
  genres: Genre[];

  @ManyToMany(() => Author, { onDelete: 'CASCADE' })
  @JoinTable({ name: 'pivot_preferences_authors' })
  authors: Author[];
}
