import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Diciplina from 'App/Models/Diciplina'

export default class extends BaseSeeder {
  public async run () {
    await Diciplina.createMany([
      {nome: 'Frontend', cursoId: 1},
      {nome: 'Backend', cursoId: 1},
      {nome: 'Redes I', cursoId: 2},
      {nome: 'Anatomia', cursoId: 5},
      {nome: 'Historia do Brasil', cursoId: 6},
      {nome: 'Historia do Mundo', cursoId: 6},
      {nome: 'Dir. Penal', cursoId: 1},
      {nome: 'Dir Administrativo', cursoId: 1},
      {nome: 'Freud', cursoId: 8},
      {nome: 'Alfabetizacao', cursoId: 8},
      {nome: 'Engenharia de Software', cursoId: 1},
    ])
  }
}
