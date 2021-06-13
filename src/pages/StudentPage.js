import Page from 'components/Page';
import studentService from '../services/student';
import { FaGithub, FaPhoneSquare, FaImage } from 'react-icons/fa';
import React from 'react';
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
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const StudentPage = () => {
  const usuarioLogado = JSON.parse(localStorage.getItem('returnLogin')).data[0].aluno;
  const MySwal = withReactContent(Swal);
  const student = {};
  student.nome = usuarioLogado.nome;
  student.email = usuarioLogado.email;

  async function handleSaveStudent() {
    studentService.saveStudent(student).then(response => {
      if (response.status) {
        MySwal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Informações salvas com sucesso.',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }).catch(error => {
      MySwal.fire({
        position: 'top-end',
        icon: error,
        title: 'Erro causado por: ' + error,
        showConfirmButton: false,
        timer: 1500
      });
    });;
  }

  function setaValor(name, value) {
    student[name] = value;
  }

  async function handleRemoveStudent(id) {
    const response = studentService.deleteStudent(id);
    console.log(response);
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
                    value={student.nome}
                    onChange={event => setaValor(event.target.name, event.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Digite e-mail"
                    value={student.email}
                    onChange={event => setaValor(event.target.name, event.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Senha</Label>
                  <Input
                    type="password"
                    name="Senha"
                    placeholder="Digite senha"
                    value={student.senha}
                    onChange={event => setaValor(event.target.name, event.target.value)}
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
                    onChange={event => setaValor(event.target.name, event.target.value)}
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
                    onChange={event => setaValor(event.target.name, event.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleSelectMulti">Interesses</Label>
                  <Input
                    type="select"
                    name="interesses"
                    id="interesses"
                    multiple
                    onChange={event => setaValor(event.target.name, event.target.value)}
                  >
                    <option>Interesse - 1</option>
                    <option>Interesse - 2</option>
                    <option>Interesse - 3</option>
                    <option>Interesse - 4</option>
                    <option>Interesse - 5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Biográfia</Label>
                  <Input
                    type="textarea"
                    name="biografia"
                    placeholder="Digite sua biográfia"
                    spellCheck
                    value={student.biografia}
                    onChange={event => setaValor(event.target.name, event.target.value)}
                  />
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
                    <Button type='button' onClick={() => handleSaveStudent(this)}>Salvar</Button>
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
