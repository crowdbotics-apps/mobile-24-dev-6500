import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth16590Saga from '../features/EmailAuth16590/redux/sagas';
import CalendarView6589Saga from '../features/CalendarView6589/redux/sagas';
import EmailAuth6588Saga from '../features/EmailAuth6588/redux/sagas';
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
EmailAuth16590Saga,
CalendarView6589Saga,
EmailAuth6588Saga,
CalendarView6586Saga,
EmailAuth6585Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}