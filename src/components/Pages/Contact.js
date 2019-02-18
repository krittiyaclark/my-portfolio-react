import React, { Component } from 'react';

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

  render() {
    return (
      <section className='container-fluid text-center contact-body'>
          <div className='container hori-centered contact-grid'>
            <div className='row'>
              <div className='col-sm-6 text-left'>
                  <h1 className='text-left'>Contact</h1>

                    <div className='App'>
                        <div>
                          <form action='/action_page.php'>
                            <div className='form__row'>
                              <label className='form__label'>First Name</label>
                              <input type='text'id='fname'name='firstname'placeholder='Your name..'/>
                            </div>

                            <div className='form__row'>
                              <label className='form__label'>Last Name</label>
                              <input type='text' id='lname' name='lastname' placeholder='Your last name..'/>
                            </div>

                            <div className='form__row'>
                              <label className='form__label'>Email</label>
                              <input type='email' id='email' name='email' placeholder='Your email'/>
                            </div>

                            <div className='form__row'>
                              <label className='form__label'>Message</label>
                              <textarea id='subject' name='message' placeholder='Write something..'></textarea>
                            </div>

                            <div className='form__row form__row--buttons'>
                              <input type='submit' value='Submit'/>
                            </div>

                          </form>
                        </div>
                    </div>
              </div>
              <div className='col-sm-6 text-left'>
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
