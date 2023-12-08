import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Purchase {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    descripcion!: string;

    @Column()
    nombreCliente!: string;

    @Column()
    precioTotal!: number;

    @Column()
    totalProductos!: number;

    @CreateDateColumn()
    fechaCreacion!: Date;

    @Column()
    usuarioCreacion!: number;

    @Column()
    fechaActualizacion!: Date;

    @Column()
    usuarioActualizacion!: string;

    @Column({ default: true })
    activo!: boolean;
}
