import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";

@Entity()
export class Purchase_Details extends BaseEntity{

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  producto!: string;
  
  @Column()
  orden!: number;

  @Column()
  usuario_de_creacion!: string;

  @Column()
  fecha_de_actualizacion!: string;

}