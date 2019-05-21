import { DomainBaseEntity } from '@things-factory/shell'
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Bizplace } from './bizplace'

@Entity('vendors')
@Index('ix_vendors_0', (vendor: Vendor) => [vendor.name], { unique: true })
export class Vendor extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('text')
  name: string

  @Column('text', {
    nullable: true
  })
  description: string

  @ManyToOne(type => Bizplace)
  bizplace: Bizplace
}
