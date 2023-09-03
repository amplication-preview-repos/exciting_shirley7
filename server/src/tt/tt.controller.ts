import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TtService } from "./tt.service";
import { TtControllerBase } from "./base/tt.controller.base";

@swagger.ApiTags("tts")
@common.Controller("tts")
export class TtController extends TtControllerBase {
  constructor(
    protected readonly service: TtService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
