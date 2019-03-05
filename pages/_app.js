import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import configureStore from '../store';

import '../styles/app.global.css';

const withStore = withRedux(configureStore);

class Root extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      initialProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }

  render() {
    const { Component, initialProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...initialProps} />
        </Provider>
      </Container>
    );
  }
}

export default withStore(Root);
