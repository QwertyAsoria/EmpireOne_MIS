import React, { useEffect } from 'react'
import AdminLayout from '../../../admin-layout'
import JobAnalysisFormSection from './sections/job-analysis-form-section'
import store from '@/app/store/store'
import { get_outsourcing_erf_by_id_thunk } from '../../department/redux/department-thunk'

export default function JobAnalysisPage() {
  const ref_id= window.location.pathname.split('/')[5]
  useEffect(()=>{
    store.dispatch(get_outsourcing_erf_by_id_thunk(ref_id))
  },[])
  return (
    <AdminLayout>
        <JobAnalysisFormSection/>
    </AdminLayout>
  )
}
