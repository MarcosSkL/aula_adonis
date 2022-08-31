// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Lista01Controller {
    ex01( {request} ){

        const dados = request.body()

        const estoqueMedio = (dados.qtMinima *1 + dados.qtMaxima *1) / 2

        const resultado = {
            estoqueMedio: estoqueMedio
        }

        return resultado
    }

    ex02(){
        return [2, 3, 4]

    }
}
