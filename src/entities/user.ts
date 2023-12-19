import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";

@Entity()
export class User extends BaseEntity{

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({nullable:true})
  nombre!: string;
  
  @Column({nullable:true})
  correo_electronico!: string;

  @Column({nullable:true})
  contrasena!: string;

  @Column({nullable:true})
  fecha_de_creacion!: string;

  @Column({nullable:true})
  usuario_de_creacion!: string;

  @Column({nullable:true})
  fecha_de_actualizacion!: string;

  @Column({nullable:true})
  usuario_de_actualizacion!: string;

  @Column({nullable:true})
  activo!: number;

  @Column({nullable:true})
  numero_de_compras!: number;

  @Column({nullable:true})
  campo_adicional!: string;
}
