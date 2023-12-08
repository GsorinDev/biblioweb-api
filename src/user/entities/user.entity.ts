import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../../role/entities/role.entity';
import { Right } from '../../right/entities/right.entity';
import { Reservation } from '../../reservation/entities/reservation.entity';
import { Loan } from '../../loan/entities/loan.entity';
import { Subscription } from "../../subscription/entities/subscription.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, (role) => role.users, { onDelete: 'CASCADE' })
  role: Role;

  @ManyToMany(() => Right, { onDelete: 'CASCADE' })
  @JoinTable({ name: 'pivot_users_rights' })
  rights: Right[];

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservations: Reservation[];

  @OneToMany(() => Loan, (loan) => loan.user)
  loans: Loan[];

  @ManyToOne(() => Subscription, (subscription) => subscription.users, { onDelete: 'CASCADE' })
  subscription: Subscription;
}
