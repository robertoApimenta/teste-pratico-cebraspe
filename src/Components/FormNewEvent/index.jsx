import React, {useState} from 'react';

import axios from '../../config/axios';

import FormGroup from './FormGroup';
import Input from '../Input';
import Button from '../Button';

import {Container, Title, Form} from './styles';

import Home from '../../assets/icons/home.png';
import { Link } from 'react-router-dom';

function FormNewEvent() {

  const [evento, setEvento] = useState();
  const [website, setWebSite] = useState();
  const [data, setData] = useState();
  const [maxCandidatos, setMaxCandidatos] = useState();
  const [cep, setCep] = useState();
  const [logradouro, setLogradouro] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [complemento, setComplemento] = useState();
  const [numero, setNumero] = useState();
  const [estado, setEstado] = useState();
  const [imagem, setImagem] = useState();
  const [status, setStatus] = useState();

  const handleEvento = (e) => {
    setEvento(e.target.value)
  }

  const handleWebSite = (e) => {
    setWebSite(e.target.value)
  }

  const handleData = (e) => {
    setData(e.target.value)
  }

  const handleMaxCandidatos = (e) => {
    setMaxCandidatos(e.target.value)
  }

  const handleCep = async (e) => {
    setCep(e.target.value);

    try {
      const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if(result.status === 200){
        setLogradouro(result.data.logradouro);
        setBairro(result.data.bairro);
        setCidade(result.data.localidade);
        setEstado(result.data.uf);
      }
    } catch {

      } 
   
    
  }

  const handleComplemento = (e) => {
    setComplemento(e.target.value)
  }

  const handleNumero = (e) => {
    setNumero(e.target.value)
  }

  const handleImagem = (e) => {
    setImagem(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoEvento = {
      nomeEvento: evento,
      webSite: website,
      data: data,
      numeroMaxCandidato: maxCandidatos,
        endereco: {
          logradouro,
          bairro,
          cidade,
          complemento,
          numero,
          uf: estado,
          cep,
        },
      imageUrl: imagem,
    };
    
    await axios.post('https://extranet.cebraspe.org.br/AvaliacaoCSA/BackEnd/', novoEvento)
      .then((response) => {
          setStatus(response.status);
      })
      .catch((err) => {
        setStatus(400);
      })
  };

  console.log(status)

  const validForm = (
    evento, 
    website, 
    data, 
    maxCandidatos, 
    logradouro, 
    bairro,    
    cidade,
    complemento,
    numero,
    estado,
    cep,
    imagem);

  

  return (
    <Container>
      <Title>
        <Link to='/'>
          <img src={Home} alt="Página home" />
        </Link>
        
        <h1>Cadastrar novo evento</h1>
      </Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input 
            placeholder='Evento' 
            value={evento}
            onChange={handleEvento}
          />
        </FormGroup>
        <FormGroup>
          <Input 
            placeholder='Web Site'
            value={website}
            onChange={handleWebSite} 
          />
        </FormGroup>
        <FormGroup>
          <Input 
            placeholder='Data' 
            value={data}
            onChange={handleData} 
          />
        </FormGroup>
        <FormGroup>
          <Input 
            placeholder='Máximo de candidatos' 
            value={maxCandidatos}
            onChange={handleMaxCandidatos} 
          />
        </FormGroup>
        <FormGroup>
          <Input 
            placeholder='CEP' 
            value={cep}
            onChange={handleCep}
          />
        </FormGroup>
        <FormGroup>
          <Input placeholder='Logradouro' value={logradouro}/>
        </FormGroup>
        <FormGroup>
          <Input placeholder='Bairro' value={bairro}/>
        </FormGroup>
        <FormGroup>
          <Input placeholder='Cidade' value={cidade}/>
        </FormGroup>
        <FormGroup>
          <Input 
            placeholder='Complemento' 
            value={complemento}
            onChange={handleComplemento}
          />
        </FormGroup>
        <FormGroup>
          <Input 
            placeholder='Número' 
            value={numero}
            onChange={handleNumero}
          />
        </FormGroup>
        <FormGroup>
          <Input placeholder='Estado' value={estado}/>
        </FormGroup>
        <FormGroup>
          <Input 
            placeholder='Imagem'
            value={imagem}
            onChange={handleImagem}
          />
        </FormGroup>
        
        <FormGroup status={status}>
          <Button type='submit' disabled={!validForm}>Cadastrar</Button>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default FormNewEvent
