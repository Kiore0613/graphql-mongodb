import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { LessonModule } from './lesson/lesson.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb:172.17.0.2:27017/school',
      synchronize: true,
      useUnifiedTopology: true,
      entities: []
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }), LessonModule],
})
export class AppModule { }
