import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Resume extends Component {
  state = {
    redirect: false
  }
  setRedirect = (href) => {
    window.location.href = href;
  }

  render() {
    return (
      <>
      {/* Technologies */}
      <div className="Index-page-content">
          <section className="container-fluid">
              <div className="container text-left">
                <div className="row">
                  <div className="col-sm-4">
                      <h2>Technologies</h2>
                  </div>
                  <div className="col-sm-4">
                      <ul>
                        <li>Sass</li>
                        <li>HTML5 / CSS3</li>
                        <li>JavaScript / jQuery</li>
                        <li>React.js</li>
                        <li>React Native</li>
                        <li>CSS Flexbox</li>
                        <li>Foundation / Bootstrap 4</li>
                        <li>Scalable Vector Graphics</li>
                        <li>CMS</li>
                        <li>WordPress</li>
                        <li>UI Widgets</li>
                        <li>Google App Script</li>
                        <li>Git/GitHub</li>
                        <li>Command Line</li>
                      </ul>
                  </div>
                  <div className="col-sm-4">
                  <ul>
                        <li>Velocity</li>
                        <li>Data Formats (JSON, XML)</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>HTML Semantics</li>
                        <li>Gulp</li>
                        <li>Responsive Layout and Design</li>
                        <li>Cross-Browser Compatibility</li>
                        <li>Browser Developer Tools</li>
                        <li>Mobile First Thinking</li>
                        <li>Search Engine Optimization</li>
                        <li>Accessibility</li>
                        <li>User Interface Design</li>
                      </ul>
                  </div>
                </div>
             </div>
          </section>

          {/* Work Experience */}
          <section className="container-fluid Top-padding">
              <div className="container text-left">
                <div className="row">
                  <div className="col-sm-4">
                      <h2>Work Experience</h2>
                  </div>
                  <div className="col-sm-8">
                    <h3>Web Developer/Remote, Contract</h3>
                    <p><strong>Vermont Digger</strong>, February 2019 – Present</p>
                    <ul>
                      <li>Troubleshoot, resolve, build applications, optimization page-speed, create vector graphic SVG, build UI, manipulate and implementation WordPress Web Platform</li>
                      <li>Write Google app scripts to manipulate Mailchimp API</li>
                    </ul>

                      <h3>Web Developer, Contract</h3>
                      <p><strong>Dealer.com/Cox Automotive Group</strong>, August 2018 – December 2018</p>
                      <ul>
                        <li>Troubleshoot, resolved and implemented CMS Web Platform</li>
                        <li>Performed quality assurance to ensure work is performed per specifications and met both functional and aesthetic standards</li>
                        <li>Average closed completed 130 tickets per month</li>
                      </ul>

                      <h3>Facilitator/Remote</h3>
                      <p><strong>Learn-To-Code</strong>, April 2018 – October 2018</p>
                      <p>I help facilitate collaboration at Learn-To-Code, a community-powered (coding). We are motivated individuals with shared goals and group them intentionally. The mission is to learn, help and build a project.</p>

                      <h3>Front-End Web Developer/Remote, Author</h3>
                      <p><strong>Themeforest.net</strong>, January 2012 – December 2013</p>
                      <ul>
                        <li>Designed web templates, created mock ups and translated the design to code using HTML5, CSS3, Bootstrap, JavaScript, and Adobe Illustrator</li>
                        <li>Wrote the documentation</li>
                        <li>Responsible for customer services</li>
                      </ul>

                      <h3>Front-End Web Developer, Freelance</h3>
                      <p>January 2012 – April 2013</p>
                      <ul>
                        <li>Design web template to created mockups and translated the design to web templates from scratch using HTML5, CSS3, Bootstrap, JavaScript, Adobe Photoshop and Adobe Illustrator</li>
                        <li>Deployed websites to a web server</li>
                        <li>Write semantic HTML</li>
                      </ul>

                      <h3>Film Director Assistant</h3>
                      <p><strong>Ameba Film Co.,LTD</strong>, April 2003 – September 2005</p>
                      <ul>
                        <li>Assign the director develop, pre-production, storyboards, set, liaising with actors, putting casting and wardrobe.</li>
                        <li>Tracking daily progress against the filming production schedule, arranging logistics, preparing daily call sheets, checking cast and crew, and maintaining order on the set.</li>
                      </ul>
                  </div>
                </div>
             </div>
          </section>

          {/* Education */}
          <section className="container-fluid Top-padding">
              <div className="container text-left">
                <div className="row">
                  <div className="col-sm-4">
                      <h2>Education</h2>
                  </div>
                  <div className="col-sm-8">
                      <h3>Udacity in Front-End Web Developer Nanodegree Program, Certification</h3>
                      <p><strong>Remote</strong>, Jan 2018 – Oct 2018</p>
                      <p>I was awarded a GrowWithGoogle scholarship for Phase 1. The program included HTML, CSS, and JavaScript fundamental. After I finished the Phase 1, I was the top 10% of students who were awarded Phase 2 scholarships.</p>

                      <p>Front-end Web Developer Naodregree Phase 2 covered: HTML, CSS, responsive website design, accessibilities, API, Gulp, jQuery, Jasmine, React and Service Workers. Built 7 projects that are covered all the technologies that mentioned.</p>

                      <h3>Community College of Vermont in Web Design, Certificates</h3>
                      <p><strong>Winooski VT, USA,</strong> Apr, 2010 - Dec, 2011</p>

                      <h3>Suan Sunandha Rajabhat University in Fine and Applied Art, Bachelor of Arts, BA</h3>
                      <p><strong>Bangkok, Thailand</strong>, Apr 1999 – Apr 2003</p>
                      <p>Fine and Applied Art is a concentration within the visual arts field that includes the areas of advertising, commercial design, commercial photography, graphic design, illustration, and drawing.</p>
                  </div>
                </div>
             </div>
          </section>

          {/* Open Source Project */}
          <section className="container-fluid Top-padding">
              <div className="container text-left">
                <div className="row">
                  <div className="col-sm-4">
                      <h2>Open Source Project</h2>
                  </div>
                  <div className="col-sm-8">
                      <p><strong>Organization</strong> <strong><i>Code for BTV</i></strong></p>
                      <p><strong>Project detail</strong> <strong><i>The Money on My Mind app</i></strong> helps CVOEO's Reach-Up clients stay on track with their personal finance coaching</p>
                      <p><strong>Technology</strong> <i>React Native, Expo, Firebase, Redux</i></p>
                      <p><strong>GitHub repository</strong> <a className="redirectLink" onClick={()=>this.setRedirect("https://github.com/codeforbtv/cvoeo-app")}>Repository link</a></p>
                  </div>
                </div>
             </div>
          </section>
        </div>
    </>
    )
  }
}
export default Resume
