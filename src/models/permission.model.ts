import { Role } from './role.model';
import { Model } from './model';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity({
  name: 'permission',
})
export class Permission extends Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  route: string;

  @OneToOne((type) => Role)
  role: Role;
}
