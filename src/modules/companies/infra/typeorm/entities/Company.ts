import { Category } from "@modules/categories/infra/typeorm/entities/Category";
import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  PrimaryColumn,
  ManyToOne,
} from "typeorm";

@Entity("users")
class Company {
  @PrimaryColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column()
  public cellphone: string;

  @Column()
  @ManyToOne(() => Category, (category) => category.id)
  public category_id: string;

  @Column()
  public company_owner_id: string;

  @Column()
  public description: string;

  @Column()
  public cnpj: string;

  @Column()
  public is_active: boolean;

  @Column()
  @UpdateDateColumn()
  public updated_at: string;

  @CreateDateColumn()
  public created_at: string;
}

export { Company };
