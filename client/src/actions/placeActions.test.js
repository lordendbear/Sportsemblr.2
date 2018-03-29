import expect from 'expect';
import * as placeActions from './placeActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Place Actions', () => {
  describe('savePlaceSuccess', () => {
    it('should create a SAVE_PLACE_SUCCESS action', () => {
      const place = { title: 'some awesome place' };
      const expectedAction = {
        type: types.SAVE_PLACE_SUCCESS,
        place
      };

      const action = placeActions.savePlaceSuccess(place);

      expect(action).toEqual(expectedAction);
    });
  });
});