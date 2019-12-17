import { User } from '@things-factory/auth-base'
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@Index('ix_manager_0', (manager: Manager) => [manager.user, manager.refId], { unique: true })
export class Manager {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  type: string

  @ManyToOne(type => User)
  user: User

  @Column()
  refId: string
}
