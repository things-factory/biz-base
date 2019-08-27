import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Priviledge } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'

const SEEDS_PRIVILEDGE = [
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
    category: 'contact point',
    description: 'to read contact point data'
  },
  {
    name: 'mutation',
    category: 'contact point',
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
  }
]

export class SeedPriviledge1566871326608 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Priviledge)
    const domain = await getRepository(Domain).findOne({ where: { name: 'SYSTEM' } })

    try {
      for (let i = 0; i < SEEDS_PRIVILEDGE.length; i++) {
        const priviledge = SEEDS_PRIVILEDGE[i]
        await repository.save({
          domain,
          ...priviledge
        })
      }
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Priviledge)

    SEEDS_PRIVILEDGE.reverse().forEach(async priviledge => {
      let record = await repository.findOne({ name: priviledge.name })
      await repository.remove(record)
    })
  }
}
