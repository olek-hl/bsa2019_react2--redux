import React, { Component } from "react";
import { connect } from "react-redux";
import { Messages } from "../components/Messages";
import { Input } from "../components/Input";
import { changeText, submitForm } from "../actions/inputActions";
import {
  sendMessage,
  removeMessage,
  likeMessage
} from "../actions/messageActions";
import "./App.css";

class App extends Component {
  render() {
    const {
      messages,
      input,
      changeTextAction,
      submitFormAction,
      sendMessageAction,
      removeMessageAction,
      likeMessageAction
    } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <span className="chat-name">Chat</span>
          <span className="message-count">
            Messages: {messages.data.length}
          </span>
          <span className="last-message">
            Last message:{" "}
            {formatDate(messages.data[messages.data.length - 1].created_at)}
          </span>
        </div>
        <Messages
          messages={messages.data}
          member={messages.currentUser}
          removeMessage={removeMessageAction}
          likeMessage={likeMessageAction}
        />
        <Input
          text={input.text || ""}
          changeText={changeTextAction}
          submitForm={submitFormAction}
          sendMessage={sendMessageAction.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    messages: store.message,
    input: store.input
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeMessageAction: id => dispatch(removeMessage(id)),
    likeMessageAction: id => dispatch(likeMessage(id)),
    changeTextAction: text => dispatch(changeText(text)),
    submitFormAction: text => dispatch(submitForm(text)),
    sendMessageAction: text => dispatch(sendMessage(text))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const formatDate = date => {
  return new Date(date)
    .toISOString()
    .split("T")
    .join(" ")
    .split(".")[0];
};
