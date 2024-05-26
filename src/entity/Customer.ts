import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      length: 120
  })
  name: string;

  @Column()
  status: string;

  @Column()
  amount: string;

  @Column({
      default: false
  })
  isDeleted: boolean;
}