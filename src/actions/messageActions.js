export function sendMessage(text) {
  return {
    type: "SEND_MESSAGE",
    payload: text
  };
}

export function removeMessage(id) {
  return {
    type: "REMOVE_MESSAGE",
    payload: id
  };
}

export function likeMessage(id) {
  return {
    type: "LIKE_MESSAGE",
    payload: id
  };
}
