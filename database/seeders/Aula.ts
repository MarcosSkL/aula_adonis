import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aula from 'App/Models/Aula'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run () {
    await Aula.createMany([
      {data: new Date(2020, 1, 1), conteudo: 'conteudo', turmaId: 1},
    ])
  }
}
