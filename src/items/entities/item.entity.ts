// item.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum ItemStatus {
  PENDING = 'PENDING', APPROVED = 'APPROVED', REJECTED = 'REJECTED'
}

@Entity()
export class Item {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  title: string;

  @Column({
    nullable: false,
    default: 'Waiting description'
  })
  description: string; // add

  @Column()
  amount: number;

  @Column()
  price: number;

  @Column({
      nullable: true
  })
  contactMobileNo: string;

  @Column({
    nullable: false,
    default: ItemStatus.PENDING
  })
  status: ItemStatus
}
