import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Resource } from '../../resource/entities/resource.entity';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  loanDate: Date;

  @Column()
  returnDate: Date;

  @ManyToOne(() => User, (user) => user.loans)
  user: User;

  @ManyToOne(() => Resource, (resource) => resource.loans)
  resource: Resource;
}
