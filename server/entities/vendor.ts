import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Bizplace } from './bizplace'
import { Partner } from './partner'

@Entity('vendors')
@Index('ix_vendors_0', (vendor: Vendor) => [vendor.name], { unique: true })
export class Vendor {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @ManyToOne(type => Partner, partner => partner.vendors)
  partner: Partner

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @ManyToOne(type => Bizplace)
  bizplace: Bizplace

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
