import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { logger } from './middleware/logger.middleware';
import { APP_FILTER } from '@nestjs/core';
import { CatchEverythingFilter } from './filters/catch-everything.filter';

@Module({
  providers: [{ provide: APP_FILTER, useClass: CatchEverythingFilter }],
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(CatsController);
  }
}
