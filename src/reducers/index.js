import { combineReducers } from 'redux'
import params from './params'
import isActive from './isActive'
import successGif from './successGif'
import buttonGridStyles from './buttonGridStyles'


const rootReducer = combineReducers(
    {
        params,
        isActive,
        successGif,
        buttonGridStyles
    }
)

export default rootReducer