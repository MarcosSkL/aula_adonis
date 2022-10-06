// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Diciplina from "App/Models/Diciplina"

export default class DiciplinasController {
    index(){
        return Diciplina.all()
    }

    store( {request} ){
        const dados = request.only(["nome", "curso_id"])
        return Diciplina.create(dados)

    }

    show( {request} ) {
        const id = request.param('id')
        return Diciplina.findOrFail(id)
    }

    async destroy( {request} ) {
        const id = request.param('id')
        const diciplina = await Diciplina.findOrFail(id)
        return diciplina.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const diciplina = await Diciplina.findOrFail(id)
        const dados = request.only(["nome", "duracao", "modalidade"])
        diciplina.merge(dados)
        return diciplina.save()

    }
}


