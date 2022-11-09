import React from 'react';
import { Animated } from 'react-animated-css';
import './style.css';

export default function AnimatedReactComp() {
  return (
    <Animated animationIn="slideInUp" isVisible={true}>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    </Animated>
  );
}
