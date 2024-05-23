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
  cel: string;

 
  @Column()
  uf: string;

  @Column()
  specialties: string;

  @Column({
      default: false
  })
  isDeleted: boolean;
}