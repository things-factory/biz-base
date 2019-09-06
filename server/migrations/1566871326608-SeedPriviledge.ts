import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Priviledge } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'

const SEEDS_PRIVILEDGES = [
  {
    name: 'query',
    category: 'bizplace',
    description: 'to read bizplace data'
  },
  {
    name: 'mutation',
    category: 'bizplace',
    description: 'to edit bizplace data'
  },
  {
    name: 'query',
    category: 'company',
    description: 'to read company data'
  },
  {
    name: 'mutation',
    category: 'company',
    description: 'to edit company data'
  },
  {
    name: 'query',
    category: 'contact_point',
    description: 'to read contact point data'
  },
  {
    name: 'mutation',
    category: 'contact_point',
    description: 'to edit contact point data'
  },
  {
    name: 'query',
    category: 'customer',
    description: 'to read contact point data'
  },
  {
    name: 'mutation',
    category: 'customer',
    description: 'to edit contact point data'
  },
  {
    name: 'query',
    category: 'vendor',
    description: 'to read contact point data'
  },
  {
    name: 'mutation',
    category: 'vendor',
    description: 'to edit contact point data'
  },
  {
    name: 'query',
    category: 'worker',
    description: 'to read worker data'
  },
  {
    name: 'mutation',
    category: 'worker',
    description: 'to edit worker data'
  },
  {
    name: 'role',
    category: 'owner',
    description: 'to read owner side data'
  },
  {
    name: 'role',
    category: 'customer',
    description: 'to read customer side data'
  }
]

export class SeedPriviledge1566871326608 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const domains = await getRepository(Domain).find()

    try {
      for (let i = 0; i < domains.length; i++) {
        const domain = domains[i]

        for (let j = 0; j < SEEDS_PRIVILEDGES.length; j++) {
          const priviledge: Priviledge = SEEDS_PRIVILEDGES[j]
          priviledge.domain = domain

          await getRepository(Priviledge).save({
            ...priviledge
          })
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Priviledge)

    SEEDS_PRIVILEDGES.reverse().forEach(async priviledge => {
      let record = await repository.findOne({ name: priviledge.name })
      await repository.remove(record)
    })
  }
}
