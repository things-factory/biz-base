import { UPDATE_BIZ_BASE } from '../actions/main'

const INITIAL_STATE = {
  state_main: 'ABC'
}

const main = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_BIZ_BASE:
      return { ...state }

    default:
      return state
  }
}

export default main
