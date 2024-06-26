import AdminLayout from '@/app/pages/admin/admin-layout'
import React from 'react'
import ErfRecordsTableSection from './sections/erf-records-table-section'
import store from '@/app/pages/store/store';
import { get_erf_record_thunk } from './redux/erf-record-thunk';
import { useEffect } from 'react';

export default function ErfRecordsPage() {
  useEffect(() => {
    store.dispatch(get_erf_record_thunk())
  }, []);
  return (
    <AdminLayout>
        <ErfRecordsTableSection/>
    </AdminLayout>
  )
}
