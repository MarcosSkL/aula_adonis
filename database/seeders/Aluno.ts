import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run () {
    await Aluno.createMany([
      {
        nome: 'Marcos',
        cpf: 1234567989,
        matricula: '21114290026',
        email: 'marcos.bezerra@iesb.edu.br',
        telefone: 1234567989,
        cep: 1234567989,
        logradouro: 'Taguatinga',
        complemento: 'quadra 20',
        numero: 18,
        bairro: 'bairro',
      },
    ])
    // Write your database queries inside the run method
  }
}
