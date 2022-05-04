import React from 'react';
import { secondsToMinutes } from '../utils/SecondsToMinutes';

interface Props {
  mainTime: number;
}

function Timer(props: Props): JSX.Element {
  return <div className="timer">{secondsToMinutes(props.mainTime)}</div>;
}

export default Timer;
