import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <main className="container-fluid text-center">
        <div className="container hori-centered">
          <div className="row">
            <div className="col-sm">
              <div className="banner-text">
                <h1>Hello, I'm Krittiya!</h1>
                <p>Front-End Web Developer</p>

                <hr/>

                <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                  <div className="social-links">

                    {/* LinkedIn */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-linkedin" aria-hidden="true" />
                    </a>

                    {/* Github */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-github-alt" aria-hidden="true" />
                    </a>

                    {/* Freecodecamp */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-free-code-camp" aria-hidden="true" />
                    </a>

                  </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    )
  }
}
export default Home;
