import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Resource } from '../../resource/entities/resource.entity';

@Entity()
export class TypeOfResource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Resource, (resource) => resource.typeOfResource)
  resources: Resource[];
}
