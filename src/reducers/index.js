import { combineReducers } from 'redux'
import flights from './flights'
import namesForSelect from './namesForSelect'

export default combineReducers({
    flights,
    namesForSelect
})
