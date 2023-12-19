import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";

@Entity()
export class Products extends BaseEntity{

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;
  
  @Column()
  descripcion!: string;

  @Column()
  precio!: number;

  @Column()
  categoria!: string;

  @Column()
  fabricante!: string;

  @Column()
  cantidad_en_stock!: number;

  @Column()
  unidad_de_medida!: string;

  @Column()
  fecha_de_creacion!: string;

  @Column()
  usuario_de_creacion!: string;

  @Column()
  fecha_de_actualizacion!: string;

  @Column()
  usuario_de_actualizacion!: string;

  @Column()
  activo!: boolean;

  @Column()
  imagen!: string;
}
