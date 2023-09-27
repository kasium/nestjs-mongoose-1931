import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cat } from "./schemas/cat.schema";

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  async exec(): Promise<Cat> {
    const data = new Map<string, string>();
    data.set("key", "value");
    const doc = await new this.catModel({ name: "cat1", data: data }).save();

    const result = await this.catModel.findOne({ _id: doc._id }).exec();
    console.log(result.data.get("key"));
    return result;
  }
}
