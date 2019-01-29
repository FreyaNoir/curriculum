import React, { Component } from "react";

import contact from "../img/contact.jpg";

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="columns is-vcentered">
        <div className="column is-5">
          <figure className="contactpic">
            <img src={contact} alt={"Contact"} />
          </figure>
        </div>
        <div className="column is-6 is-offset-1">
          <div className="column">
            <h3 class="subtitle is-3">Personal contacts:</h3>
          </div>
          <a href="tel:+358403629123">Call me </a> |
          <a href="mailto:edit.orosz.office@gmail.com"> E-mail me</a>
          <br />
          <br />
          <h4 class="subtitle is-4">Find me on social media:</h4>
          <br />
          <a href="https://www.linkedin.com/in/the-mighty-dev-apprentice/">
            LinkedIn
          </a>
          <br />
          <a href="https://github.com/FreyaNoir?tab=repositories">GitHub</a>
        </div>
      </div>
    );
  }
}

export default ContactMe;
