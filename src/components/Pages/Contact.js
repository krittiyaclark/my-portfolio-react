import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section className='container-fluid text-center contact-body'>
          <div className='container hori-centered contact-grid'>
            <div className='row'>
              <div className='col-sm'>
                  <h1>Krittiya Clark</h1>

                  <img src='img/KRITTIYA-CLARK.jpg' alt='Avatar' className='avatar'/>
                  <h2>I would love to talk to you.</h2>
                  <br />
                  <p>You have front-end projects, great! I am excited to work with you. Please send me an email and tell me about the project detail. I usually reply email within 1 to 2 days.</p>
              </div>
              <div className='col-sm'>
                <h1>Contact</h1>
                <hr/>

                  <div className='icon-list'>
                    <ul>
                      <li><i className='fas fa-envelope'></i>solution.stack99@gmail.com</li>
                      <li><i className='fab fa-skype'></i>Skype</li>
                    </ul>
                  </div>



              </div>
            </div>
         </div>
      </section>
    )
  }
}
export default Contact;
