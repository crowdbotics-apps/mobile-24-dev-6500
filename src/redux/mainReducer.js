import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView6610Reducer from '../features/CalendarView6610/redux/reducers';
import EmailAuth6609Reducer from '../features/EmailAuth6609/redux/reducers';
import EmailAuth6606Reducer from '../features/EmailAuth6606/redux/reducers';
import CalendarView6605Reducer from '../features/CalendarView6605/redux/reducers';
import CalendarView6604Reducer from '../features/CalendarView6604/redux/reducers';
import EmailAuth6603Reducer from '../features/EmailAuth6603/redux/reducers';
import EmailAuth16590Reducer from '../features/EmailAuth16590/redux/reducers';
import CalendarView6589Reducer from '../features/CalendarView6589/redux/reducers';
import EmailAuth6588Reducer from '../features/EmailAuth6588/redux/reducers';
import CalendarView6586Reducer from '../features/CalendarView6586/redux/reducers';
import EmailAuth6585Reducer from '../features/EmailAuth6585/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView6610: CalendarView6610Reducer,
EmailAuth6609: EmailAuth6609Reducer,
EmailAuth6606: EmailAuth6606Reducer,
CalendarView6605: CalendarView6605Reducer,
CalendarView6604: CalendarView6604Reducer,
EmailAuth6603: EmailAuth6603Reducer,
EmailAuth16590: EmailAuth16590Reducer,
CalendarView6589: CalendarView6589Reducer,
EmailAuth6588: EmailAuth6588Reducer,
CalendarView6586: CalendarView6586Reducer,
EmailAuth6585: EmailAuth6585Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});