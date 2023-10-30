import { type } from "os";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('categories',{schema: 'ventas'})

export class CategoryEntity {
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

@OneToMany(() => ProductEntity, product => product.category)
products: ProductEntity[];

@Column ('varchar', { 
    name: 'title',
    nullable: false,
    comment: 'category name',
})
title: string;

@Column ('varchar', { 
    name: 'description',
    nullable: true,
    comment: 'category description',
})
description: string;

  }
//crear dos entidades con sus atributos y sus propioas atributos
//promesas obserballes jeison y typorm