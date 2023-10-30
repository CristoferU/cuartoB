import { Allow, IsNotEmpty } from "class-validator";
import { ProductEntity } from "src/entities/product.entity";

export class BaseProductDto{ 
    @Allow()
    
    readonly title:ProductEntity
    @IsNotEmpty ()
    @

}