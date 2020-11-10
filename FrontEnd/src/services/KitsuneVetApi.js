
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://3.92.237.122:5000'

})

export default class KitsuneVetApi {

    async CadastrarCliente(cad){
        const resp = await api.post('/cadastro', cad);
        return resp;
    }

    async FazerLogin(login){
        const resp = await api.post('/login', login);
        return resp;
    }

    async AgendarVacina(req){
        const resp = await api.post('/agendamentovacina', req);
        return resp;
    }

    async AgendarBanhoTosa(req){
        const resp = await api.post('/agendamentobanhoetosa', req);
        return resp;
    }

}