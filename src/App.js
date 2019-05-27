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
    <section className="personList">
      <Person person={people[0]}>
        Lorem ipsum dolor sit amet, duo unum ludus cu, pri ne minim virtute
        mediocritatem. Id vis magna lorem impedit, an volumus eligendi appareat
        pri, vim aperiam perpetua no.
      </Person>
      <Person person={people[1]}>
        Vocibus torquatos sadipscing an est. Mutat option periculis pro eu, an
        tota integre impedit sed, ne per graeco argumentum persequeris. Integre
        salutatus evertitur ad eos. Sed nullam corrumpit ad, vidisse molestiae
        per id, ex elit mutat nonumes mei.
      </Person>
      <Person person={people[2]}>
        Meis harum alterum sea et. Molestiae concludaturque mei te, cu eam mazim
        electram. Aliquam euripidis has an, nec no tempor recteque gubergren, eu
        vim platonem principes. Eam eu nulla omittantur, vix at tantas facilisis
        aliquando.
      </Person>
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
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  );
};

export default App;
