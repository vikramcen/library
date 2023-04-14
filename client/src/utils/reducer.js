import {
  ALL_BOOKS,
  DB_BOOKS
} from './action';

const initialState = { 
  allbooks: [],
  dbbooks: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_BOOKS:
      return {
        ...state,
        allbooks: [...action.allbooks]
      }
    case DB_BOOKS:
      return {
        ...state,
        dbbooks: [...action.dbbooks]
      }
    default: 
      return state;
  }
}