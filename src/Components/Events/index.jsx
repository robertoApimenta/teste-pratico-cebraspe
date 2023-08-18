import React, {useEffect, useState} from 'react';

import {Link} from 'react-router-dom';

import axios from '../../config/axios';

import {Container, Title, Header} from './styles';

import Button from '../Button';

function Events() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loader = async () => {
      const result = await axios.get('https://extranet.cebraspe.org.br/AvaliacaoCSA/BackEnd/') ;
      setEvents(result.data);
    }

    loader();
    
  }, []);

  return (
    <Container>
      <Header>
        <Title>
          <h1>Lista de eventos</h1>
        </Title>
        <Link to='/new-event'>
          <Button>Novo Evento</Button>
        </Link>
      </Header>
      
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Evento</th>
            <th scope="col">Data</th>
            <th scope="col">.</th>
            <th scope="col">.</th>
            <th scope="col">.</th>
            <th scope="col">.</th>
            <th scope="col">.</th>
          </tr>
        </thead>
        <tbody>
          {events.map((el) => (
            <tr key={el.message.data}>
              <td>{el.message.nomeEvento}</td>
              <td>{(el.message.data).substring(0, 10)}</td>
              <td>{el.message.endereco.logradouro}</td>
              <td>{el.message.endereco.bairro}</td>
              <td>{el.message.endereco.cidade}</td>
              <td>{el.message.endereco.uf}</td>
              <td>{el.message.endereco.cep}</td>
            </tr>
        ))}
        </tbody>
        
      </table>
      
    </ Container>
  )
};

export default Events;
