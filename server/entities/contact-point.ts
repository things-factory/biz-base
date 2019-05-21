import { DomainBaseEntity } from '@things-factory/shell'
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Bizplace } from './bizplace'

@Entity('contact-points')
@Index('ix_contact_points_0', (contactPoint: ContactPoint) => [contactPoint.name, contactPoint.email], { unique: true })
export class ContactPoint extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Bizplace)
  bizplace: Bizplace

  @Column('text')
  name: string

  @Column('text')
  email: string

  @Column('text', {
    nullable: true
  })
  description: string
}
