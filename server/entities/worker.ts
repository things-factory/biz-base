import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'

@Entity('workers')
@Index('ix_worker_0', (worker: Worker) => [worker.domain, worker.name], { unique: true })
export class Worker extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @Column('text')
  type: string

  @Column('text', {
    nullable: true
  })
  description: string
}
