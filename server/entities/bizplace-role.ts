import { Role } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Bizplace } from './bizplace'

@Entity('bizplaces_roles')
@Index('ix_bizplace-role_0', (bizplaceRole: BizplaceRole) => [bizplaceRole.bizplace, bizplaceRole.role], {
  unique: true
})
export class BizplaceRole {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @ManyToOne(type => Bizplace)
  bizplace: Bizplace

  @ManyToOne(type => Role)
  role: Role
}
