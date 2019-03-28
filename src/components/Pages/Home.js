import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <main id="main" className="container-fluid text-center filter">
        <div className="full-screen">
          <div className="row">
            <div className="col-sm">
              <div className="banner-text">
                <h1>Hello, I'm Krittiya!</h1>
                <p className="text-normal">Front-End Web Developer</p>

                <hr/>

                <p>HTML5 | CSS3 | Bootstrap | SASS | JavaScript | React | React Native</p>

                  <div className="social-links">

                    <a href="https://www.linkedin.com/in/krittiya-clark-front-end/" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-linkedin" aria-hidden="true" />
                    </a>

                    <a href="https://github.com/krittiyaclark/" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-github-alt" aria-hidden="true" />
                    </a>

                    <a href="mailto:krittiyaclark@gmail.com">
                      <i className="fas fa-envelope"></i>
                    </a>

                    <a href="https://twitter.com/themeyourweb" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-twitter-square"></i>
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
