import React, { Component } from 'react';

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

// includes (css)
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
