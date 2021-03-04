import {
    CLEAR_SELECTED_STYLES,

    SET_ONE_EX,
    SET_TWO_EX,
    SET_THREE_EX,
    SET_FOUR_EX,
    SET_FIVE_EX,
    SET_SIX_EX,
    SET_SEVEN_EX,
    SET_EIGHT_EX,
    SET_NINE_EX,
    SET_TEN_EX,

    SET_TWENTY_EX,
    SET_THIRTY_EX,
    SET_FORTY_EX,
    SET_SIXTY_EX,

    SET_TEN_REST,
    SET_FIFTEEN_REST,
    SET_TWENTY_REST,
    SET_THIRTY_REST,

    // SET_ONE_ROUND,
    // SET_TWO_ROUND,
    // SET_THREE_ROUND,
    // SET_FOUR_ROUND,
    // SET_FIVE_ROUND,
    // SET_SIX_ROUND,
    // SET_SEVEN_ROUND,
    // SET_EIGHT_ROUND,
    // SET_NINE_ROUND,
    // SET_TEN_ROUND,
} from '../actionTypes'

export default (state = {
    // Exercise Number
    oneEx: false,
    twoEx: false,
    threeEx: false,
    fourEx: false,
    fiveEx: false,
    sixEx: false,
    sevenEx: false,
    eightEx: false,
    nineEx: false,
    tenEx: false,

    // Exercise Time
    twentyEx: false,
    thirtyEx: false,
    fortyEx: false,
    sixtyEx: false,

    // Rest Time
    tenRest: false,
    fifteenRest: false,
    twentyRest: false,
    thirtyRest: false,

     // Exercise Rounds 
     oneRound: false,
     twoRound: false,
     threeRound: false,
     fourRound: false,
     fiveRound: false,
     sixRound: false,
     sevenRound: false,
     eightRound: false,
     nineRound: false,
     tenRound: false,
}, action) => {
    switch (action.type) {

        case CLEAR_SELECTED_STYLES:
            return { 
                ...state, 
                // Exercise Number
                oneEx: false,
                twoEx: false,
                threeEx: false,
                fourEx: false,
                fiveEx: false,
                sixEx: false,
                sevenEx: false,
                eightEx: false,
                nineEx: false,
                tenEx: false,

                // Exercise Time
                twentyEx: false,
                thirtyEx: false,
                fortyEx: false,
                sixtyEx: false,

                // Rest Time
                tenRest: false,
                fifteenRest: false,
                twentyRest: false,
                thirtyRest: false,

                // Exercise Rounds 
                oneRound: false,
                twoRound: false,
                threeRound: false,
                fourRound: false,
                fiveRound: false,
                sixRound: false,
                sevenRound: false,
                eightRound: false,
                nineRound: false,
                tenRound: false,
            }
        
        case SET_ONE_EX:
            return {
                ...state,
                oneEx: true,
                twoEx: false,
                threeEx: false,
                fourEx: false,
                fiveEx: false,
                sixEx: false,
                sevenEx: false,
                eightEx: false,
                nineEx: false,
                tenEx: false,
            }

        case SET_TWO_EX:
            return {
                ...state,
                oneEx: false,
                twoEx: true,
                threeEx: false,
                fourEx: false,
                fiveEx: false,
                sixEx: false,
                sevenEx: false,
                eightEx: false,
                nineEx: false,
                tenEx: false,
            }

        case SET_THREE_EX:
            return {
                ...state,
                oneEx: false,
                twoEx: false,
                threeEx: true,
                fourEx: false,
                fiveEx: false,
                sixEx: false,
                sevenEx: false,
                eightEx: false,
                nineEx: false,
                tenEx: false,
            }

        case SET_FOUR_EX:
            return {
                ...state,
                oneEx: false,
                twoEx: false,
                threeEx: false,
                fourEx: true,
                fiveEx: false,
                sixEx: false,
                sevenEx: false,
                eightEx: false,
                nineEx: false,
                tenEx: false,
            }

        case SET_FIVE_EX:
            return {
                ...state,
                oneEx: false,
                twoEx: false,
                threeEx: false,
                fourEx: false,
                fiveEx: true,
                sixEx: false,
                sevenEx: false,
                eightEx: false,
                nineEx: false,
                tenEx: false,
            }

        case SET_SIX_EX:
            return {
                ...state,
                oneEx: false,
                twoEx: false,
                threeEx: false,
                fourEx: false,
                fiveEx: false,
                sixEx: true,
                sevenEx: false,
                eightEx: false,
                nineEx: false,
                tenEx: false,
            }
        
        case SET_SEVEN_EX:
            return {
                ...state,
                oneEx: false,
                twoEx: false,
                threeEx: false,
                fourEx: false,
                fiveEx: false,
                sixEx: false,
                sevenEx: true,
                eightEx: false,
                nineEx: false,
                tenEx: false,
            }

        case SET_EIGHT_EX:
            return {
                ...state,
                oneEx: false,
                twoEx: false,
                threeEx: false,
                fourEx: false,
                fiveEx: false,
                sixEx: false,
                sevenEx: false,
                eightEx: true,
                nineEx: false,
                tenEx: false,
            }

        case SET_NINE_EX:
            return {
                ...state,
                oneEx: false,
                twoEx: false,
                threeEx: false,
                fourEx: false,
                fiveEx: false,
                sixEx: false,
                sevenEx: false,
                eightEx: false,
                nineEx: true,
                tenEx: false,
            }

        case SET_TEN_EX:
            return {
                ...state,
                oneEx: false,
                twoEx: false,
                threeEx: false,
                fourEx: false,
                fiveEx: false,
                sixEx: false,
                sevenEx: false,
                eightEx: false,
                nineEx: false,
                tenEx: true,
            }

        case SET_TWENTY_EX:
            return {
                ...state, 
                twentyEx: true,
                thirtyEx: false,
                fortyEx: false,
                sixtyEx: false,
            }
        
        case SET_THIRTY_EX:
            return {
                ...state, 
                twentyEx: false,
                thirtyEx: true,
                fortyEx: false,
                sixtyEx: false,
            }

        case SET_FORTY_EX:
            return {
                ...state, 
                twentyEx: false,
                thirtyEx: false,
                fortyEx: true,
                sixtyEx: false,
            }

        case SET_SIXTY_EX:
            return {
                ...state, 
                twentyEx: false,
                thirtyEx: false,
                fortyEx: false,
                sixtyEx: true,
            }

        case SET_TEN_REST:
            return {
                ...state, 
                tenRest: true,
                fifteenRest: false,
                twentyRest: false,
                thirtyRest: false,
            }

        case SET_FIFTEEN_REST:
            return {
                ...state, 
                tenRest: false,
                fifteenRest: true,
                thirtyRest: false,
                thirtyRest: false,
            }
        
        case SET_TWENTY_REST:
            return {
                ...state, 
                tenRest: false,
                fifteenRest: false,
                twentyRest: true,
                thirtyRest: false,
            }

        case SET_THIRTY_REST:
            return {
                ...state, 
                tenRest: false,
                fifteenRest: false,
                twentyRest: false,
                thirtyRest: true,
            }

        default:
            return state
    }
}