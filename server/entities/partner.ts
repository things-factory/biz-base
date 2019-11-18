import { User } from '@things-factory/auth-base'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Bizplace } from '../entities'

@Entity('partners')
@Index('ix_partner_0', (partner: Partner) => [partner.domainBizplace, partner.partnerBizplace], { unique: true })
export class Partner {
  @PrimaryGeneratedColumn('uuid')
  id: String

  @ManyToOne(type => Bizplace)
  domainBizplace: Bizplace

  @ManyToOne(type => Bizplace)
  partnerBizplace: Bizplace

  @Column()
  type: String

  @Column()
  activated: Boolean

  @Column()
  status: String

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
