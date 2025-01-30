import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { Component } from 'react';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26
    }
    //this.nextYear = this.nextYear.bind(this);
    this.nextYear = () => {
      this.setState(state => ({
        years: ++state.years
      }))
    }
  }
  // nextYear() {
  //   //this.state.yearse++
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }
  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
      <button onClick={this.nextYear}>++</button>
      <h1>My name is {name}, surname - {surname}, years = {years}</h1>
      <a href={link}>My profile</a>
      </>
    )
  }
}

// function WhoAmI({name, surname, link}) {
//   return (
//     <>
//     <h1>My names is {name}, surname - {surname}</h1>
//     <a href={link}>My ptofile</a>
//     </>
//   )
// }

const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="1Smith" link="vk.com"/>
      <WhoAmI name="Ivan" surname="2Smith" link="vk.com"/>
      <WhoAmI name="Alex" surname="2Smith" link="vk.com"/>
    </>
  )
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <All/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
