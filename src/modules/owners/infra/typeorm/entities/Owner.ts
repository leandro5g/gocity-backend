import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  PrimaryColumn,
} from "typeorm";

@Entity("company_owner")
class Owner {
  @PrimaryColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public cellphone: string;

  @Column()
  public password: string;

  @Column()
  public cpf: string;

  @Column()
  public avatar: string;

  @UpdateDateColumn()
  public updated_at: string;

  @CreateDateColumn()
  public created_at: string;
}

export { Owner };
