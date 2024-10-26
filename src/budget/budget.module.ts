import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [BudgetController],
  providers: [BudgetService],
  imports: [HttpModule]
})
export class BudgetModule {}
