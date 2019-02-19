import React, { Component } from 'react';
import axios from 'axios';

const API_PATH = 'http://localhost:3000/#/my-portfolio-react/api/contact/index.php';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
  }

handleFormSubmit = e => {
  e.preventDefault();
  axios({
    method: 'post',
    url: `${API_PATH}`,
    headers: { 'content-type': 'application/json' },
    data: this.state
  })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
      console.log(this.state);
    })
    .catch(error => this.setState({ error: error.message }));
};

  render() {
    return (
      <section className='container-fluid text-center contact-body'>
          <div className='container hori-centered contact-grid'>
            <div className='row'>
              <div className='col-sm-8 text-left'>
                  <h1 className='text-left'>Contact</h1>

                    <div className='App'>
                        <div>
                          <form action='/action_page.php'>
                            <div className='form-row'>
                              <label className='form-label'>First Name</label>
                              <input type='text' id='fname'name='firstname' placeholder='Your name..'
                                value={this.state.fname}
                                onChange={ e => this.setState({ fname: e.target.value })}
                              />
                            </div>

                            <div className='form-row'>
                              <label className='form-label'>Last Name</label>
                              <input type='text' id='lname' name='lastname' placeholder='Your last name..'
                                value={this.state.lname}
                                onChange={ e => this.setState({ lname: e.target.value })}
                              />
                            </div>

                            <div className='form-row'>
                              <label className='form-label'>Email</label>
                              <input type='email' id='email' name='email' placeholder='Your email'
                                value={this.state.email}
                                onChange={ e => this.setState({ email: e.target.value })}
                              />
                            </div>

                            <div className='form-row'>
                              <label className='form-label'>Message</label>
                              <textarea id='subject' name='message' placeholder='Write something..'
                                value={this.state.message}
                                onChange={ e => this.setState({ message: e.target.value })}
                              ></textarea>
                            </div>

                            <div className='form-row form-row-buttons'>
                              <input type='submit' value='Submit'
                                onClick={ e => this.handleFormSubmit(e) } value="Submit"
                              />
                            </div>

                            <div>
                              {this.state.mailSent &&
                                <div>Thank you for contcting us.</div>
                              }
                            </div>
                          </form>
                        </div>
                    </div>
              </div>
              <div className='col-sm-4 text-left'>
                <h1 className='text-left'>Let's talk!</h1>

                <p>You have front-end projects, great! I am excited to work with you. Please send me an email and tell me about the project detail. I usually reply email within 1 to 2 days.</p>
              </div>
            </div>
         </div>
      </section>
    )
  }
}
export default Contact;
