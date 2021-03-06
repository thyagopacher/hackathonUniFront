import { AnnouncementCard, TodosCard } from 'components/Card';
import projectService from '../services/project';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';

import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget } from 'components/Widget';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import {
  avatarsData,
  chartjs,
  productsData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  MdBubbleChart,
  MdInsertChart,
  MdPersonPin,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { getColor } from 'utils/colors';
import './App.css';

const today = new Date();
const thisWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);

class DashboardPage extends React.Component {

  alunoLogado = {};

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      projetosSugeridos: [],
      isLoading: true,
      isLoadingSugeridos: true
    };
    this.loadProjects();

    /** retorna projetos sugeridos */
    this.alunoLogado = JSON.parse(localStorage.getItem('returnLogin')).data[0].aluno;
    this.loadProjetosSugeridos(this.alunoLogado.alun_codi);
  }

  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll

    window.scrollTo(0, 0);
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

  loadProjetosSugeridos(idAluno) {
    projectService.getSugestao(idAluno).then(response => {

      const projetos = response.data.projetos;
      this.setState({
        projetosSugeridos: projetos,
        isLoadingSugeridos: false,
        isLoading: this.state.isLoading,
        projects: this.state.projects
      });

    }).catch(error => {
      console.error(error);
    });
  }

  render() {

    const isLoading = this.state.isLoading;
    const isLoadingSugeridos = this.state.isLoadingSugeridos;
    const projetosSugeridos = this.state.projetosSugeridos;
    const projects = this.state.projects;

    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');
    console.log(projects);
    return (

      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Total Engajamento"
              subtitle="Este m??s"
              number="9.8k"
              color="secondary"
              progress={{
                value: 75,
                label: '??ltimo m??s',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Visitantes M??s"
              subtitle="Este m??s"
              number="5.400"
              color="secondary"
              progress={{
                value: 45,
                label: '??ltimo m??s',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Usu??rios em seus projetos"
              subtitle="Este m??s"
              number="3,400"
              color="secondary"
              progress={{
                value: 90,
                label: '??ltimo m??s',
              }}
            />
          </Col>

          {/* <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Bounce Rate"
              subtitle="Este m??s"
              number="38%"
              color="secondary"
              progress={{
                value: 60,
                label: '??ltimo m??s',
              }}
            />
          </Col> */}
        </Row>

        <Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Projetos Sugeridos{' '}
                <small className="text-muted text-capitalize">Este ano</small>
              </CardHeader>
              <CardBody>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Total Gasto (Seus Projetos)</CardHeader>
              <CardBody>
                <Bar data={chartjs.bar.data} options={chartjs.bar.options} />
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>
                  <MdInsertChart size={25} color={primaryColor} /> Pre??o para venda{' '}
                  <Badge color="secondary">R$ 3000,00</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdBubbleChart size={25} color={primaryColor} /> Gest??o de custos <Badge color="secondary">R$ 1200,00</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdShowChart size={25} color={primaryColor} /> Financiamento de custo {' '}
                  <Badge color="secondary">R$ 800,00</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdPieChart size={25} color={primaryColor} /> Outras demandas
                  costs <Badge color="secondary">R$ 2400,00</Badge>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>

        <CardGroup style={{ marginBottom: '1rem' }}>
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdThumbUp}
            title="50+ Likes"
            subtitle="Pessoas que voc?? curtiu"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdRateReview}
            title="10+ Coment??rios"
            subtitle="Coment??rios Novos"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdShare}
            title="30+ Compartilhamentos"
            subtitle="Compartilhamentos Novos"
          />
        </CardGroup>

        <Row>
          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>Novos Projetos</CardHeader>
              <CardBody>
                {
                  !isLoading ? projects.filter(x => x.proj_imag != "NULL" && x.proj_stat == "1").slice(0, 5).map(
                    ({ proj_imag, proj_nome, proj_desc, proj_codi }, indice) => (
                      <ProductMedia
                        key={indice}
                        image={proj_imag}
                        title={proj_nome}
                        description={proj_desc}
                        id={proj_codi}
                      />
                    ),
                  ) : <h3>Carregando...</h3>
                }
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>Projetos Sugeridos</CardHeader>
              <CardBody>
                {
                  !isLoadingSugeridos ? projetosSugeridos.filter(x => x.proj_imag != "NULL" && x.proj_stat == "1").slice(0, 5).map(
                    ({ proj_imag, proj_nome, proj_desc, proj_codi }, indice) => (
                      <ProductMedia
                        key={indice}
                        image={proj_imag}
                        title={proj_nome}
                        description={proj_desc}
                        id={proj_codi}
                      />
                    ),
                  ) : <h3>Carregando...</h3>
                }
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>Usu??rios em seus projetos</CardHeader>
              <CardBody>
                <UserProgressTable
                  headers={[
                    <MdPersonPin size={25} />,
                    'Nome',
                    'Ult. Contato',
                    'Participa????o',
                    '%',
                  ]}
                  usersData={userProgressTableData}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card>
              <Line
                data={getStackLineChart({
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                  ],
                  data: [0, 13000, 5000, 24000, 16000, 25000, 10000],
                })}
                options={stackLineChartOptions}
              />
              <CardBody
                className="text-primary"
                style={{ position: 'absolute' }}
              >
                <CardTitle>
                  <MdInsertChart /> Sua participa????o
                </CardTitle>
              </CardBody>
            </Card>
          </Col>

          <Col lg={4} md={4} sm={12} xs={12}>
            <Card>
              <Line
                data={getStackLineChart({
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                  ],
                  data: [10000, 15000, 5000, 10000, 5000, 10000, 10000],
                })}
                options={stackLineChartOptions}
              />
              <CardBody
                className="text-primary"
                style={{ position: 'absolute' }}
              >
                <CardTitle>
                  <MdInsertChart /> Projetos sugeridos
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card>
              <Line
                data={getStackLineChart({
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                  ],
                  data: [0, 13000, 5000, 24000, 16000, 25000, 10000].reverse(),
                })}
                options={stackLineChartOptions}
              />
              <CardBody
                className="text-primary"
                style={{ position: 'absolute', right: 0 }}
              >
                <CardTitle>
                  <MdInsertChart /> Participa????o em seus projetos
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* <Col lg="4" md="12" sm="12" xs="12">
            <InfiniteCalendar
              selected={today}
              minDate={??ltimoWeek}
              width="100%"
              theme={{
                accentColor: primaryColor,
                floatingNav: {
                  background: secondaryColor,
                  chevron: primaryColor,
                  color: '#FFF',
                },
                headerColor: primaryColor,
                selectionColor: secondaryColor,
                textColor: {
                  active: '#FFF',
                  default: '#333',
                },
                todayColor: secondaryColor,
                weekdayColor: primaryColor,
              }}
            />
          </Col> */}

          <Col lg="12" md="12" sm="12" xs="12">
            <Card inverse className="bg-gradient-primary">
              <CardHeader className="bg-gradient-primary">
                Mapa de participa????o
              </CardHeader>
              <CardBody>
                <MapWithBubbles />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <CardDeck style={{ marginBottom: '1rem' }}>
          <Card body style={{ overflowX: 'auto', 'paddingBottom': '15px', 'height': 'fit-content', 'paddingTop': 'inherit' }}>
            <HorizontalAvatarList
              avatars={avatarsData}
              avatarProps={{ size: 50 }}
            />
          </Card>

          <Card body style={{ overflowX: 'auto', 'paddingBottom': '15px', 'height': 'fit-content', 'paddingTop': 'inherit' }}>
            <HorizontalAvatarList
              avatars={avatarsData}
              avatarProps={{ size: 50 }}
              reversed
            />
          </Card>
        </CardDeck>

        <Row>


          {/* <Col lg="4" md="12" sm="12" xs="12">
            <TodosCard todos={todosData} />
          </Col> */}
        </Row>
      </Page>
    );
  }
}
export default DashboardPage;
