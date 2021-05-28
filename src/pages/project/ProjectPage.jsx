import React from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

import project from "./projectsData";

import Page from 'components/Page';

const cardProject = () => {
  return project.map((project, i) => {
    return (
      <Col md={2}>
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
    );
  })
};

const ProjectPage = () => {
  return (
    <Page
      title="Project"
      breadcrumbs={[{ name: 'See others', active: true }]}
    >
      <Row>
          {cardProject()}
      </Row>

    </Page>
  );
};

export default ProjectPage;
