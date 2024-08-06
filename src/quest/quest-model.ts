import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Catagory } from "./quest-type";

let date = new Date();
let tomorrow = date.setDate(date.getDate() + 1);
tomorrow = new Date(tomorrow).setHours(0, 0, 0, 0);

@Entity()
export class Quest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "" })
  title?: string;

  @Column({ default: "" })
  description: string;

  @Column({ default: new Date() })
  startDate?: Date;

  @Column({ default: new Date(tomorrow) })
  deadline?: Date;

  @Column({ default: Catagory.Daily })
  catagory?: Catagory;

  @Column({ default: false })
  status?: Boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
