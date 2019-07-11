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

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @Column()
  countryCode: string

  @Column()
  brn: string

  @Column()
  address: string

  @OneToMany(type => Bizplace, bizplace => bizplace.parent)
  bizplaces: Bizplace[]

  @Column({
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
