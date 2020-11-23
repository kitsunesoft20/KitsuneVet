
import React, { useEffect, useState } from 'react';
import './cadastrar.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cabecalho from '../../Components/Cabecalho'
import Rodape from '../../Components/Rodape'

import KitsuneVetApi from '../../services/KitsuneVetApi';
import detalhes from './imagens/detalhes.png';
import familia from './imagens/familia.png';

const api = new KitsuneVetApi();

export default function Cadastrar()  {

    const [Nome, setNome] = useState('')
    const [Sexo, setSexo] = useState('')
    const [Nascimento, setNascimento] = useState('')
    const [Email, setEmail] = useState('')
    const [Telefone, setTelefone] = useState('')
    const [Cpf, setCpf] = useState('')
    const [Rg, setRg] = useState('')
    const [Endereco, setEndereco] = useState('')
    const [Complemento, setComplemento] = useState('')
    const [Cep, setCep] = useState('')
    const [Senha, setSenha] = useState('')

    let history = useHistory();
    const loadingBar = useRef(null);

    const salvarClick = async () => {

        try {

            loadingBar.current.continuousStart();

            const request = {
                nome: Nome,
                sexo: Sexo,
                nascimento: Nascimento,
                email: Email,
                telefone: Telefone,
                cpf: Cpf,
                rg: Rg,
                endereco: Endereco,
                complemento: Complemento,
                cep: Cep,
                senha: Senha
            };

            const resp = await api.CadastrarCliente(request);

            toast("Cadastrado com Sucesso 😼");
            await loadingBar.current.complete();

            window.setTimeout(() => 
                history.push( '/login' ), 2000
            );

        } 

        catch (e) {
            if(e.response.data.erro){
                toast.error(e.response.data.erro);
                await loadingBar.current.complete();
            }
                
            else{
                toast.error('Houve um erro! Tente novamente.');
                await loadingBar.current.complete();
            }
        }

    }

    return (
        <div>

            <LoadingBar
                height={4}
                color='#f11946'
                ref={loadingBar} 
            />

            <Cabecalho />
    
            <div className="inicio">

                <div className="fera">

                    <div className="container4">
                        <img src={detalhes} width="300px" height="300px" alt="erro" />
                    </div>

                    <div className="container3">

                        <div className="box4"> 
                            {'{'} Cadastro {'}'}
                        </div>

                        <div className="elsa">

                            <div className="dsformularios">
                                <h4> Nome: </h4>
                                <h4> Email: </h4>
                                <h4> Rg: </h4>
                                <h4> Cpf: </h4>
                                <h4> Senha: </h4>
                                <h4> Telefone: </h4>
                                <h4> Endereço: </h4>
                                <h4> Complemento: </h4>
                                <h4> Cep: </h4>
                                <h4> Data de Nascimento: </h4>
                                <h4> Sexo: </h4>
                            </div>

                            <form className="formularios">
                        
                                <input type="text" name="Nome"
                                    value={Nome}
                                    onChange ={x => setNome(x.target.value)}
                                    placeholder="Nome Completo"
                                />
                        
                                <input type="text" name="email"
                                    value={Email}
                                    onChange ={x => setEmail(x.target.value)}
                                    placeholder="Email"
                                />

                                <input type="text" name="rg" 
                                    value={Rg}
                                    onChange ={x => setRg(x.target.value)}
                                    placeholder="Número do Rg (sem pontuação)"
                                />
                        
                                <input type="fnumber" name="cpf" 
                                    value={Cpf}
                                    onChange ={x => setCpf(x.target.value)}
                                    placeholder="Número do Cpf (sem pontuação)"
                                />
                        
                                <input type="password" name="senha" 
                                    value={Senha}
                                    onChange ={x => setSenha(x.target.value)}
                                    placeholder="Senha com 8 caracteres ou mais"
                                />
                       
                                <input type="text" name="telefone" 
                                    value={Telefone}
                                    onChange ={x => setTelefone(x.target.value)}
                                    placeholder="Telefone para contato, com DDD"
                                />
                        
                                <input type="text" name="endereco" 
                                    value={Endereco}
                                    onChange ={x => setEndereco(x.target.value)}
                                    placeholder="Rua e número da residência"
                                />

                                <input type="text" name="complemento" 
                                    value={Complemento}
                                    onChange ={x => setComplemento(x.target.value)}
                                    placeholder="(Ex: Casa B)"
                                />

                                <input type="text" name="cep" 
                                    value={Cep}
                                    onChange ={x => setCep(x.target.value)}
                                    placeholder="CEP"
                                />

                                <input type="date" name="datanasc" 
                                    value={Nascimento}
                                    onChange ={x => setNascimento(x.target.value)}
                                />

                                <select name="Sexo" placeholder="Sexo"
                                    value={Sexo}
                                    onChange ={x => setSexo(x.target.value)}>
                                        <option value="" disabled selected> </option>
                                        <option value="Feminino"> Feminino </option>
                                        <option value="Masculino"> Masculino </option>
                                        <option value="Prefiro não informar"> Prefiro não informar </option>
                                        <option value="Outro"> Outro </option>
                                </select>

                            </form>
                                                    
                        </div>

                        <div className="botaoCadastro">
                            <button onClick={salvarClick}> Cadastrar </button>
                        </div>

                    </div> 
            
                    <div className="container5">
                        <img src={familia} width="300px" height="300px" alt="erro" />
                    </div>

                </div>

            </div>
    
            <Rodape />

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
            />

        </div>
    );

}