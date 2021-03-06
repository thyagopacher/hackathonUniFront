import Avatar from 'components/Avatar';
import { UserCard } from 'components/Card';
import Notifications from 'components/Notifications';
import SearchInput from 'components/SearchInput';
import { notificationsData } from 'demos/header';
import withBadge from 'hocs/withBadge';
import React from 'react';
import {
  MdClearAll,
  MdExitToApp,
  MdHelp,
  MdInsertChart,
  MdMessage,
  MdNotificationsActive,
  MdNotificationsNone,
  MdPersonPin,
  MdSettingsApplications,
} from 'react-icons/md';
import {
  Button,
  ListGroup,
  ListGroupItem,
  // NavbarToggler,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
} from 'reactstrap';
import bn from 'utils/bemnames';

const bem = bn.create('header');

const MdNotificationsActiveWithBadge = withBadge({
  size: 'md',
  color: 'primary',
  style: {
    top: -10,
    right: -10,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: <small>5</small>,
})(MdNotificationsActive);

class Header extends React.Component {

  lastUserAction = '';
  usuarioLogado = {};
  state = {
    isOpenNotificationPopover: false,
    isNotificationConfirmed: false,
    isOpenUserCardPopover: false,
  };

  constructor(props) {
    super(props);
    let returnLogin = localStorage.getItem('returnLogin');
    if (returnLogin != undefined && returnLogin != null && returnLogin != "") {
      this.usuarioLogado = JSON.parse(localStorage.getItem('returnLogin')).data[0].aluno;
    }

    // Não chame this.setState() aqui!
    if (window.performance) {
      if (performance.navigation.type === 1) {
        let now = new Date();
        window.localStorage.setItem('last_user_action', now.getTime());
        this.lastUserAction = 'Última ação: ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " Hs"
      }
    }
  }



  toggleNotificationPopover = () => {
    this.setState({
      isOpenNotificationPopover: !this.state.isOpenNotificationPopover,
    });

    if (!this.state.isNotificationConfirmed) {
      this.setState({ isNotificationConfirmed: true });
    }
  };

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  };

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  exitSystem = () => {
    localStorage.clear();
    window.location.href = '/login';
  }

  accessMenu = (url) => {
    window.location.href = url;
  }

  render() {
    const { isNotificationConfirmed } = this.state;

    return (
      <Navbar light expand className={bem.b('bg-white')}>
        <Nav navbar className="mr-2">
          <Button outline onClick={this.handleSidebarControlButton}>
            <MdClearAll size={25} />
          </Button>
        </Nav>
        <Nav navbar>
          <SearchInput />
        </Nav>

        <Nav navbar className={bem.e('nav-right')}>
          <NavItem className="d-inline-flex">
            <NavLink id="Popover1" className="position-relative">
              {isNotificationConfirmed ? (
                <MdNotificationsNone
                  size={25}
                  className="text-secondary can-click"
                  onClick={this.toggleNotificationPopover}
                />
              ) : (
                <MdNotificationsActiveWithBadge
                  size={25}
                  className="text-secondary can-click animated swing infinite"
                  onClick={this.toggleNotificationPopover}
                />
              )}
            </NavLink>
            <Popover
              placement="bottom"
              isOpen={this.state.isOpenNotificationPopover}
              toggle={this.toggleNotificationPopover}
              target="Popover1"
            >
              <PopoverBody>
                <Notifications notificationsData={notificationsData} />
              </PopoverBody>
            </Popover>
          </NavItem>

          <NavItem>
            <NavLink id="Popover2">
              <Avatar
                onClick={this.toggleUserCardPopover}
                className="can-click"
              />
            </NavLink>
            <Popover
              placement="bottom-end"
              isOpen={this.state.isOpenUserCardPopover}
              toggle={this.toggleUserCardPopover}
              target="Popover2"
              className="p-0 border-0"
              style={{ minWidth: 250 }}
            >
              <PopoverBody className="p-0 border-light">
                <UserCard
                  title={this.usuarioLogado.nome}
                  subtitle={this.usuarioLogado.email}
                  text={this.lastUserAction}
                  className="border-light"
                >
                  <ListGroup flush>
                    <ListGroupItem onClick={() => this.accessMenu('students')} tag="button" action className="border-light">
                      <MdPersonPin /> Meu Perfil
                    </ListGroupItem>
                    <ListGroupItem onClick={() => this.accessMenu('stats')} tag="button" action className="border-light">
                      <MdInsertChart /> Stats
                    </ListGroupItem>
                    <ListGroupItem onClick={() => this.accessMenu('mensagens')} tag="button" action className="border-light">
                      <MdMessage /> Mensagens
                    </ListGroupItem>
                    <ListGroupItem onClick={() => this.accessMenu('configs')} tag="button" action className="border-light">
                      <MdSettingsApplications /> Configurações
                    </ListGroupItem>
                    <ListGroupItem onClick={() => this.accessMenu('help')} tag="button" action className="border-light">
                      <MdHelp /> Ajuda
                    </ListGroupItem>
                    <ListGroupItem onClick={() => this.exitSystem()} tag="button" action className="border-light">
                      <MdExitToApp /> Sair
                    </ListGroupItem>
                  </ListGroup>
                </UserCard>
              </PopoverBody>
            </Popover>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
