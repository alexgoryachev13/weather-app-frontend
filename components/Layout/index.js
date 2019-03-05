import React from 'react';
import { oneOfType, node, arrayOf } from 'prop-types';

import css from './style.css';

const Layout = ({ children }) => (
  <div className={css.wrapper}>
    {children}
  </div>
);

Layout.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]).isRequired,
};

export default Layout;
