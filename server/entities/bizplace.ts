import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { BizOption } from './biz-option'
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
import { BizplaceUser } from './bizplace-user'
import { Company } from './company'

@Entity('bizplaces')
@Index('ix_bizplaces_0', (bizplace: Bizplace) => [bizplace.name], { unique: true })
export class Bizplace {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @OneToMany(
    type => BizOption,
    bizOption => bizOption.bizplace
  )
  bizOptions: BizOption[]

  @OneToMany(
    type => BizplaceUser,
    bizplaceUser => bizplaceUser.bizplace
  )
  users: []

  @ManyToOne(type => Company)
  company: Company

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @Column()
  address: string

  @Column()
  postalCode: string

  @Column()
  latlng: string

  @Column({
    nullable: true
  })
  status: string

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
