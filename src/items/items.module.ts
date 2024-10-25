// item.module.ts
import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ Item ])],  // ### add
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
