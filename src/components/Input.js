import { Component } from "react";
import React from "react";
import { store } from "../store/configureStore";

export class Input extends Component {
  onChange = e => {
    const text = e.target.value;
    this.props.changeText(text);
  };

  onSubmit = e => {
    e.preventDefault();
    const state = store.getState();
    const text = store.getState().input.text;
    this.props.submitForm(text);
    if (state.input.text.length > 0) this.props.sendMessage(text);
    console.log(text);
  };

  render() {
    const { text } = this.props;
    return (
      <div className="Input">
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            value={text}
            type="text"
            placeholder="Enter your message and press ENTER"
            autoFocus={true}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}
