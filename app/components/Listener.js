import React, { Component, Children } from 'react';
import Client from 'socket.io-client';

export default class Listener extends Component {
  render() {
    const { children, host } = this.props;

    const io = Client(host);

    Children.forEach(children, child => io.on(child.props.name, child.props.onEvent));

    return false;
  }
}
