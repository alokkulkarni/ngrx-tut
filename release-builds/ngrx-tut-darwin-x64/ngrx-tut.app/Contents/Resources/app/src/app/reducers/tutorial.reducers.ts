import { Action } from '@ngrx/store'
import { Tutorial } from '../models/tutorial.models'
import * as TutorialActions from '../actions/tutorial.actions'

const intialState : Tutorial =  {
    name: 'Initial Tutorial',
    url: 'www.google.com'
}

export function reducer(state : Tutorial[] = [intialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL: 
            const newState = state.filter((value, index, array) => index !== action.payload);
            return newState;
        default:
            return state
    }
}
