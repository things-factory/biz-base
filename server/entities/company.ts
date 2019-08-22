import { User } from '@things-factory/auth-base'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

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

  @Column({
    nullable: true
  })
  postalCode: string

  @Column({
    nullable: true
  })
  type: string

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
