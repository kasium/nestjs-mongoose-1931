import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop({ type: Map, of: String })
  data: Map<string, string>;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
