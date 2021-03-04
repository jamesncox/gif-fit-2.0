import { combineReducers } from 'redux'
import params from './params'
import isActive from './isActive'
import successGif from './successGif'
import selectedStyles from './selectedStyles'


const rootReducer = combineReducers(
    {
        params,
        isActive,
        successGif,
        selectedStyles
    }
)

export default rootReducer