import { type } from "os";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";
import { UserEntity } from "./user.entity";
import { AutoresEntity } from "./autores.entity";

@Entity('books',{schema: 'ventas'})

export class booksEntity {
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

@OneToOne(() => AutoresEntity, autores => autores.books)
@JoinTable()
autores: AutoresEntity[];

@Column ('varchar', { 
    name: 'title',
    nullable: false,
    comment: 'books name',
})
title: string;

@Column ('varchar', { 
    name: 'description',
    nullable: false,
    comment: 'books description',
})
description: string;
  }

function joinColumn(): (target: booksEntity, propertyKey: "") => void {
    throw new Error("Function not implemented.");
}
function joinSafe(): (target: booksEntity, propertyKey: "users") => void {
    throw new Error("Function not implemented.");
}

