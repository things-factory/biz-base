import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { Worker } from '../entities'

const SEED = []

export class SeedWorker1559532185491 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Worker)
    const domainRepository = getRepository(Domain)
    const domain = await domainRepository.findOne({
      name: 'SYSTEM'
    })

    try {
      SEED.forEach(async worker => {
        await repository.save({
          ...worker,
          domain
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Worker)
    SEED.reverse().forEach(async worker => {
      let record = await repository.findOne({ name: worker.name })
      await repository.remove(record)
    })
  }
}
