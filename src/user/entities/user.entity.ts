import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column({length: 30})
    email: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({length: 30})
    ul?: string;

    @Column({length: 30})
    superintendence?: string;

    @Column({length: 10})
    role?: string;

}
