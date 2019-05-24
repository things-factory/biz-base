import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { Menu, MenuColumn } from '@things-factory/menu-base'
import { BIZ_MENU_COLUMNS as SEED_BIZ_MENU_COLUMNS } from '../seed-data/biz-menu-columns'

export class SeedBizMenuColumn1558677492248 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const domainRepository = getRepository(Domain)
    const menuRepository = getRepository(Menu)
    const menuColumnsRepository = getRepository(MenuColumn)

    const domain = await domainRepository.findOne({ name: 'SYSTEM' })

    try {
      SEED_BIZ_MENU_COLUMNS.forEach(async menuColumn => {
        const parentMenu = await menuRepository.findOne({
          domain,
          name: menuColumn.menuName
        })

        await menuColumnsRepository.save({
          ...menuColumn,
          domain: domain,
          menu: parentMenu
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
