import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TtModuleBase } from "./base/tt.module.base";
import { TtService } from "./tt.service";
import { TtController } from "./tt.controller";
import { TtResolver } from "./tt.resolver";

@Module({
  imports: [TtModuleBase, forwardRef(() => AuthModule)],
  controllers: [TtController],
  providers: [TtService, TtResolver],
  exports: [TtService],
})
export class TtModule {}
