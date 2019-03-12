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
                          <form action="https://formspree.io/krittiyaclark@gmail.com" method="POST">
                            <input type="text" name="name" placeholder="Name" required></input>
                            <input type="email" name="_replyto" placeholder="Email" required></input>
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Telephone number" required></input>
                            <textarea name="message" placeholder="Message" required></textarea>
                            <input type="submit" value="Send" id="button-submit" required></input>
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
