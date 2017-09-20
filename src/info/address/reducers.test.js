import * as actions from './constants';
import { address } from './reducers';

describe('address reducer', () => {

  const state = { countries: [], regions: [], cities: [] };

  it('initial state', () => {
    const testState = address(undefined, { type: undefined });
    expect(testState).toEqual(state);
  });
    
  it('gets countries', () => {
    const testState = address(state, { type: actions.GET_COUNTRIES, payload: [] });
    expect(testState).toEqual(state);
  });
    
  it('gets regions', () => {
    const testState = address(state, { type: actions.GET_REGIONS, payload: [] });
    expect(testState).toEqual(state);
  });
    
  it('gets cities', () => {
    const testState = address(state, { type: actions.GET_CITIES, payload: [] });
    expect(testState).toEqual(state);
  });

});