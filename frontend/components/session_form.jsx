import React from 'react';

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

  render(){
    const formType = this.props.formType;
    let text;
    let message;
    let signup;

     if (formType === "signup") {
       text = "Sign Up";
       message = "Join Channel.";
     } else {
       text = "Log In";
       message = "Welcome Back.";
     }

    return (
      <section>
        <h3>{message}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type='text'
              onChange={this.handleChange('username')}
              value={this.state.username} />
          </label>

          <label>
            <input
              type='text'
              onChange={this.handleChange('password')}
              value={this.state.password} />
          </label>

          <button>{text}</button>
        </form>
      </section>
    );
  }
}
