import * as actions from '../actions/actions'

const initialState = ({
    galerieState: false
})
export const galerie = (state = initialState, action) => {
    switch (action.type){
        case actions.TOGGLE_GALERIE:
            return {
                galerieState: !state.galerieState
            }
        default:
            return state
    }
}