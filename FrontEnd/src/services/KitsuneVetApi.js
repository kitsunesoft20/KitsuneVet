
import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000"

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

    async CadastrarPet(cad){
        const resp = await api.post('/cadastroPet', cad);
        return resp;
    }

    async AgendarBanhoTosa(req){
        const resp = await api.post('/agendamentobanhoetosa', req);
        return resp;
    }
    
    async AgendarCirurgia(req){
        const resp = await api.post('/agendamentocirurgia', req);
        return resp;
    }

    async AgendarExame(req){
        const resp = await api.post('/agendamentoexame', req);
        return resp;
    }

    async AgendarHotel(req){
        const resp = await api.post('/agendamentohospedagem', req);
        return resp;
    }

    async AgendarVacina(req){
        const resp = await api.post('/agendamentovacina', req);
        return resp;
    }

    async Perfil(req){
        const resp = await api.post('/perfil', req);
        return resp;
    }

    async AlterarPerfil( req){
        const resp = await api.put('/AlterarPerfil', req);
        return resp;
    }

}