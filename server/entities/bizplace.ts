import { BaseEntity } from '@things-factory/shell'
import { Column, Entity, Index, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

import { Company } from './company'

@Entity('bizplaces')
@Index('ix_bizplaces_0', (bizplace: Bizplace) => [bizplace.name], { unique: true })
export class Bizplace extends BaseEntity {
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
}
