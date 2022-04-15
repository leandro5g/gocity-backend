import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  PrimaryColumn,
  OneToMany,
} from "typeorm";

import { Company } from "@modules/companies/infra/typeorm/entities/Company";

@Entity("categories")
class Category {
  @PrimaryColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column()
  public image: string;

  @UpdateDateColumn()
  public updated_at: string;

  @CreateDateColumn()
  public created_at: string;
}

export { Category };
