import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";

@Entity()
export class User extends BaseEntity{

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;
  
  @Column()
  correo_electronico!: string;

  @Column()
  contrasena!: string;

  @Column()
  fecha_de_creacion!: string;

  @Column()
  usuario_de_creacion!: string;

  @Column()
  fecha_de_actualizacion!: string;

  @Column()
  usuario_de_actualizacion!: string;

  @Column()
  activo!: number;

  @Column()
  numero_de_compras!: number;

  @Column()
  campo_adicional!: string;
}