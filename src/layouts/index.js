import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { canUseDOM } from 'exenv';
import 'normalize.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './index.css';

class TemplateWrapper extends Component {
  componentWillMount() {
    if (canUseDOM) {
      const WebFont = require('webfontloader');
      WebFont.load({
        google: {
          families: ['Robot Slab', 'Noto Serif', 'Open Sans', 'Noto Sans', 'Karla:400,700']
        }
      });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div className='site-container'>
        <Helmet title='Förändringen AB' />
        <Navbar />
        <div className='page-container'>{children()}</div>
        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
