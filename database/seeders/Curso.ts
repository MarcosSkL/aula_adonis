import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run () {
    await Curso.createMany([
      {nome:'ADS', duracao: 5, modalidade: "p"},
      {nome:'Redes', duracao: 5, modalidade: "e"},
      {nome:'Direito', duracao: 10, modalidade: "h"},
      {nome:'Medicina', duracao: 12, modalidade: "p"},
      {nome:'Enfermagem', duracao: 8, modalidade: "p"},
      {nome:'Administração', duracao: 5, modalidade: "p"},
      {nome:'Asronomia', duracao: 5, modalidade: "E"},
      {nome:'Psicologia', duracao: 5, modalidade: "p"},
      {nome:'Gastronomia', duracao: 5, modalidade: "E"},
      {nome:'Pedagogia', duracao: 5, modalidade: "p"},
    ])
  }
}
