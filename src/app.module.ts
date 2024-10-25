// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ItemsModule, 
    ConfigModule.forRoot({ isGlobal: true }), 
    DbModule, UsersModule, AuthModule  // ### auto add
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}