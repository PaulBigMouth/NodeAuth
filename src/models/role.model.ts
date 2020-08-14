import { User } from './user.model';
import { Model } from './model';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

@Entity({
  name: 'role',
})
export class Role extends Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  type: string;

  @OneToMany((type) => User, (user) => user.role)
  users: User[];
}
