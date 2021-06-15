import React, { Component } from 'react';

import {
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    CardDeck,
    CardSubtitle,
    Button,
    CardHeader
} from 'reactstrap';

import {
    avatarsData
} from 'demos/dashboardPage';


import projectService from '../../services/project';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import Page from 'components/Page';



export default class ProjectPageItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            project: [],
            isLoading: true
        }

        const id = props.match.params.id;

        this.loadProject(id);


    }

    loadProject(id) {
        projectService.getProject(id).then(response => {
            const projetos = response.data;
            this.setState({
                project: projetos,
                isLoading: false,
            });
        }).catch(error => {
            console.error(error);
        });
    }


    render() {
        const project = { ...this.state.project[0] };
        console.log(project);
        const isLoading = this.state.isLoading;

        return (
            <Page
                title="Projetos"
                breadcrumbs={[{ name: 'Projetos', active: true }]}
            >
                <Row>
                    <Col md="9" sm="9" xs="9">
                        <Card>
                            <CardHeader>{project.proj_nome}</CardHeader>
                            <CardText>
                                <CardBody>
                                    <p>
                                        {project.proj_desc}
                                    </p>
                                </CardBody>
                            </CardText>
                        </Card>
                    </Col>
                    <Col md="3" sm="3" xs="3">
                        <Card>
                            <CardImg top width="100%" src={project.proj_imag} alt="Card image cap" />
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                        <h2>Participantes</h2>
                        <CardDeck>
                            <Card>
                                <HorizontalAvatarList
                                    avatars={avatarsData}
                                    avatarProps={{ size: 95 }}
                                />
                            </Card>

                        </CardDeck>
                    </Col>
                </Row>

            </Page>
        )
    }
}


