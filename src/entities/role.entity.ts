import { type } from "os";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";
import { UserEntity } from "./user.entity";

@Entity('role',{schema: 'ventas'})

export class RoleEntity {
@PrimaryGeneratedColumn('uuid')
id: string;
@CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
})
crate_at: Date;
@UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
})
updateAt: Date;
@DeleteDateColumn({
    name: 'update_at',
    type: 'timestamp',
    nullable: true,
})
deleteAT: Date;

@OneToOne(() => UserEntity, user => user.role)
users: UserEntity[];

@Column ('varchar', { 
    name: 'title',
    nullable: false,
    comment: 'role name',
})
title: string;

@Column ('varchar', { 
    name: 'description',
    nullable: false,
    comment: 'role description',
})
description: string;

  }