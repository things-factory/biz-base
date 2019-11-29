import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { Bizplace } from './bizplace'
import { BizOptionDetail } from './biz-option-detail'
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

@Entity()
@Index('ix_biz-option_0', (bizOption: BizOption) => [bizOption.bizplace, bizOption.name], { unique: true })
export class BizOption {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain, { nullable: true })
  domain: Domain

  @Column()
  name: string

  @ManyToOne(type => Bizplace, {
    nullable: false
  })
  bizplace: Bizplace

  @OneToMany(
    type => BizOptionDetail,
    bizOptionDetail => bizOptionDetail.bizOption
  )
  bizOptionDetails: BizOptionDetail[]

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
