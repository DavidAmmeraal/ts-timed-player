import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import StagePlayer from './components/StagePlayer';

const mockParams = { stage: '/path/to/stage' };
jest.mock('./params', () => () => mockParams);

describe('App', () => {
  it('should wrap the components with a redux provider', () => {
    const result = shallow(
      <App />
    )
    const foundProviders = result.find(Provider);
    expect(foundProviders).toHaveLength(1);
    const foundProvider = foundProviders.first();
    const foundStore = foundProvider.prop('store');
    expect(foundStore).toEqual(store);
    expect(result).toMatchSnapshot();
  })

  it('should wrap StagePlayer with params', () => {
    const result = shallow(
      <App />
    )
    const foundStagePlayers = result.find(StagePlayer);
    expect(foundStagePlayers).toHaveLength(1);
    const foundStagePlayer = foundStagePlayers.first();
    const foundStagePlayerProps = foundStagePlayer.props();
    expect(foundStagePlayerProps).toMatchObject(mockParams)
  })
})
