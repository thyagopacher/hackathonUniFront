import bg11Image from 'assets/img/bg/background_1920-11.jpg';
import bg18Image from 'assets/img/bg/background_1920-18.jpg';
import bg1Image from 'assets/img/bg/background_640-1.jpg';
import bg3Image from 'assets/img/bg/background_640-3.jpg';
import user1Image from 'assets/img/users/100_1.jpg';
import { UserCard } from 'components/Card';
import Page from 'components/Page';
import { bgCards, gradientCards, overlayCards } from 'demos/cardPage';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

const CardPage = () => {
  return (
    <Page title="Meus Projetos" breadcrumbs={[{ name: 'Meus Projetos', active: true }]}>
      <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card className="flex-row">
            <CardImg
              className="card-img-left"
              src={bg1Image}
              style={{ width: 'auto', height: 150 }}
            />
            <CardBody>
              <CardTitle>Aprender brincando</CardTitle>
              <CardText>
                Projeto para unir ideias de como fazer as crianças aprender brincando.
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card className="flex-row">
            <CardBody>
              <CardTitle>Reformar um carro</CardTitle>
              <CardText>Arrumar um carro totalmente</CardText>
            </CardBody>
            <CardImg
              className="card-img-right"
              src={bg3Image}
              style={{ width: 'auto', height: 150 }}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card>
            <CardImg top src={bg11Image} />
            <CardBody>
              <CardTitle>Capturar sonhos</CardTitle>
              <CardText>
                Captura o sonho e gravar para poder assistir posteriormente
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card>
            <CardImg top src={bg18Image} />
            <CardBody>
              <CardTitle>Pintar minha casa</CardTitle>
              <CardText>
                Já comprei tinta mais preciso
              </CardText>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>Ajuda com Grafiato</ListGroupItem>
              <ListGroupItem>Criar uma paisagem na parede</ListGroupItem>
            </ListGroup>
            <CardBody>
              <CardLink tag="a" href="#">
                Detalhes
              </CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </Page>
  );
};

export default CardPage;
