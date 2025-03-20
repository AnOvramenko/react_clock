import React from 'react';

interface Props {
  name: string;
}

interface State {
  currTime: string;
}

export class Clock extends React.Component<Props, State> {
  state = {
    currTime: new Date().toUTCString().slice(-12, -4),
  };

  timerIdClock = 0;

  componentDidMount() {
    this.timerIdClock = window.setInterval(() => {
      this.setState({ currTime: new Date().toUTCString().slice(-12, -4) });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.currTime !== this.state.currTime) {
      // eslint-disable-next-line no-console
      console.log(this.state.currTime);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdClock);
  }

  render(): React.ReactNode {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.currTime}</span>
      </div>
    );
  }
}
