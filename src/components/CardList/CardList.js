import React, { PropTypes, Component } from 'react';
import CardFlight from '../CardFlight/CardFlight';

import './CardList.css';

class CardList extends Component {

    render() {
        const { flights, fetching, isGetFlights, selectCompanyName } = this.props;

        function renderOptions() {

            if (isGetFlights) {
                let data = [];
                if (selectCompanyName) {
                    data = flights.filter(function(v) {
                        return v.carrier === selectCompanyName;
                    })
                } else {data = flights};

                return data.map(function(flight, i) {
                    return (
                        <CardFlight
                            key={i}
                            fromPlace={flight.direction.from}
                            toPlace={flight.direction.to}
                            arrival={flight.arrival}
                            departure={flight.departure}
                            name={flight.carrier}
                        />
                    )
                })
            }
        };

        return (
              <div>{ renderOptions()}</div>
        )
  }
}

CardList.propTypes = {
  flights: PropTypes.array.isRequired,
  selectCompanyName: PropTypes.string.isRequired
};

export default CardList;
