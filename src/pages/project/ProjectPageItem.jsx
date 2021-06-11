import React from 'react';

import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
  CardHeader
} from 'reactstrap';

import projects from "./projectsData";
import { FaPlus } from "react-icons/fa";
import Page from 'components/Page';


const ProjectPageItem = () => {
  return (
    <Page
      title="Projetos"
      breadcrumbs={[{ name: 'Projetos', active: true }]}
    >
      <Row>
        <Col md="9" sm="9" xs="9">
          <Card>
            <CardHeader>Titulo do Projeto</CardHeader>
            <CardText>
            <CardBody>
            <h4>Criado a dois meses atrás</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie nisl ex, quis elementum lacus bibendum non.
            Pellentesque egestas eleifend diam ac viverra. Proin ullamcorper malesuada eleifend. Sed ornare pellentesque convallis.
            Suspendisse est libero, congue sit amet lorem eu, posuere congue felis. Nullam efficitur sem libero, eget placerat
            arcu pharetra vitae. Vivamus faucibus urna odio, eu eleifend augue facilisis in. Ut non mauris tempus eros suscipit semper.
            Praesent vulputate luctus nunc non tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec augue purus.
            Nam pretium, metus vel tristique auctor, erat eros auctor augue, sit amet ornare nisi enim a turpis.
            Proin consequat felis a odio maximus tincidunt. Nunc bibendum mi vitae augue tincidunt pharetra.
              Vestibulum et lacinia velit, quis pretium ligula. Sed et ligula porta, feugiat risus et, imperdiet leo.</p>
              </CardBody>
            </CardText>
          </Card>
        </Col>
        <Col md="3" sm="3" xs="3">
          <Card>
            <CardImg top width="100%" src="https://i1.wp.com/arteref.com/wp-content/uploads/2018/04/rick-morty.jpg" alt="Card image cap" />
          </Card>
        </Col>
      </Row>
      <Row>
        <h2>Participantes</h2>
      </Row>
      <Row>
        <Col md="3" sm="3" xs="3">
          <Card>
            <CardImg top width="100%" src="https://i1.wp.com/arteref.com/wp-content/uploads/2018/04/rick-morty.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </Page>
  );
};

export default ProjectPageItem;
