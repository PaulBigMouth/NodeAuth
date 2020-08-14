import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Model } from './model';

@Entity({
  name: 'user',
})
export class User extends Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;
}
