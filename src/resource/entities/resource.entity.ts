import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Author } from '../../author/entities/author.entity';
import { Genre } from '../../genre/entities/genre.entity';
import { TypeOfResource } from '../../type-of-resource/entities/type-of-resource.entity';
import { Reservation } from '../../reservation/entities/reservation.entity';
import { Loan } from '../../loan/entities/loan.entity';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  quantity: number;

  @Column()
  available: boolean;

  @ManyToMany(() => Genre, { onDelete: 'CASCADE' })
  @JoinTable({ name: 'pivot_resources_genres' })
  genres: Genre[];

  @ManyToMany(() => Author, { onDelete: 'CASCADE' })
  @JoinTable({ name: 'pivot_resources_authors' })
  authors: Author[];

  @ManyToOne(
    () => TypeOfResource,
    (typeOfResource) => typeOfResource.resources,
    { onDelete: 'CASCADE' },
  )
  typeOfResource: TypeOfResource;

  @OneToMany(() => Reservation, (reservation) => reservation.resource)
  reservations: Reservation[];

  @OneToMany(() => Loan, (loan) => loan.resource)
  loans: Loan[];
}
