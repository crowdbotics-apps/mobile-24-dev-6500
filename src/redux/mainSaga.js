import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth6621Saga from '../features/EmailAuth6621/redux/sagas';
import EmailAuth6618Saga from '../features/EmailAuth6618/redux/sagas';
import CalendarView6617Saga from '../features/CalendarView6617/redux/sagas';
import CalendarView6616Saga from '../features/CalendarView6616/redux/sagas';
import EmailAuth6615Saga from '../features/EmailAuth6615/redux/sagas';
import EmailAuth6612Saga from '../features/EmailAuth6612/redux/sagas';
import CalendarView6611Saga from '../features/CalendarView6611/redux/sagas';
import CalendarView6610Saga from '../features/CalendarView6610/redux/sagas';
import EmailAuth6609Saga from '../features/EmailAuth6609/redux/sagas';
import EmailAuth6606Saga from '../features/EmailAuth6606/redux/sagas';
import CalendarView6605Saga from '../features/CalendarView6605/redux/sagas';
import CalendarView6604Saga from '../features/CalendarView6604/redux/sagas';
import EmailAuth6603Saga from '../features/EmailAuth6603/redux/sagas';
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
EmailAuth6621Saga,
EmailAuth6618Saga,
CalendarView6617Saga,
CalendarView6616Saga,
EmailAuth6615Saga,
EmailAuth6612Saga,
CalendarView6611Saga,
CalendarView6610Saga,
EmailAuth6609Saga,
EmailAuth6606Saga,
CalendarView6605Saga,
CalendarView6604Saga,
EmailAuth6603Saga,
EmailAuth16590Saga,
CalendarView6589Saga,
EmailAuth6588Saga,
CalendarView6586Saga,
EmailAuth6585Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}