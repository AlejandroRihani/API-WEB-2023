import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";

@Entity()
export class Promotions extends BaseEntity{

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;
  
  @Column()
  descripcion!: string;

  @Column()
  precio_en_promocion!: number;

  @Column()
  fecha_inicio_promocion!: string;

  @Column()
  fecha_fin_promocion!: string;

  @Column()
  activo!: boolean;

  @Column()
  campo_adicional_2!: number;
}