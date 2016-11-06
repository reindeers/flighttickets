import React from 'react';

import './cardFlight.css';

class cardFlight extends React.Component {

  render() {
    const { fromPlace, toPlace, name, arrival, departure } = this.props;

    let d = new Date(arrival).getMonth() + 1;
    if (d < 10) d = `0${d}`
    let dd = new Date(arrival).getDate();
    if (dd < 10) dd = `0${dd}`
    const formatArrival = `${dd}.${d}.${new Date(arrival).getFullYear() }`;
    const formatTimeA = `${new Date(arrival).getHours() }:${new Date(arrival).getSeconds()}`;
    const formatTimeD =  `${new Date(departure).getHours() }:${new Date(departure).getSeconds() }`;

    return (
      <section className="card-flight">
          <div className="card-flight__date">
            <h1>{formatArrival}</h1>
            <span>{formatTimeA} - {formatTimeD}</span>
          </div>
          <div className="card-flight__place">
            <p className="card-flight__from-place">{fromPlace}</p>
            <p className="card-flight__to-place">{toPlace}</p>
            <span>{name}</span>
          </div>
      </section>
    )
  }
}

cardFlight.propTypes = {
  fromPlace: React.PropTypes.string.isRequired,
  toPlace: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  arrival: React.PropTypes.string.isRequired,
  departure: React.PropTypes.string.isRequired
};

export default cardFlight;
