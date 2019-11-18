import { User } from '@things-factory/auth-base'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Customer } from './customer'
import { Vendor } from './vendor'

@Entity('partners')
@Index('ix_partner_0', (partner: Partner) => [partner.customer, partner.vendor], { unique: true })
export class Partner {
  @PrimaryGeneratedColumn('uuid')
  id: String

  @ManyToOne(type => Customer)
  customer: Customer

  @Column({ default: false })
  customerApproved: Boolean

  @ManyToOne(type => Vendor)
  vendor: Vendor

  @Column({ default: false })
  vendorApproved: Boolean

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
