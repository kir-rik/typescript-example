import React from "react";
import Text from "../Text";
import Button from "../Button";

type State = {
  value: number
}

export default class App extends React.PureComponent<{}, State> {
  state = {
    value: 0,
  };

  handleClick = () =>
    this.setState((state, props) => {
      return {
        value: state.value + 1,
      };
    });

  render() {
    const { value } = this.state;

    return (
      <main>
        <Text value={`Какой-то текст ${value}`} />
        <Button title="Какая-то кнопка" handleClick={this.handleClick} />
      </main>
    );
  }
}
