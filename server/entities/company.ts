import { BaseEntity } from '@things-factory/shell'
import { Column, Entity, Index, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Bizplace } from './bizplace'

@Entity('companies')
@Index('ix_companies_0', (company: Company) => [company.name], { unique: true })
export class Company extends BaseEntity {
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
}
