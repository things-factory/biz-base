import { User } from '@things-factory/auth-base'
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
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
}
