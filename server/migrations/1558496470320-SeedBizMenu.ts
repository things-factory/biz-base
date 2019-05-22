import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { Menu } from '@things-factory/menu-base'
import { BIZ_MENUS } from '../seed-data/biz-menus'

export class SeedBizMenu1558496470320 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Menu)
    const domainRepository = getRepository(Domain)
    const domain = await domainRepository.findOne({ name: 'SYSTEM' })

    try {
      BIZ_MENUS.forEach(async menus => {
        const groupMenu = { ...menus }
        delete groupMenu.childrens

        const parent = await repository.save({ ...groupMenu, domain })

        //child will be created after parents created
        menus.childrens.forEach(async menu => {
          await repository.save({
            ...menu,
            domain,
            parent
          })
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
