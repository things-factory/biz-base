import { User } from '@things-factory/auth-base'
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
import { Bizplace } from './bizplace'

@Entity('companies')
@Index('ix_companies_0', (company: Company) => [company.name], { unique: true })
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('text')
  name: string

  @Column('text', {
    nullable: true
  })
  description: string

  @Column('text')
  countryCode: string

  @Column('text')
  brn: string

  @Column('text')
  address: string

  @OneToMany(type => Bizplace, bizplace => bizplace.parent)
  bizplaces: Bizplace[]

  @Column('text', {
    nullable: true
  })
  state: string

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
