import { BizOption } from './biz-option'
import { BizOptionDetail } from './biz-option-detail'
import { Bizplace } from './bizplace'
import { BizplaceRole } from './bizplace-role'
import { BizplaceUser } from './bizplace-user'
import { Company } from './company'
import { ContactPoint } from './contact-point'
import { Partner } from './partner'
import { Worker } from './worker'

export const entities = [
  Bizplace,
  BizplaceUser,
  BizplaceRole,
  Company,
  ContactPoint,
  Worker,
  Partner,
  BizOption,
  BizOptionDetail
]

export { Bizplace, BizplaceUser, BizplaceRole, Company, ContactPoint, Worker, Partner, BizOption, BizOptionDetail }
