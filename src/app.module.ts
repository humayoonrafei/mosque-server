import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { join } from 'path';

@Module({
  imports: [UsersModule, EventsModule, GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
  })],
})
export class AppModule { }
