import Page from 'components/Page';
import studentService from '../services/student'
import { FaGithub, FaPhoneSquare, FaImage } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

const StudentPage = () => {

  const [student, setStudent] = useState([]);

  useEffect(() => {
    studentService.getStudent().then(response => {
      setStudent(response.data);
    });
  }, []);

  async function handleAddStudent(student) {

    const response = studentService.addStudent(student);
    const studentRes = response.data;

    setStudent([...student, studentRes]);
  }

  async function handleRemoveStudent(id) {

    const response = studentService.deleteStudent(id);;
    setStudent(student.filter(student => student.id !== id));
  }

  return (
    <Page title="Meu Perfil" breadcrumbs={[{ name: 'Meu Perfil', active: true }]}>
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
                    value={student.name}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Digite e-mail"
                    value={student.email}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Senha</Label>
                  <Input
                    type="password"
                    name="Senha"
                    placeholder="Digite senha"
                    value={student.senha}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>
                    Perfil GitHub <FaGithub />
                  </Label>
                  <Input
                    type="url"
                    name="perfil_github"
                    id="perfil_github"
                    placeholder="url Perfil GitHub"
                    value={student.perfil_github}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleNumber">
                    Celular <FaPhoneSquare />
                  </Label>
                  <Input
                    type="text"
                    name="celular"
                    id="celular"
                    placeholder="Digite num. celular"
                    value={student.celular}
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
                  <Input type="textarea" name="text" placeholder="Digite sua biográfia" spellCheck value={student.biografia} />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleFile">
                    Foto <FaImage />
                  </Label>
                  <Input type="file" name="file" />
                  <FormText color="muted">
                    Imagem que irá aparecer para identificar seu perfil.
                  </FormText>
                </FormGroup>

                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="notificacao_email" name="notificacao_email" /> Desejo receber notificações por e-mail
                  </Label>
                </FormGroup>

                <FormGroup check row>
                  <Col className="text-center">
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

export default StudentPage;
