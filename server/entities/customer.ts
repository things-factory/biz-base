import { DomainBaseEntity } from '@things-factory/shell'
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Bizplace } from './bizplace'

@Entity('customers')
@Index('ix_customers_0', (customer: Customer) => [customer.name], { unique: true })
export class Customer extends DomainBaseEntity {
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
