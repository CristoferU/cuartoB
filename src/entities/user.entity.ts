import { type } from "os";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";
import { RoleEntity } from "./role.entity";

@Entity('user',{schema: 'ventas'})

export class UserEntity {
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

@OneToOne(() => RoleEntity, role => role.users)
@joinColumn()
role: RoleEntity[];

@Column ('varchar', { 
    name: 'title',
    nullable: false,
    comment: 'user name',
})
title: string;

@Column ('varchar', { 
    name: 'identification',
    nullable: true,
    comment: 'user identification',
})
description: string;

  }

function joinColumn(): (target: UserEntity, propertyKey: "role") => void {
    throw new Error("Function not implemented.");
}
