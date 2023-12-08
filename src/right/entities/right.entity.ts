import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Right {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
