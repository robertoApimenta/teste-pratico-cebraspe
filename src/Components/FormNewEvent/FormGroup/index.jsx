import React from 'react';
import { Container } from './styles';

function FormGroup({children, status}) {
  return (
    <Container>
      {children}
      {status === 200 && <small status={status} className='ok'>Cadastrado com sucesso!</small>}
      {status === 400 && <small status={status} className='notOk'>Erro durante o cadastro!</small>}
    </Container>
  )
}

export default FormGroup;
