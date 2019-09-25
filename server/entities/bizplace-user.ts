import { User } from '@things-factory/auth-base'
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Bizplace } from '.'

@Entity('bizplaces_users')
@Index('ix_bizplace-user_0', (bizplaceUser: BizplaceUser) => [bizplaceUser.bizplace, bizplaceUser.user], {
  unique: true
})
export class BizplaceUser {
  @PrimaryColumn()
  userId: string

  @ManyToOne(type => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @PrimaryColumn()
  bizplaceId: string

  @ManyToOne(type => Bizplace)
  @JoinColumn({ name: 'bizplace_id' })
  bizplace: Bizplace

  @Column({
    nullable: true,
    default: false
  })
  mainBizplace: boolean
}
