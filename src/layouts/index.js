import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { canUseDOM } from 'exenv';
import 'normalize.css';

import Navbar from '../components/Navbar';

import './index.css';

class TemplateWrapper extends Component {
  componentWillMount() {
    if (canUseDOM) {
      const WebFont = require('webfontloader');
      WebFont.load({
        google: {
          families: ['Karla:400,700']
        }
      });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet title='Förändringen' />
        <Navbar />
        <div>{children()}</div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
