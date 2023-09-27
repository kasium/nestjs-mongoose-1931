import { Controller, Get, Param } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { Cat } from "./schemas/cat.schema";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async exec(): Promise<Cat> {
    return this.catsService.exec();
  }
}
