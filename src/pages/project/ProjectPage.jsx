import React, { Component } from 'react';

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
import { Link } from 'react-router-dom';

import projects from "./projectsData";
import ProjectCardItem from "./ProjectCardItem";
import projectService from '../../services/project';
import { FaPlus } from "react-icons/fa";
import Page from 'components/Page';
import axios from 'axios'

export default class ProjectPage extends Component {

  constructor(props) {
    super(props)
    this.state = { projects: [], 
      isLoading: true}
    this.loadProjects();

  }

  loadProjects() {
    projectService.getProject().then(response => {
      const projetos = response.data;
      this.setState({
        projects: projetos,
        isLoading: false,
      });
    }).catch(error => {
      console.error(error);
    });
  }


  render() {
    const projects = this.state.projects;
    const isLoading = this.state.isLoading;

    return (
      <Page
        title="Projetos"
        breadcrumbs={[{ name: 'Ver outros', active: true }]}
      >
        <Row>

          {
            !isLoading ? projects.filter(x => x.proj_imag != "NULL" && x.proj_stat == "1").slice(0, 5).map(
              ({ proj_imag, proj_nome, proj_desc, proj_codi }, indice) => (
                <ProjectCardItem
                  key={indice}
                  image={proj_imag}
                  title={proj_nome}
                  description={proj_desc}
                  id={proj_codi}
                />
              ),
            ) : <h3>Carregando...</h3>
          }

        </Row>

      </Page>
    )
  }
}
