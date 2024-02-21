import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document{
    // id: number; //mongo lo crea automaticamente

    // se pone el decorador @Prop para indicar que es un campo de la entidad, indicar que debe ser unico y que debe tener un indice
    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;
}

// se crea el esquema de la entidad en base a la clase Pokemon en la base de datos
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
