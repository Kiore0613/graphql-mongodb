import { InputType, Field } from "@nestjs/graphql";
import { MinLength, isDateString, IsDateString, IsDate } from 'class-validator'
@InputType()
export class CreateLessonInput {
  @MinLength(1)
  @Field()
  name: string

  @IsDateString()
  @Field()
  startDate: string

  @IsDateString()
  @Field()
  endDate: string
}