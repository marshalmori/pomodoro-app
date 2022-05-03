import React from 'react';

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

function Button(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
}

export default Button;
