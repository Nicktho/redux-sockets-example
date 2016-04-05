import React, { Component } from 'react';
import Listener from './listener';
import Event from './event';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Listener host='http://localhost:3001'>
          <Event name='chat' onEvent={ message => console.log('new message', message) } />
        </Listener>
        <input type="text" onChange={this.props.onNameChange} />
        <p> Hello {this.props.name} </p>
      </div>
    )
  }
}
