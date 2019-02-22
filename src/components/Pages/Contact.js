import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

  handleSubmit(e){
          e.preventDefault();
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;
          axios({
              method: "POST",
              url:"http://localhost:3000/send",
              data: {
                  name: name,
                  email: email,
                  messsage: message
              }
          }).then((response)=>{
              if (response.data.msg === 'success'){
                  alert("Message Sent.");
                  this.resetForm()
              }else if(response.data.msg === 'fail'){
                  alert("Message failed to send.")
              }
          })
      }

      resetForm(){
          document.getElementById('contact-form').reset();
      }


  render() {
    return (
      <section className='container-fluid text-center contact-body'>
          <div className='container hori-centered contact-grid'>
            <div className='row'>
              <div className='col-sm-8 text-left'>
                  <h1 className='text-left'>Contact</h1>

                    <div className='App'>
                        <div>
                          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                              <div className="form-group">
                                  <label htmlFor="name">Name</label>
                                  <input type="text" className="form-control" id="name" />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">Email address</label>
                                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="message">Message</label>
                                  <textarea className="form-control" rows="5" id="message"></textarea>
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
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
