import React, { Component } from "react";
import "./App.css";

const App = () => <PersonList />;
const PersonList = () => {
  const people = [
    {
      img: 1,
      name: "john",
      job: "developer"
    },
    {
      img: 2,
      name: "bob",
      job: "designer"
    },
    {
      img: 3,
      name: "peter",
      job: "musician"
    }
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} />
      <Person person={people[2]} />
    </section>
  );
};
const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;

  const url = require(`./images/avatar${img}.png`);
  return (
    <div className="person">
      <img src={url} alt="avatar" />
      <h3>{name}</h3>
      <h4>{job}</h4>
    </div>
  );
};

export default App;
