import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Customer } from './customer'
import { Vendor } from './vendor'

@Entity('partners')
@Index('ix_partner_0', (partner: Partner) => [partner.domain, partner.name], { unique: true })
export class Partner {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column()
  name: string

  @OneToMany(type => Vendor, vendor => vendor.partner)
  vendors: Vendor

  @OneToMany(type => Customer, customer => customer.partner)
  customers: Customer

  @Column({
    nullable: true
  })
  description: string

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
