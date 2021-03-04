import { combineReducers } from 'redux'
import params from './params'
import isActive from './isActive'
import successGif from './successGif'
import selectedStyles from './selectedStyles'
import buttonGridStyles from './buttonGridStyles'


const rootReducer = combineReducers(
    {
        params,
        isActive,
        successGif,
        selectedStyles,
        buttonGridStyles
    }
)

export default rootReducer