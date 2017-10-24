import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(field){
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <p>Are you new to Channel? <Link to="/signup">Sign Up</Link></p>;
    } else {
      return <p>Already have an account? <Link to="/login">Log In</Link></p>;
    }
  }

  renderErrors() {
    const errors = this.props.errors.map((error, idx) => {
      return (<li key={idx}>{error}</li>);
    });

    return(
      <ul>
        {errors}
      </ul>
    );
  }

  render(){
    const formType = this.props.formType;
    let text;
    let message;
    let signup;

     if (formType === "signup") {
       text = "Sign Up";
       message = "Join Channel.";
       signup = (<input type='text'
       onChange={this.handleChange('name')}
       value={this.state.name}/>);
     } else {
       text = " Log In";
       message = "Welcome Back.";
     }

    return (
      <section>
        <h3>{message}</h3>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type='text'
              onChange={this.handleChange('username')}
              value={this.state.username} />
          </label>
          <br/>
          <label>Password
            <input
              type='text'
              onChange={this.handleChange('password')}
              value={this.state.password} />
          </label>
          <br/>
          <button>{text}</button>
        </form>

        {this.navLink()}
      </section>
    );
  }
}

//need to conditionally render link
//need to add new input when signing up

export default withRouter(SessionForm);
