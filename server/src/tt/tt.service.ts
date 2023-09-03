import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TtServiceBase } from "./base/tt.service.base";

@Injectable()
export class TtService extends TtServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
