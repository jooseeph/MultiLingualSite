import { SET_LANGUAGE, LangAction, LangState } from '../types';

const LocalStorage = localStorage.getItem('language');

const initialState: LangState = {
  language: LocalStorage ? LocalStorage : 'EN'
}

const langReducer = (state = initialState, action: LangAction) => {
  switch(action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return state;
  }
}

export default langReducer;