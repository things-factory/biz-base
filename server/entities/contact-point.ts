import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Bizplace } from './bizplace'

@Entity('contact_points')
@Index('ix_contact_points_0', (contactPoint: ContactPoint) => [contactPoint.name, contactPoint.email], { unique: true })
export class ContactPoint {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @ManyToOne(type => Bizplace)
  bizplace: Bizplace

  @Column()
  name: string

  @Column({
    nullable: true
  })
  email: string

  @Column({
    nullable: true
  })
  address: string

  @Column({
    nullable: true
  })
  fax: string

  @Column({
    nullable: true
  })
  phone: string

  @Column({
    nullable: true
  })
  description: string

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
