import { type } from "os";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";
import { UserEntity } from "./user.entity";
import { booksEntity } from "./books.entity";

@Entity('autores',{schema: 'ventas'})

export class AutoresEntity {
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

@ManyToMany(() => booksEntity, books => books.autores)
books: booksEntity[];

@Column ('varchar', { 
    name: 'title',
    nullable: false,
    comment: 'autores name',
})
title: string;

@Column ('varchar', { 
    name: 'description',
    nullable: false,
    comment: 'autores description',
})
description: string;

  }