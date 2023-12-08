import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Resource } from "../../resource/entities/resource.entity";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  reservation_date: Date;

  @ManyToOne(() => Resource, (resource) => resource.reservations)
  resource: Resource;

  @ManyToOne(() => User, (user) => user.reservations)
  user: User;
}
