import { User } from '@things-factory/auth-base'
import { BizOption } from './biz-option'
import { Domain } from '@things-factory/shell'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
@Index(
  'ix_biz-option-detail_0',
  (bizOptionDetail: BizOptionDetail) => [bizOptionDetail.bizOption, bizOptionDetail.name],
  {
    unique: true
  }
)
export class BizOptionDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain, { nullable: true })
  domain: Domain

  @Column()
  name: string

  @ManyToOne(
    type => BizOption,
    bizOption => bizOption.bizOptionDetails,
    {
      nullable: false
    }
  )
  bizOption: BizOption

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
