import React from 'react';

import { Store } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '../store';

import StagePlayerLayout from './StagePlayerLayout';
import StagePlayerError from './StagePlayerError';

interface IStagePlayerProps {
  stage: () => Promise<{}>;
}

interface IStagePlayerState {
  store?: Store<any>;
  error?: Error;
}

class StagePlayer extends React.Component<IStagePlayerProps, IStagePlayerState> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props
      .stage()
      .then(stage => {
        this.setState({
          store: configureStore(stage),
        });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    if (this.state.error) {
      return <StagePlayerError error={this.state.error} />;
    }

    if (this.state.store) {
      return (
        <Provider store={this.state.store}>
          <StagePlayerLayout {...this.props} />
        </Provider>
      );
    }
    return <span>LOADING</span>;
  }
}

export default StagePlayer;
