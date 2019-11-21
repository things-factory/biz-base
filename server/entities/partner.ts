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

  @CreateDateColumn()
  requestedAt: Date

  @UpdateDateColumn()
  approvedAt: Date

  @ManyToOne(type => User, {
    nullable: true
  })
  requester: User

  @ManyToOne(type => User, {
    nullable: true
  })
  approver: User
}
