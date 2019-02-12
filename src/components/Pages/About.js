import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div className='wrapper'>
      <header className='about container-fluid text-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-sm-12 align-self-center'>
                  <img src='img/KRITTIYA-CLARK.jpg' alt='Avatar' className='avatar'/>
                  <h1>My Passion and Personality</h1>
               </div>
            </div>
         </div>
      </header>

      <section className='about-content page-content container-fluid text-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-sm-8 align-self-center'>
                  <h1>A few fun facts about myself</h1>
                  <p>I like organic coffee, I moved to New York City from Bangkok in 2006, I like snowboarding, my favourite city is Amasterdam, I run in summer only.</p>
               </div>
            </div>
         </div>
      </section>

      <section className='about-content page-content container-fluid text-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-10 align-self-center'>
                  <h1>How do I became a Front-End developer</h1>
                  <p>I had been curious how to built the website and I was fascinated with interactive. That made me learnt how to built a website.</p>
                  <p>I taught myself HTML/CSS and I got hooked and I never stop since then.</p>

               </div>
            </div>
         </div>
      </section>

      <section className='about-content page-content container-fluid text-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-10 align-self-center'>
                  <h1>My first a few projects</h1>

                  <p>My first client was a local resturant and they are still using it. After that project I built a few websites such as a law firm website, a personal website. I also was an author at <i>Themeforest</i> which I built web templates. I use my HTML/CSS skills did all those projects.</p>
               </div>
            </div>
         </div>
      </section>

      <section className='about-content page-content container-fluid text-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-10 align-self-center'>
                  <h1>My Front-End Web Development scholarships and cohort</h1>

                  <p>I want to be able to do more than just built web templates so I joined Cohort which I learnt JavaScript and built a couple web applications, <a href=' gamy-branch.surge.sh'>Momemtum</a> clone (HTML/CSS/JavaScript) and Trello clone (HTML/CSS/React). I also learnt how to collaboration with a remote team.</p>
                  <p>In 2018, I was awared from Udacity's scholarships Phrase | with Grow with Google which I learnt web development fundamental.</p>
                  <p>After I finished the Phrase |. I was 1 of 10% of students who are awared to Phrase ||, Front-End Web Developer Nanodegree Program, which I finished 7 projects. Last 2 projects were built with React, <a href='https://krittiyaclark.github.io/udacity-front-end-React-MyReads-Project/#/'>MyReads: A Book Tracking App</a> and <a href='https://krittiyaclark.github.io/udacity-front-end-neighborhood-map-react/'>Neighborhood Map</a></p>
               </div>
            </div>
         </div>
      </section>

      <section className='about-content page-content container-fluid text-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-10 align-self-center'>
                  <h1>Contribution to an open source</h1>

                  <p>I am an active to local Meetup for instance, <i>Vermont Coders Connection</i> and <i>Code for BTV</i> which I can learn React Native by contribute to the <a href='https://github.com/codeforbtv/cvoeo-app'>cvoeo-app</a> (The "Money on My Mind" app helps CVOEO's Reach-Up clients stay on track with their personal finance coaching.)</p>
               </div>
            </div>
         </div>
      </section>

      <section className='about-content page-content container-fluid text-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-10 align-self-center'>
                  <h1>What do I see myself in next 5 years</h1>

                  <p>My passion as a Front-End developer which motivated me built my website with React and led me to be a better React developer. I also want to build more IOS applications with React Native (I talked about my contribution with an open source section)</p>

                  <p>I am looking to work with start ups to help with their business to reach the goal.</p>
               </div>
            </div>
         </div>
      </section>
      </div>
    )
  }
}
export default About;
