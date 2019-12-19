import { User } from '@things-factory/auth-base'
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Bizplace } from './bizplace'

@Entity()
@Index('ix_manager_0', (manager: Manager) => [manager.type, manager.user, manager.bizplace], { unique: true })
export class Manager {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  type: string

  @ManyToOne(type => User)
  user: User

  @ManyToOne(type => Bizplace)
  bizplace: Bizplace
}
