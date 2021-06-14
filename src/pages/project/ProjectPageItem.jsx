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
import { useParams } from 'react-router-dom'

import projects from "./projectsData";
import { FaPlus } from "react-icons/fa";
import Page from 'components/Page';


const ProjectPageItem = props => {
    const id = props.match.params.id;
    const project = projects.find(x => x.id == id);

    return (
        <Page
            title="Projetos"
            breadcrumbs={[{ name: 'Projetos', active: true }]}
        >
            <Row>
                <Col md="9" sm="9" xs="9">
                    <Card>
                        <CardHeader>{project.title}</CardHeader>
                        <CardText>
                            <CardBody>
                                <h4>Criado a dois meses atrás</h4>
                                <p>
                                    {project.description}
                                </p>
                            </CardBody>
                        </CardText>
                    </Card>
                </Col>
                <Col md="3" sm="3" xs="3">
                    <Card>
                        <CardImg top width="100%" src={project.image} alt="Card image cap" />
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
