/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TtWhereInput } from "./TtWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TtOrderByInput } from "./TtOrderByInput";

@ArgsType()
class TtFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TtWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TtWhereInput, { nullable: true })
  @Type(() => TtWhereInput)
  where?: TtWhereInput;

  @ApiProperty({
    required: false,
    type: [TtOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TtOrderByInput], { nullable: true })
  @Type(() => TtOrderByInput)
  orderBy?: Array<TtOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TtFindManyArgs as TtFindManyArgs };
