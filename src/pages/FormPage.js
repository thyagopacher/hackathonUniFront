import Page from 'components/Page';
import api from '../services/api'

import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

const FormPage = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get('alunos').then(response => {
      setStudents(response.data);
    });
}, []);

  async function handleAddStudent(student){

    const response = await api.post('students', student);
    const studentRes = response.data;

    setStudents([...students, studentRes]);
}  

  async function handleRemoveStudent(id) {
    const response = await api.delete('students/' + id);

    setStudents(students.filter(student => student.id !== id));
  }

  return (
    <Page title="Alunos" breadcrumbs={[{ name: 'Aluno', active: true }]}>
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>Formulário de Cadastro</CardHeader>
            <CardBody>
              <Form>
              <FormGroup>
                  <Label>Nome</Label>
                  <Input
                    type="text"
                    name="nome"
                    placeholder="Digite nome"
                  />
                </FormGroup>                
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Digite e-mail"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Senha</Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Digite senha"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Perfil GitHub</Label>
                  <Input
                    type="url"
                    name="url"
                    id="exampleUrl"
                    placeholder="url Perfil GitHub"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleNumber">Celular</Label>
                  <Input
                    type="text"
                    name="celular"
                    id="celular"
                    placeholder="Digite num. celular"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label for="exampleSelectMulti">Interesses</Label>
                  <Input type="select" name="interesses" id="interesses" multiple>
                    <option>Interesse - 1</option>
                    <option>Interesse - 2</option>
                    <option>Interesse - 3</option>
                    <option>Interesse - 4</option>
                    <option>Interesse - 5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Biográfia</Label>
                  <Input type="textarea" name="text" placeholder="Digite sua biográfia" spellCheck/>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleFile">Foto</Label>
                  <Input type="file" name="file" />
                  <FormText color="muted">
                    Imagem que irá aparecer para identificar seu perfil.
                  </FormText>
                </FormGroup>
            
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> Desejo receber notificações por e-mail
                  </Label>
                </FormGroup>

                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button type='button' onClick={() => handleAddStudent(this)}>Salvar</Button>
                  </Col>
                </FormGroup>                
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default FormPage;
 