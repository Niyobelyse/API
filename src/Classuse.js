import React, { Component } from 'react';

class ParentComponent extends React.Component {
  constructor() {
    super();
    console.log("Parent component constructed");
  }
}

class ChildComponent extends ParentComponent {
  constructor(props) {
    super();
  }
}
