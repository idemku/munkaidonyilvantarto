'use strict'

class MunkaidoController {
    * index(request, response){
        yield response.sendView('main');
    }
}

module.exports = MunkaidoController
