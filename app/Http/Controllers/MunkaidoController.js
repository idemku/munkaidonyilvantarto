'use strict'

class MunkaidoController {
    * index(request, response){
        yield response.sendView('main');
    }

    * login(request, response){
        yield response.sendView('login');
    }
}

module.exports = MunkaidoController
