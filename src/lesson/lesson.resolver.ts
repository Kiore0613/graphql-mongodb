import { Resolver, Query } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";

@Resolver()
export class LessonResolver {
  @Query(returns => LessonType)
  Lesson() {
    return {
      id: '12345asd',
      name: 'Algorithms',
      startDate: (new Date().toISOString),
      endDate: (new Date().toISOString)
    }
  }
}