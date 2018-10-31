import Types from 'Types';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { stageActions } from '../features/stage';
import { StagePlayerParams } from '../params';

interface IStagePlayerProps extends StagePlayerParams {
  onInit: () => void;
}

class StagePlayer extends React.PureComponent<IStagePlayerProps> {
  static defaultProps = {
    onInit: () => {},
  };

  componentDidMount() {
    this.props.onInit();
  }

  render() {
    return <>STAGEPLAYER PLACEHOLDER</>;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>, props: IStagePlayerProps) => ({
  onInit: () => dispatch(stageActions.fetchStage.request(props.stage)),
});

export default connect(
  null,
  mapDispatchToProps,
)(StagePlayer);
