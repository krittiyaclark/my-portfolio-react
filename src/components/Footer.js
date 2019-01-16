import React from 'react';

function Footer() {
  const copyrightLogo = '\u00a9';

  return (
    <footer className='contact text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <h1>Let's Get In Touch!</h1>

            <hr />

            <p>Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
            <p><i className='fas fa-envelope-square'></i></p>
            </div>
          </div>

        <div className='row'>
          <div className='col-sm'>
            <p>Copyright {copyrightLogo} Krittiya Clark {(new Date().getFullYear())}</p>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer;
