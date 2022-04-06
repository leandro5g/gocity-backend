import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  PrimaryColumn,
} from "typeorm";

@Entity("users")
class User {
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
  @UpdateDateColumn()
  public updated_at: string;

  @CreateDateColumn()
  public created_at: string;
}

export { User };
