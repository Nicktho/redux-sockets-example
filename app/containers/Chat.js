import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { newMessage, sendMessage } from '../redux/actions/message';

import Listener from '../components/listener';
import Event from '../components/event';

class Chat extends Component {
  render() {
    const { messages, dispatch } = this.props;
    return (
      <div>
        <Listener host='http://localhost:3001'>
          <Event name='chat' onEvent={ message => dispatch(newMessage(message)) } />
        </Listener>
        <input type="test" ref='name' />
        <input type="text" ref='msg' />
        <button onClick={ () => sendMessage({ content: this.refs.msg.value, name: this.refs.name.value})}>Go</button>
        { _.map(messages, message => <p>{message.name}: {message.content}</p>) }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.message
  }
};

export default connect(mapStateToProps)(Chat);
