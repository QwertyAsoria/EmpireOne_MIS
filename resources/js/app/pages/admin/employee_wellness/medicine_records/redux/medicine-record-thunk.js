import { get_medicine_record_service } from "@/app/pages/services/medicine-record-service";
import { medicineRecordSlice } from "./medicine-record-slice";

export function get_medicine_record_thunk() {
    return async function (dispatch, getState) {
        const result = (await get_medicine_record_service()).data
        console.log('result', result)
        dispatch(medicineRecordSlice.actions.setMedicineRecords(result));
    };
}