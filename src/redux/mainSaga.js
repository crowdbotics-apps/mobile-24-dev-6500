import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView6586Saga from '../features/CalendarView6586/redux/sagas';
import EmailAuth6585Saga from '../features/EmailAuth6585/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView6586Saga,
EmailAuth6585Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}