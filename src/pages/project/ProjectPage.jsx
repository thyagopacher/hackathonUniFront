import React from 'react';

import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom'
import projects from "./projectsData";
import { FaPlus } from "react-icons/fa";
import Page from 'components/Page';

/** retorna a listagem dos cards para projetos */
const cardProject = () => {
  return projects.map((project, key) => {
    return (
      /** atributo key é essencial para demonstrar ao react que são itens distintos */
      <Col key={key} md={3}>
        <Card>
          <CardImg top width="100%" src={project.image} alt="Imagem projeto" />
          <CardBody>
            <CardTitle tag="h5">{project.title}</CardTitle>
            {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
            <CardText>{project.description}</CardText>
            <Col className="text-center">
              <Link to="/project/{project.id}">
                <Button
                  title="Clique para ver mais detalhes"
                >
                  <FaPlus />
                  Veja mais
                </Button>
              </Link>

            </Col>
          </CardBody>
        </Card>
      </Col>
    );
  })
};

const ProjectPage = () => {
  return (
    <Page
      title="Projetos"
      breadcrumbs={[{ name: 'Ver outros', active: true }]}
    >
      <Row>
        {cardProject()}
      </Row>

    </Page>
  );
};

export default ProjectPage;
