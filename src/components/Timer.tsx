import React from 'react';
import { secondsToTime } from '../utils/SecondsToTime';

interface Props {
  mainTime: number;
}

function Timer(props: Props): JSX.Element {
  return <div className="timer">{secondsToTime(props.mainTime)}</div>;
}

export default Timer;
