import { User } from './user.model';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';
import { Model } from './model';

@Entity({
  name: 'token',
})
export class Token extends Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  value: string;

  @Column()
  time: Date;

  @OneToOne((type) => User)
  @JoinColumn()
  user: User;
}
