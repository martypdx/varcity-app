import { GOT_RESULTS, NO_RESULTS, SEARCH_ERROR, SEARCHING } from './constants';

export function search(state = {}, { type, payload }) {
  switch (type) {
    case GOT_RESULTS:
      return payload;
    case NO_RESULTS:
      return payload;
      case SEARCH_ERROR:
      return state;
    case SEARCHING:
      return state;
    default:
      return state;
  }
}
