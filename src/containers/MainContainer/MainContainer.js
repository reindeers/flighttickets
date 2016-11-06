//ToDo: сделать получение только флайтс, но не нэймс.

import CardList from '../../components/CardList/CardList';
import SelectCompany from '../../components/SelectCompany/SelectCompany';
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as selectActions from '../../actions/SelectActions'
import * as flightActions from '../../actions/FlightActions'

import './MainContainer.css';

class MainContainer extends React.Component {
  componentWillMount () {
      const { getNames } = this.props.selectActions;
      const { getFlights } = this.props.flightActions;
      getNames();
      getFlights();
  }

  render() {
    const { flights, namesForSelect } = this.props;
    const {changeSelectValue} = this.props.selectActions;
    console.log(this.props);

    return (
          <div className="main-container">
            <SelectCompany
                names = {namesForSelect.names}
                fetching={namesForSelect.fetching}
                isGetNames={namesForSelect.isGetNames}
                changeSelectValue = {changeSelectValue}
            />
            <CardList
                flights = {flights.flights}
                isGetFlights = {flights.isGetFlights}
                selectCompanyName = {namesForSelect.selectCompanyName}
            />
          </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    flights: state.flights,
    namesForSelect: state.namesForSelect
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectActions: bindActionCreators(selectActions, dispatch),
    flightActions: bindActionCreators(flightActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
