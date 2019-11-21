import { User } from '@things-factory/auth-base'
import { CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Bizplace } from '.'

@Entity('bizplaces_users')
@Index('ix_bizplace-user_0', (bizplaceUser: BizplaceUser) => [bizplaceUser.user], { unique: true })
export class BizplaceUser {
  @PrimaryGeneratedColumn('uuid')
  id: String

  @ManyToOne(type => User)
  user: User

  @ManyToOne(type => Bizplace)
  bizplace: Bizplace

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User
}
