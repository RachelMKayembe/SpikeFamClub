import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form1 from './Form1.js';
import Form2 from './Form2.js';
import './Registrationn.css';

export default class Registrationn extends Component {
  render() {
    const idCondition = true;
    const defaultActiveKey = idCondition ? 'teamR' : 'tournamentR';
    return (
      <div>
        <Tabs
          defaultActiveKey={defaultActiveKey}
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="teamR" title="Team Registration">
            <Form1 />
          </Tab>

          <Tab eventKey="tournamentR" title="Tournament Registration">
            <Form2/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}