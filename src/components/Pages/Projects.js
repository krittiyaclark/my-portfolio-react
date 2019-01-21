import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import ProjectLists from '../ProjectLists';

class Projects extends Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='{{this.state.project.href}}' />
    }
  }

  render() {
    return (
      <div>
        {ProjectLists.map((project, i) =>

        <section className='section'>
          <div className='row'>
            <div className='col-sm'>
              <div className='content-left'>
                <p key={project.id + i}>
                  {project.iconImage}
                </p>
              </div>
            </div>
            <div className='col-sm-8'>
              <div className='content-right text-left'>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <p>Technologies: {project.technologies}</p>
                <button onClick={this.setRedirect}>View live</button>
              </div>
            </div>
          </div>
        </section>
        )}
      </div>
    )
  }
}
export default Projects;
