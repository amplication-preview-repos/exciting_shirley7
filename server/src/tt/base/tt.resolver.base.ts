/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteTtArgs } from "./DeleteTtArgs";
import { TtCountArgs } from "./TtCountArgs";
import { TtFindManyArgs } from "./TtFindManyArgs";
import { TtFindUniqueArgs } from "./TtFindUniqueArgs";
import { Tt } from "./Tt";
import { TtService } from "../tt.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Tt)
export class TtResolverBase {
  constructor(
    protected readonly service: TtService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Tt",
    action: "read",
    possession: "any",
  })
  async _ttsMeta(@graphql.Args() args: TtCountArgs): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Tt])
  @nestAccessControl.UseRoles({
    resource: "Tt",
    action: "read",
    possession: "any",
  })
  async tts(@graphql.Args() args: TtFindManyArgs): Promise<Tt[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Tt, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tt",
    action: "read",
    possession: "own",
  })
  async tt(@graphql.Args() args: TtFindUniqueArgs): Promise<Tt | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Tt)
  @nestAccessControl.UseRoles({
    resource: "Tt",
    action: "delete",
    possession: "any",
  })
  async deleteTt(@graphql.Args() args: DeleteTtArgs): Promise<Tt | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
