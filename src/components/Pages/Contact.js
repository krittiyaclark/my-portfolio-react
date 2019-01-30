import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section className='container-fluid text-center contact-body'>
          <div className='container hori-centered contact-grid'>
            <div className='row'>
              <div className='col-sm-8 text-left'>
                  <h1 className='text-left'>Contact</h1>
                  
                  <p>You have front-end projects, great! I am excited to work with you. Please send me an email and tell me about the project detail. I usually reply email within 1 to 2 days.</p>
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
