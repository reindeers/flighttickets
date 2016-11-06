import React, { PropTypes, Component } from 'react'
import * as selectActions from '../../actions/SelectActions'
import './SelectCompany.css';

class SelectCompany extends Component {

    handleClick = () => {
      const { changeSelectValue } = this.props;
      changeSelectValue(this.refs.select.value);
    }


    render() {
    const { names, fetching, isGetNames } = this.props;

    function renderOptions () {
      if (isGetNames) {
        return names.map(function(name, i){
            return (
                <option key={i} value={name}>{name}</option>
            )
        })
      }

     };

    return (
      <select onChange={this.handleClick} ref='select' className="select-company__select">
          <option key={0} value={''}>Все авиакомпании</option>
          { renderOptions() }
      </select>
    )
  }
}

SelectCompany.propTypes = {
  names: PropTypes.array.isRequired
};

export default SelectCompany;
