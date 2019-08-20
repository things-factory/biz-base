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
import { Company } from './company'
import { ContactPoint } from './contact-point'

@Entity('bizplaces')
@Index('ix_bizplaces_0', (bizplace: Bizplace) => [bizplace.name], { unique: true })
export class Bizplace {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @ManyToOne(type => Company, company => company.bizplaces)
  company: Company

  @Column()
  companyId: string

  @OneToMany(type => ContactPoint, contactPoint => contactPoint.bizplace)
  contactPoints: ContactPoint[]

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
