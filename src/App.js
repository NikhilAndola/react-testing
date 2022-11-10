import React from 'react';
import './style.css';
import IntervalTest from './IntervalTest';
import Transition from './Transition';
import AnimatedReactComp from './AnimatedReact';
import Routingv6 from './Routing/Routingv6';
import Timer from './timer/Timer';
import Highlighter from './Highlighter/Highlighter.js';

export default function App() {
  return (
    <>
      <br />
      {/* <AnimatedReactComp /> */}
      {/* <IntervalTest /> */}
      {/* <Transition /> */}
      {/* <Routingv6 /> */}
      <Timer />
      <Highlighter
      cite="https://en.wikipedia.org/wiki/JavaScript"
      text="Alongside HTML and CSS, JavaScript is one of the core technologies
      of the World Wide Web. JavaScript enables interactive web pages and
      is an essential part of web applications. The vast majority of
      websites use it for client-side page behavior, and all major web
      browsers have a dedicated JavaScript engine to execute it."
    />
    </>
  );
}
