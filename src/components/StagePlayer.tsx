/**
 * StagePlayer.tsx
 * The StagePlayer component.
 */
import * as React from 'react';

import { Store } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '../store/configureStore';

import { StagePlayerLayout } from './StagePlayerLayout';
import { StagePlayerError } from './StagePlayerError';
import { ConnectedTimeDisplay } from './ConnectedTimeDisplay';
import { ToggleRunButton } from './ToggleRunButton';

interface IStagePlayerProps {
  stage: () => Promise<{}>;
}

interface IStagePlayerState {
  store?: Store<any>;
  error?: Error;
}

export class StagePlayer extends React.Component<IStagePlayerProps, IStagePlayerState> {
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
          <StagePlayerLayout {...this.props}>
            <ConnectedTimeDisplay />
            <ToggleRunButton />
          </StagePlayerLayout>
        </Provider>
      );
    }
    return <span>LOADING</span>;
  }
}
