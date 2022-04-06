import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  PrimaryColumn,
} from "typeorm";

@Entity("users")
class CategoryCompany {
  @PrimaryColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column()
  public image: string;

  @Column()
  @UpdateDateColumn()
  public updated_at: string;

  @CreateDateColumn()
  public created_at: string;
}

export { CategoryCompany };
