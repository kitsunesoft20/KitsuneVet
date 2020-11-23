
import React, { useEffect, useState } from 'react';

import './cadastrarpet.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import KitsuneVetApi from '../../services/KitsuneVetApi';

import Cabecalho from '../../Components/Cabecalho';
import Rodape from '../../Components/Rodape';

import imagem1 from './imagens/puggif.gif';
import imagem2 from './imagens/pet.png';

import { useHistory } from "react-router-dom";

const api = new KitsuneVetApi();

export default function CadastroPet()  {

    const[Nome,setNome]=useState('');
    const[Peso,setPeso]=useState('');
    const[DtNasc,setDtNasc]=useState('');
    const[Tipo,setTipo]=useState('');
    const[Porte,setPorte]=useState('');
    const[Raca,setRaca]=useState('');
    const[Sexo,setSexo]=useState('');
    const[Medicamentos,setMedicamentos]=useState('');

    const cookie = Cookies.getJSON('Login');

    let history = useHistory();
    const loadingBar = useRef(null);

    const salvarClick = async () => {

        try {

            loadingBar.current.continuousStart();

            const request = {
                IdCliente: cookie.IdCliente,
                TipoPet: Tipo,
                nomepet: Nome,
                Sexo: Sexo,
                Raca: Raca,
                Porte: Porte,
                Medicamentos: Medicamentos,
                Nascimento: DtNasc,
                Peso: Peso
            };

            const resp = await api.CadastrarPet(request);

            toast("Pet cadastrado com sucesso 😼");
            await loadingBar.current.complete();

            window.setTimeout(() => 
                history.push('/'), 2000
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
    <div class="inicioCPet">

            <LoadingBar
                height={4}
                color='#f11946'
                ref={loadingBar} 
            />

        <Cabecalho />

        <div class="boxCPet">

            <div class="subboxCPet">
                <img src={imagem1} width="300px" height="300px" alt="erro"/>
            </div>

            <div class="subboxCPet2">

                <div class="titCPet"> 
                    {'{'} Cadastrar Pet {'}'}
                </div>

                <div class="centerboxCPet">

                    <div class="dsformulariosCPet">
                        <h4> Nome do Pet: </h4>
                        <h4> Peso(Kg): </h4>
                        <h4> Data de Nascimento: </h4>
                        <h4> Tipo de Pet: </h4>
                        <h4> Porte:</h4>
                        { Tipo === "" && (<h4> Raça: </h4>)}
                        { Tipo === "gato" && (<h4> Raça: </h4>)}
                        { Tipo === "cachorro" && (<h4> Raça: </h4>)}
                        <h4> Sexo: </h4>
                        <h4> Medicamentos: </h4>
                    </div>

                    <form class="formulariosCPet">
                        
                        <input type="text" 
                        value={Nome} 
                        onChange ={x => setNome(x.target.value)}
                        />
                        
                        <input type="text" 
                        value={Peso} 
                        onChange ={x => setPeso(x.target.value)}
                        />
                        
                        <input type="date" 
                        value={DtNasc} 
                        onChange ={x => setDtNasc(x.target.value)}
                        />

                        <select name="Tipo de Pet"  
                        value={Tipo}
                        onChange ={x => setTipo(x.target.value)}>

                            <option value="" disabled selected> </option>
                            <option value="cachorro"> Cachorro </option>
                            <option value="gato"> Gato </option>

                        </select>

                        <select name="Porte" 
                        value={Porte}
                        onChange ={x => setPorte(x.target.value)}>

                            <option value="" disabled selected> </option>
                            <option value="pequeno"> Pequeno</option>
                            <option value="médio"> Médio </option>
                            <option value="grande"> Grande </option>

                        </select>

                        {Tipo === "" && (
                            <select>
                                <option disabled select> Selecione o Tipo do Pet</option>
                            </select>
                        )}

                        { Tipo === "gato" && (

                            <select class="racagatos"
                                value={Raca}
                                onChange ={x => setRaca(x.target.value)}
                                >
                                
                                    <option value=""></option>
                                
                                    <option value="sem raça definida">SRD - Sem raça definida </option>
                                
                                    <option value="abissinio">Abissínio </option>
                                
                                    <option value="american shorthair">American Shorthair </option>
                                
                                    <option value="american short hair">American Short hair </option>
                                
                                    <option value="bengal">Bengal </option>
                                
                                    <option value="brasileiro real">Brasileiro Real </option>
                                
                                    <option value="british">British </option>
                                
                                    <option value="burmilla">Burmilla </option>
                                
                                    <option value="cornish rex">Cornish Rex </option>
                                
                                    <option value="exótico">Exótico </option>
                                
                                    <option value="gato srd pelo curto">Gato Srd Pelo Curto </option>
                                
                                    <option value="himalaia">Himaláia </option>
                                
                                    <option value="maine coon">Maine Coon </option>
                                
                                    <option value="munchkin">Munchkin </option>
                                
                                    <option value="oriental">Oriental </option>
                                
                                    <option value="persa">Persa </option>
                                
                                    <option value="pixie bob">Pixie Bob </option>
                                
                                    <option value="ragdoll">Ragdoll </option>
                                
                                    <option value="russian blue">Russian Blue </option>
                                
                                    <option value="sagrado da birmânia">Sagrado Da Birmânia </option>
                                
                                    <option value="savannah">Savannah </option>
                                
                                    <option value="scottish fold">Scottish Fold </option>
                                
                                    <option value="siamês">Siamês </option>
                                
                                    <option value="siberiana">Siberiana </option>
                                
                                    <option value="sphynx">Sphynx </option>
                                
                                    <option value="york">York </option>
                                
                                </select>
                            
                        )
                        }

                        { Tipo === "cachorro" && (

                            <select class="racacachorro"
                            value={Raca}
                            onChange ={x => setRaca(x.target.value)}
                            >

                                <option value=""></option>
                            
                                <option value="SRD - Sem raça definida">SRD - Sem raça definida </option>
                            
                                <option value="Affenpinscher ">Affenpinscher </option>
                            
                                <option value="Afghan Hound">Afghan Hound </option>
                            
                                <option value="Airedale Terrier">Airedale Terrier </option>
                            
                                <option value="Akita Americano ">Akita Americano </option>
                            
                                <option value="Akita Inu ">Akita Inu </option>
                            
                                <option value="American Bully">American Bully </option>
                            
                                <option value="American Pit Bull Terrier ">American Pit Bull Terrier </option>
                            
                                <option value="American Staffordshire Terrier">American Staffordshire Terrier </option>
                            
                                <option value=">American Stafforshire">American Stafforshire </option>
                            
                                <option value="Australian Cattle Dog">Australian Cattle Dog </option>
                            
                                <option value="Australian Shepherd ">Australian Shepherd </option>
                            
                                <option value="Basenji">Basenji </option>
                            
                                <option value="Basset Artesiano Normando">Basset Artesiano Normando </option>
                            
                                <option value="BASSET FULVO DA BRETANHA">BASSET FULVO DA BRETANHA </option>
                            
                                <option value="Basset Hound">Basset Hound </option>
                            
                                <option value="Beagle">Beagle </option>
                            
                                <option value="Beagle Harrier">Beagle Harrier </option>
                            
                                <option value="Bearded Collie">Bearded Collie </option>
                            
                                <option value="BEDLINGTON TERRIER">BEDLINGTON TERRIER </option>
                            
                                <option value="Bernese Mountain Dog">Bernese Mountain Dog </option>
                            
                                <option value="Bichon Frisé">Bichon Frisé </option>
                            
                                <option value="Bichon Havanês">Bichon Havanês </option>
                            
                                <option value="Biewer Terrier">Biewer Terrier </option>
                            
                                <option value="Billy">Billy </option>
                            
                                <option value="Bloodhound">Bloodhound </option>
                            
                                <option value="Boerboel">Boerboel </option>
                            
                                <option value="Boiadeiro Bernês">Boiadeiro Bernês </option>
                            
                                <option value="Boiadeiro De Entlebuch">Boiadeiro De Entlebuch </option>
                            
                                <option value="Bolonhês">Bolonhês </option>
                            
                                <option value="Border Colli">Border Collie </option>
                            
                                <option value="Border Terrier">Border Terrier </option>
                            
                                <option value="Borzoi">Borzoi </option>
                            
                                <option value="Boston Terrier">Boston Terrier </option>
                            
                                <option value="Bouvier Des Flandres">Bouvier Des Flandres </option>
                            
                                <option value="Boxer">Boxer </option>
                            
                                <option value="Braco Alemão">Braco Alemão (kurzhaar) </option>
                            
                                <option value="Branco Alemão Pelo Curto">Braco Alemão Pelo Curto  </option>
                            
                                <option value="Branco Alemão Pelo Duro">Braco Alemão Pelo Duro </option>
                            
                                <option value="Braco de Auvergne">Braco de Auvergne </option>
                            
                                <option value="Braco de Bourbonnais">Braco de Bourbonnais </option>
                            
                                <option value="Braco Húngaro de Pelo Curto">Braco Húngaro de Pelo Curto </option>
                            
                                <option value="Braco Húngaro de Pelo Duro">Braco Húngaro de Pelo Duro </option>
                            
                                <option value="Braco Italiano">Braco Italiano </option>
                            
                                <option value="Breton">Breton </option>
                            
                                <option value="Buldogue Americano-">Buldogue Americano </option>
                            
                                <option value="Buldogue Campeiro">Buldogue Campeiro </option>
                            
                                <option value="Buldogue Francês">Buldogue Francês </option>
                            
                                <option value="Buldogue Inglês">Buldogue Inglês </option>
                            
                                <option value="Buldogue Serrano">Buldogue Serrano</option>
                            
                                <option value="Bulldog">Bulldog </option>
                            
                                <option value="Bulldog Francês">Bulldog Francês </option>
                            
                                <option value="Bulldogue Inglês ">Bulldogue Inglês </option>
                            
                                <option value="Bull Terrier">Bull Terrier </option>
                            
                                <option value="Bull Terrier Miniatura">Bull Terrier Miniatura </option>
                            
                                <option value="Bulmastife">Bulmastife </option>
                            
                                <option value="Cairn Terrier">Cairn Terrier </option>
                            
                                <option value="Cane Corso">Cane Corso </option>
                            
                                <option value="Cão da Groenlândia">Cão da Groenlândia </option>
                            
                                <option value="Cão D'Água Frisado">Cão D'Água Frisado </option>
                                <option value="CÃO D'ÁGUA PORTUGUÊS">CÃO D'ÁGUA PORTUGUÊS </option>
                            
                                <option value="CÃO DA MONTANHA DOS PIRENEUS">CÃO DA MONTANHA DOS PIRENEUS </option>
                            
                                <option value="CÃO DA SERRA DA ESTRELA">CÃO DA SERRA DA ESTRELA </option>
                            
                                <option value="Cão Das Montanhas Do Atlas">Cão Das Montanhas Do Atlas </option>
                            
                                <option value="CÃO DE CASTRO LABOREIRO ">CÃO DE CASTRO LABOREIRO </option>
                            
                                <option value="Cão De Crista Chinês">Cão De Crista Chinês </option>
                            
                                <option value="Cão De Santo Humberto ">Cão De Santo Humberto </option>
                            
                                <option value="CÃO DO CANAÃ">CÃO DO CANAÃ </option>
                            
                                <option value="CÃO FILA DE SÃO MIGUEL">CÃO FILA DE SÃO MIGUEL </option>
                            
                                <option value="CÃO LOBO TCHECOSLOVACO">CÃO LOBO TCHECOSLOVACO </option>
                            
                                <option value="Cavalier King Charles Spaniel">Cavalier King Charles Spaniel </option>
                            
                                <option value="CESKY FOUSEK">CESKY FOUSEK </option>
                            
                                <option value="CESKY TERRIER">CESKY TERRIER </option>
                            
                                <option value="Chesapeake Bay Retriever ">Chesapeake Bay Retriever </option>
                            
                                <option value="Chihuahua ">Chihuahua </option>
                            
                                <option value="Chinese Crested Dog">Chinese Crested Dog </option>
                            
                                <option value="Chow Chow ">Chow Chow </option>
                            
                                <option value="CIMARRÓN URUGUAYO">CIMARRÓN URUGUAYO </option>
                            
                                <option value="CIRNECO DO ETNA">CIRNECO DO ETNA </option>
                            
                                <option value="CLUMBER SPANIEL">CLUMBER SPANIEL </option>
                            
                                <option value="Cocker">Cocker </option>
                            
                                <option value="Cocker Spaniel Americano">Cocker Spaniel Americano </option>
                            
                                <option value="Cocker Spaniel Inglês">Cocker Spaniel Inglês </option>
                            
                                <option value="Collie">Collie </option>
                            
                                <option value="COLLIE PELO CURTO">COLLIE PELO CURTO </option>
                            
                                <option value="COLLIE PELO LONGO ">COLLIE PELO LONGO </option>
                            
                                <option value="Coonhound Preto E Castanho">Coonhound Preto E Castanho </option>
                            
                                <option value="Coton De Tuléar">Coton De Tuléar </option>
                            
                                <option value="Coton De Tuléar">Coton De Tuléar </option>
                            
                                <option value="COTTON DE TULEAR">COTTON DE TULEAR </option>
                            
                                <option value="Dachshund (teckel)">Dachshund (teckel) </option>
                            
                                <option value="DALMATA">DALMATA </option>
                            
                                <option value="Dálmata">Dálmata </option>
                            
                                <option value="DANDIE DINMONT TERRIER">DANDIE DINMONT TERRIER </option>
                            
                                <option value="DEERHOUND">DEERHOUND </option>
                            
                                <option value="Dobermann">Dobermann </option>
                            
                                <option value="Dog">Dog </option>
                            
                                <option value="Dogo Argentino">Dogo Argentino </option>
                            
                                <option value="DOGO CANÁRIO">DOGO CANÁRIO </option>
                            
                                <option value="Dogue Alemão">Dogue Alemão </option>
                            
                                <option value="Dogue Brasileiro">Dogue Brasileiro </option>
                            
                                <option value="Dogue De Bordeaux">Dogue De Bordeaux </option>
                            
                                <option value="ELKHOUND NORUEGUÊS CINZA">ELKHOUND NORUEGUÊS CINZA </option>
                            
                                <option value="Ferret">Ferret </option>
                            
                                <option value="Fila Brasileiro">Fila Brasileiro </option>
                            
                                <option value="Flat Coated Retriever">Flat Coated Retriever </option>
                            
                                <option value="Foxhound Americano">Foxhound Americano </option>
                            
                                <option value="FOXHOUND INGLÊS">FOXHOUND INGLÊS </option>
                            
                                <option value="Fox Terrier De Pêlo Liso">Fox Terrier De Pêlo Liso </option>
                            
                                <option value="Fox Terrier Pêlo Duro">Fox Terrier Pêlo Duro </option>
                            
                                <option value="Fox Terrier Pelo Duro (wire)">Fox Terrier Pelo Duro (wire) </option>
                            
                                <option value="Fox Terrier Pelo Liso">Fox Terrier Pelo Liso (smooth) </option>
                            
                                <option value="Galgo Espanhol">Galgo Espanhol </option>
                            
                                <option value="GASCÃO DE SAINTONGEOIS">GASCÃO DE SAINTONGEOIS </option>
                            
                                <option value="Golden">Golden </option>
                            
                                <option value="Golden Retriever">Golden Retriever </option>
                            
                                <option value="GRANDE AZUL DA GASCONHA">GRANDE AZUL DA GASCONHA </option>
                            
                                <option value="GRANDE MUSTERLANDER">GRANDE MUSTERLANDER </option>
                            
                                <option value="Greinhound">Greinhound </option>
                            
                                <option value="GREYHOUND">GREYHOUND </option>
                            
                                <option value="GRIFFON DE APONTE DE PÊLO DURO KORTHALS">GRIFFON DE APONTE DE PÊLO DURO KORTHALS </option>   
                            
                                <option value="Griffon De Bruxelas">Griffon De Bruxelas </option>
                            
                                <option value="GRIFFON NIVERNAIS">GRIFFON NIVERNAIS </option>
                            
                                <option value="HOKKAIDO ">HOKKAIDO </option>
                            
                                <option value="Husky Siberiano ">Husky Siberiano </option>
                            
                                <option value="Jack Russel">Jack Russel </option>
                            
                                <option value="JAPANESE CHIN">JAPANESE CHIN </option>
                            
                                <option value="Kerry Blue Terrier">Kerry Blue Terrier </option>
                            
                                <option value="King Charles Spaniel">King Charles Spaniel </option>
                            
                                <option value="KOMONDOR">KOMONDOR </option>
                            
                                <option value="KROMFOHRLÄNDER">KROMFOHRLÄNDER </option>
                            
                                <option value="Kuvasz">Kuvasz </option>
                            
                                <option value="Labrador ">Labrador </option>
                            
                                <option value="Labrador Retriever">Labrador Retriever </option>
                            
                                <option value="LAGOTTO ROMAGNOLO ">LAGOTTO ROMAGNOLO </option>
                            
                                <option value="LAKELAND TERRIER">LAKELAND TERRIER </option>
                            
                                <option value="LANDSEER ">LANDSEER </option>
                            
                                <option value="LEONBERGER">LEONBERGER </option>
                            
                                <option value="Lhasa Apso">Lhasa Apso </option>
                            
                                <option value="LULU DA POMERANIA (SPITZ)">LULU DA POMERANIA (SPITZ) </option>
                            
                                <option value="Lulu Da Pomerânia (spitz)">Lulu Da Pomerânia (spitz) </option>
                            
                                <option value="Malamute Do Alaska">Malamute Do Alaska </option>
                            
                                <option value="Maltês">Maltês </option>
                            
                                <option value="MANCHESTER TERRIER">MANCHESTER TERRIER </option>
                            
                                <option value="Mastiff ">Mastiff </option>
                            
                                <option value="Mastiff Inglês">Mastiff Inglês </option>
                            
                                <option value="Mastim Dos Pireneus">Mastim Dos Pireneus </option>
                            
                                <option value="MASTIM ESPANHOL ">MASTIM ESPANHOL </option>
                            
                                <option value="Mastim Napolitano">Mastim Napolitano </option>
                            
                                <option value="Mini Coelho">Mini Coelho </option>
                            
                                <option value="MUDI">MUDI </option>
                            
                                <option value="NORFOLK TERRIER">NORFOLK TERRIER </option>
                            
                                <option value="Norwich Terrier">Norwich Terrier </option>
                            
                                <option value="Olde Englishbulldogge Brasileiro">Olde Englishbulldogge Brasileiro </option>
                            
                                <option value="Old English Sheepdog">Old English Sheepdog </option>
                            
                                <option value="OUTROS">OUTROS </option>
                            
                                <option value="OVELHEIRO GAÚCHO">OVELHEIRO GAÚCHO </option>
                            
                                <option value="Papillon">Papillon </option>
                            
                                <option value="Parson Russell Terrier">Parson Russell Terrier </option>
                            
                                <option value="Pastor Alemão">Pastor Alemão </option>
                            
                                <option value="Pastor Alemão Branco">Pastor Alemão Branco </option>
                            
                                <option value="Pastor Australiano (shepherd)">Pastor Australiano (shepherd) </option>
                            
                                <option value="PASTOR BELGA DE MALINOIS">PASTOR BELGA DE MALINOIS </option>
                            
                                <option value="Pastor Belga Groenandael">Pastor Belga Groenandael </option>
                            
                                <option value="Pastor Belga Tervueren">Pastor Belga Tervueren </option>
                            
                                <option value="Pastor Branco Suiço">Pastor Branco Suiço </option>
                            
                                <option value="Pastor Da Anatólia ">Pastor Da Anatólia </option>
                            
                                <option value="PASTOR DA ÁSIA CENTRAL">PASTOR DA ÁSIA CENTRAL </option>
                            
                                <option value="PASTOR DE BEAUCE ">PASTOR DE BEAUCE </option>
                            
                                <option value="PASTOR DE BRIE ">PASTOR DE BRIE </option>
                            
                                <option value="Pastor de Shetland">Pastor de Shetland </option>
                            
                                <option value="PASTOR DO CAUCASO">PASTOR DO CAUCASO </option>
                            
                                <option value="PASTOR FINLANDÊS DA LAPÔNIA">PASTOR FINLANDÊS DA LAPÔNIA </option>
                            
                                <option value="PASTOR HOLANDÊS ">PASTOR HOLANDÊS </option>
                            
                                <option value="Pastor Maremano Abruzês">Pastor Maremano Abruzês </option>
                            
                                <option value="PASTOR POLONÊS DA PLANÍCIE ">PASTOR POLONÊS DA PLANÍCIE </option>
                            
                                <option value="PELADO MEXICANO">PELADO MEXICANO </option>
                            
                                <option value="PELADO PERUANO">PELADO PERUANO </option>
                            
                                <option value="PEQUENO CÃO LEÃO">PEQUENO CÃO LEÃO </option>
                            
                                <option value="Pequeno Lebrel Italiano ">Pequeno Lebrel Italiano </option>
                            
                                <option value="PEQUENO SPANIEL CONTINENTAL - PAPILLON / PHALENE">PEQUENO SPANIEL CONTINENTAL - PAPILLON / PHALENE </option>
                            
                                <option value="Pequinês">Pequinês </option>
                            
                                <option value="Perdigueiro Português">Perdigueiro Português </option>
                            
                                <option value="PETIT BASSET GRIFFON VENDÉEN ">PETIT BASSET GRIFFON VENDÉEN </option>
                            
                                <option value="PETIT BRABANÇON">PETIT BRABANÇON </option>
                            
                                <option value="PHARAOH HOUND ">PHARAOH HOUND </option>
                            
                                <option value="Pinscher">Pinscher </option>
                            
                                <option value="Pinscher Miniatura ">Pinscher Miniatura </option>
                            
                                <option value="Pit Bull Terrier">Pit Bull Terrier </option>
                            
                                <option value="PODENGO CANÁRIO ">PODENGO CANÁRIO </option>
                            
                                <option value="PODENGO IBICENCO">PODENGO IBICENCO </option>
                            
                                <option value="PODENGO PORTUGUÊS ">PODENGO PORTUGUÊS </option>
                            
                                <option value="Pointer Inglês">Pointer Inglês </option>
                            
                                <option value="Poodle">Poodle </option>
                            
                                <option value="POODLE GIGANTE">POODLE GIGANTE </option>
                            
                                <option value="POODLE MÉDIO ">POODLE MÉDIO </option>
                            
                                <option value="Poodle Micro Toy">Poodle Micro Toy </option>
                            
                                <option value="Poodle Toy ">Poodle Toy </option>
                            
                                <option value="Pug">Pug </option>
                            
                                <option value="Puli">Puli </option>
                            
                                <option value="PUMI">PUMI </option>
                            
                                <option value="RAFEIRO DO ALENTEJO">RAFEIRO DO ALENTEJO </option>
                            
                                <option value="RASTREADOR BRASILEIRO">RASTREADOR BRASILEIRO </option>
                            
                                <option value="RETRIEVER NOVA ESCÓCIA DUCK TOLLING">RETRIEVER NOVA ESCÓCIA DUCK TOLLING </option>
                            
                                <option value="Rhodesian Ridgeback ">Rhodesian Ridgeback </option>
                            
                                <option value="Rottweiler">Rottweiler </option>
                            
                                <option value="SALUKI">SALUKI </option>
                            
                                <option value="Samoieda">Samoieda </option>
                            
                                <option value="São Bernardo">São Bernardo </option>
                            
                                <option value="Schipperke">Schipperke </option>
                            
                                <option value="Schnauzer">Schnauzer </option>
                            
                                <option value="Schnauzer Gigante">Schnauzer Gigante </option>
                            
                                <option value="Schnauzer Miniatura ">Schnauzer Miniatura </option>
                            
                                <option value="SCHNAUZER STANDARD">SCHNAUZER STANDARD </option>
                            
                                <option value="SCOTTISH TERRIER">SCOTTISH TERRIER </option>
                            
                                <option value="SETTER GORDON ">SETTER GORDON </option>
                            
                                <option value="Setter Inglês ">Setter Inglês </option>
                            
                                <option value="Setter Irlandês">Setter Irlandês </option>
                            
                                <option value="SETTER IRLANDÊS RUIVO">SETTER IRLANDÊS RUIVO </option>
                            
                                <option value="SETTER IRLANDÊS VERMELHO E BRANCO">SETTER IRLANDÊS VERMELHO E BRANCO </option>
                            
                                <option value="Shar Pei">Shar Pei </option>
                            
                                <option value="Shiba">Shiba </option>
                            
                                <option value="Shih tzu">Shih tzu </option>
                            
                                <option value="Shih-tzu">Shih-tzu </option>
                            
                                <option value="SILKY TERRIER AUSTRALIANO">SILKY TERRIER AUSTRALIANO </option>
                            
                                <option value="Skye Terrier">Skye Terrier </option>
                            
                                <option value="Smoushond Holandês ">Smoushond Holandês </option>
                            
                                <option value="Spaniel Bretão">Spaniel Bretão </option>
                            
                                <option value="SPANIEL D'ÁGUA AMERICANO">SPANIEL D'ÁGUA AMERICANO </option>
                            
                                <option value="SPANIEL D'ÁGUA IRLANDÊS ">SPANIEL D'ÁGUA IRLANDÊS </option>
                            
                                <option value="SPANIEL DA PICARDIA">SPANIEL DA PICARDIA </option>
                            
                                <option value="SPANIEL FRANCÊS">SPANIEL FRANCÊS </option>
                            
                                <option value="SPANEIL JAPONÊS">SPANIEL JAPONÊS </option>
                            
                                <option value="SPANIEL TIBETANO">SPANIEL TIBETANO </option>
                            
                                <option value="SPINONE ITALIANO">SPINONE ITALIANO </option>
                            
                                <option value="Spitz Alemão">Spitz Alemão </option>
                            
                                <option value="Spitz Japonês">Spitz Japonês </option>
                            
                                <option value="Springer Spaniel Inglês">Springer Spaniel Inglês </option>
                            
                                <option value="SRD GRDE PELO CURTO">SRD GRDE PELO CURTO </option>
                            
                                <option value="SRD GRDE PELO LONGO">SRD GRDE PELO LONGO </option>
                            
                                <option value="SRD MD PELO CURTO">SRD MD PELO CURTO </option>
                            
                                <option value="SRD MD PELO LONGO ">SRD MD PELO LONGO </option>
                            
                                <option value="SRD PEQ PELO CURTO">SRD PEQ PELO CURTO </option>
                            
                                <option value="SRD PEQ PELO LONGO">SRD PEQ PELO LONGO </option>
                            
                                <option value="SRD PQ PELO CURTO">SRD PQ PELO CURTO </option>
                            
                                <option value="SRD PQ PELO LONGO">SRD PQ PELO LONGO </option>
                            
                                <option value="STABYHOUN">STABYHOUN </option>
                            
                                <option value="Staffordshire Bull Terrier ">Staffordshire Bull Terrier </option>
                            
                                <option value="Super Cão (Rot C/ Pit)">Super Cão (Rot C/ Pit) </option>
                            
                                <option value="SUPER CÃO ( ROT C/ PIT);">SUPER CÃO ( ROT C/ PIT); </option>
                            
                                <option value="Teckel">Teckel </option>
                            
                                <option value="TECKEL PELO CURTO">TECKEL PELO CURTO </option>
                            
                                <option value="TECKEL PELO DURO">TECKEL PELO DURO </option>
                            
                                <option value="TECKEL PÊLO LONGO">TECKEL PÊLO LONGO </option>
                            
                                <option value="TENERIFE">TENERIFE </option>
                            
                                <option value="Terra Nova">Terra Nova </option>
                            
                                <option value="TERRIER ALEMÃO DE CAÇA - JAGD">TERRIER ALEMÃO DE CAÇA - JAGD </option>
                            
                                <option value="Terrier Brasileiro (fox Paul.)">Terrier Brasileiro (fox Paul.) </option>
                            
                                <option value="TERRIER ESCOCÊS ">TERRIER ESCOCÊS </option>
                            
                                <option value="TERRIER IRLANDÊS">TERRIER IRLANDÊS </option>
                            
                                <option value="TERRIER IRLANDÊS DO GLEN DO IMAAL">TERRIER IRLANDÊS DO GLEN DO IMAAL </option>
                            
                                <option value="TERRIER PRETO DA RÚSSIA">TERRIER PRETO DA RÚSSIA </option>
                            
                                <option value="TERRIER TIBETANO ">TERRIER TIBETANO </option>
                            
                                <option value="THAI RIDGEBACK">THAI RIDGEBACK </option>
                            
                                <option value="TOSA">TOSA </option>
                            
                                <option value="Toy Fox Terrier ">Toy Fox Terrier </option>
                            
                                <option value="Veadeiro Pampeano">Veadeiro Pampeano </option>
                            
                                <option value="VIZSLA">VIZSLA </option>
                            
                                <option value="VOLPINO ITALIANO">VOLPINO ITALIANO </option>
                            
                                <option value="Weimaraner">Weimaraner </option>
                            
                                <option value="Welsh Corgi Cardigan">Welsh Corgi Cardigan </option>
                            
                                <option value="Welsh Corgi Pembroke ">Welsh Corgi Pembroke </option>
                            
                                <option value="Welsh Springer Spaniel ">Welsh Springer Spaniel </option>
                            
                                <option value="Welsh Terrier">Welsh Terrier </option>
                            
                                <option value="West Highland White Terrier">West Highland White Terrier </option>
                            
                                <option value="Whippet">Whippet </option>
                            
                                <option value="WOLFHOUND IRLANDÊS">WOLFHOUND IRLANDÊS </option>
                            
                                <option value="York Chocolat">York Chocolat </option>
                            
                                <option value="Yorkshire">Yorkshire </option>
                            
                                <option value="Yorkshire Terrier ">Yorkshire Terrier </option>
                            
                            
                        </select>

                        )
                        }

                        <select name="Sexo" 
                        value={Sexo}
                        onChange ={x => setSexo(x.target.value)}
                        >
                            <option value="" disabled selected> </option>
                            <option value="Fêmea"> Fêmea </option>
                            <option value="Macho"> Macho </option>
                        </select>

                        <textarea placeholder="Usa algum tipo de medicamento? Quais?" 
                        className="medicamentosCeP"
                        value={Medicamentos}
                        onChange ={x => setMedicamentos(x.target.value)}
                        />

                    </form>

                </div>

                <div class="botaoCPet">
                    <button onClick={salvarClick}> Cadastrar </button>
                </div>

            </div> 
            
            <div class="subboxCPet3">
                <img src={imagem2} width="300px" height="300px" alt="erro"/>
            </div>

        </div>

        <Rodape/>

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