import axios from 'axios';

export const NEW_MESSAGE = 'NEW_MESSAGE';
export const POST_MESSAGE = 'POST_MESSAGE';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE';
export const POST_MESSAGE_FAILURE = 'POST_MESSAGE';

export function newMessage(message) {
  const { id, name, content } = JSON.parse(message);
  return { type: NEW_MESSAGE, id, name, content };
}

export function sendMessage(message) {
  axios.post('http://localhost:3001/message', message);
}
