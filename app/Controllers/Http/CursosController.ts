// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso"

export default class CursosController {
    index(){
        return Curso.all()
    }

    store(){
        const dados = {
            nome: 'ADS', duracao: 5, modalidade: "p"
        }
        return Curso.create(dados)
    }
}

