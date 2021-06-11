import logo200Image from 'assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import studentService from '../services/student';

class AuthForm extends React.Component {

  login = {
    email: '',
    senha: ''
  };

  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }

  setaValor = (name, value) => {
    this.login[name] = value;
  }

  changeAuthState = authState => event => {
    event.preventDefault();

    this.props.onChangeAuthState(authState);
  };

  handleSubmit = event => {
    /**
     * esta realizando login no sistema
     */
    if (this.isLogin) {
      studentService.login(this.login).then(response => {
        if (response.status) {
          //esta logado
          localStorage.setItem('isLoggedIn', 'S');
          localStorage.setItem('returnLogin', JSON.stringify(response));

          //redireciona para home
          window.location.href = '/';
        }
      }).catch(error => {
        console.error('Erro causado por:' + error);
      });
    }

    /**
     * método para se registrar
     */
    if (this.isSignup) {
      studentService.saveStudent(this.login).then(response => {
        if (response.status) {
          //esta inscrito
          localStorage.setItem('isRegistered', 'S');

          //redireciona para login
          window.location.href = '/login';
        }
      }).catch(error => {
        console.error('Erro causado por:' + error);
      });
    }

    event.preventDefault();
  };

  renderButtonText() {
    const { buttonText } = this.props;

    if (!buttonText && this.isLogin) {
      return 'Login';
    }

    if (!buttonText && this.isSignup) {
      return 'Inscrever';
    }

    return buttonText;
  }

  render() {
    const {
      showLogo,
      usernameLabel,
      usernameInputProps,
      passwordLabel,
      passwordInputProps,
      confirmPasswordLabel,
      confirmPasswordInputProps,
      children,
      onLogoClick,
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        {showLogo && (
          <div className="text-center pb-4">
            <img
              src={logo200Image}
              className="rounded"
              style={{ width: 60, height: 60, cursor: 'pointer' }}
              alt="logo"
              onClick={onLogoClick}
            />
          </div>
        )}
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input {...usernameInputProps}
            onChange={event => this.setaValor(event.target.name, event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input {...passwordInputProps}
            onChange={event => this.setaValor(event.target.name, event.target.value)}
          />
        </FormGroup>
        {this.isSignup && (
          <FormGroup>
            <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
            <Input {...confirmPasswordInputProps}
              onChange={event => this.setaValor(event.target.name, event.target.value)}
            />
          </FormGroup>
        )}
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            {this.isSignup ? 'Aceito termos e politicas' : 'Lembrar de mim'}
          </Label>
        </FormGroup>
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSubmit}>
          {this.renderButtonText()}
        </Button>

        <div className="text-center pt-1">
          <h6>ou</h6>
          <h6>
            {this.isSignup ? (
              <a href="#login" onClick={this.changeAuthState(STATE_LOGIN)}>
                Login
              </a>
            ) : (
              <a href="#signup" onClick={this.changeAuthState(STATE_SIGNUP)}>
                Inscrever
              </a>
            )}
          </h6>
        </div>

        {children}
      </Form>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  usernameLabel: 'Email',
  usernameInputProps: {
    type: 'email',
    placeholder: 'alguem@email.com',
    name: 'email'
  },
  passwordLabel: 'Senha',
  passwordInputProps: {
    type: 'password',
    placeholder: 'Sua senha',
    name: 'senha'
  },
  confirmPasswordLabel: 'Confirme Senha',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'Confirme sua senha',
    name: 'confirmar_senha'
  },
  onLogoClick: () => { },
};

export default AuthForm;
