import { get_erf_record_service } from '@/app/pages/services/erf-record-service';
import {erfRecordSlice} from './erf-record-slice';

export function get_erf_record_thunk() {
  return async function (dispatch, getState) {
    const result = (await get_erf_record_service()).data
    console.log('result',result)
    dispatch(erfRecordSlice.actions.setErfRecords(result));
  };
}