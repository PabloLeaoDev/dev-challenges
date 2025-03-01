import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

const req = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(req);
    yield put(actions.clickButtonSuccess());
  } catch (error) {
    yield put(actions.clickButtonFailure());
  }
}

export default all([takeLatest(types.CLICKED_BUTTON_REQUEST, exampleRequest)]);
