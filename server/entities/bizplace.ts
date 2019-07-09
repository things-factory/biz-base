import { User } from '@things-factory/auth-base'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Company } from './company'

@Entity('bizplaces')
@Index('ix_bizplaces_0', (bizplace: Bizplace) => [bizplace.name], { unique: true })
export class Bizplace {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Company, company => company.bizplaces)
  parent: Company

  @Column('text')
  name: string

  @Column('text', {
    nullable: true
  })
  description: string

  @Column('text')
  address: string

  @Column('text')
  postalCode: string

  @Column('text')
  latlng: string

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
