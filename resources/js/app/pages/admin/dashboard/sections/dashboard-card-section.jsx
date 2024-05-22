import React, { useEffect, useState } from 'react'
import { ArchiveBoxXMarkIcon, ArrowRightStartOnRectangleIcon, ArrowTopRightOnSquareIcon, BookOpenIcon, BriefcaseIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, ChatBubbleOvalLeftEllipsisIcon, CheckBadgeIcon, CheckCircleIcon, CheckIcon, ClipboardDocumentIcon, ClipboardDocumentListIcon, CursorArrowRaysIcon, CursorArrowRippleIcon, DocumentArrowDownIcon, DocumentChartBarIcon, DocumentCheckIcon, DocumentMagnifyingGlassIcon, DocumentMinusIcon, DocumentPlusIcon, ExclamationCircleIcon, HandThumbDownIcon, PencilSquareIcon, ReceiptRefundIcon, RectangleGroupIcon, UserGroupIcon, UserIcon, UserMinusIcon, XCircleIcon } from '@heroicons/react/24/outline'
import DashboardCardComponents from '../components/dashboard-card-components';
import { administrator_dashboard_service } from '@/app/pages/services/dashboard-service';

export default function DashboardCardSection() {

  const [data, setData] = useState({});
    useEffect(() => {
        async function get_tile(params) {
            const res = await administrator_dashboard_service();
            setData(res);
        }
        get_tile();
    }, []);

  const currentDate = new Date().toDateString();
  const currentHour = new Date().getHours();
  let greeting;
  if (currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium text-gray-800 ml-6">
          <b>{greeting}, Sarah Bangbang</b>
        </h2>
        <h2 className="text-lg font-medium text-gray-800 mr-6 flex items-center">
          <b className="mr-1"><CalendarDaysIcon className='h-6' /></b>
          <b>{currentDate}</b>
        </h2>
      </div>
      <div className='flex flex-col gap-9 mt-7'>
        <div>
          <h2 className="text-xl font-medium text-gray-800 ml-6">
            <b>Sourcing</b>
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 p-4 gap-5">
            <DashboardCardComponents
              name="Pending ERF"
              number={data?.pending ?? 0}
              icon={<ReceiptRefundIcon />}
            />
            <DashboardCardComponents
              name="On-going ERF"
               number={data?.status ?? 0}
              icon={<ArrowTopRightOnSquareIcon />}
            />
            <DashboardCardComponents
              name="Active ERF"
               number={data?.active ?? 0}
              icon={<RectangleGroupIcon />}
            />
            <DashboardCardComponents
              name="Completed ERF"
               number={data?.active ?? 0}
              icon={<CheckCircleIcon />}
            />
            <DashboardCardComponents
              name="Declined ERF"
               number={data?.status ?? 0}
              icon={<ArchiveBoxXMarkIcon />}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium text-gray-800 ml-6">
            <b>Recruitment</b>
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 p-4 gap-5">
            <DashboardCardComponents
              name="Pending Application"
               number={data?.status ?? 0}
              icon={<UserGroupIcon />}
            />
            <DashboardCardComponents
              name="Initial Phase Application"
               number={data?.status ?? 0}
              icon={<CursorArrowRaysIcon />}
            />
            <DashboardCardComponents
              name="Final Phase Application"
               number={data?.status ?? 0}
              icon={<CursorArrowRippleIcon />}
            />
            <DashboardCardComponents
              name="Passed Application"
               number={data?.status ?? 0}
              icon={<CheckCircleIcon />}
            />
            <DashboardCardComponents
              name="Failed Application"
               number={data?.status ?? 0}
              icon={<XCircleIcon />}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium text-gray-800 ml-6">
            <b>Hiring</b>
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 p-4 gap-5">
            <DashboardCardComponents
              name="Pending Offer"
               number={data?.status ?? 0}
              icon={<DocumentChartBarIcon />}
            />
            <DashboardCardComponents
              name="Declined Offer"
               number={data?.status ?? 0}
              icon={<DocumentMinusIcon />}
            />
            <DashboardCardComponents
              name="Accepted Offer"
               number={data?.status ?? 0}
              icon={<DocumentCheckIcon />}
            />
            <DashboardCardComponents
              name="Pre-Employment Completed"
               number={data?.status ?? 0}
              icon={<CheckCircleIcon />}
            />
            <DashboardCardComponents
              name="Contract Signing"
               number={data?.status ?? 0}
              icon={<PencilSquareIcon />}
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium text-gray-800 ml-6">
            <b>Onboarding</b>
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 p-4 gap-5">
            <DashboardCardComponents
              name="Onboarding Documents"
               number={data?.status ?? 0}
              icon={<ClipboardDocumentListIcon />}
            />
            <DashboardCardComponents
              name="Onboarded Applicants"
               number={data?.status ?? 0}
              icon={<BriefcaseIcon />}
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium text-gray-800 ml-6">
            <b>Employee Relation</b>
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 p-4 gap-5">
            <DashboardCardComponents
              name="Total Employee"
               number={data?.status ?? 0}
              icon={<UserGroupIcon />}
            />
            <DashboardCardComponents
              name="Incident Report"
               number={data?.status ?? 0}
              icon={<ExclamationCircleIcon />}
            />
            <DashboardCardComponents
              name="NTE"
               number={data?.status ?? 0}
              icon={<ChatBubbleOvalLeftEllipsisIcon />}
            />
            <DashboardCardComponents
              name="NDA"
               number={data?.status ?? 0}
              icon={<ChatBubbleLeftRightIcon />}
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium text-gray-800 ml-6">
            <b>Attrition</b>
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 p-4 gap-5">
            <DashboardCardComponents
              name="Resignation"
               number={data?.status ?? 0}
              icon={<UserMinusIcon />}
            />
            <DashboardCardComponents
              name="End of Probationary Employment"
               number={data?.status ?? 0}
              icon={<DocumentArrowDownIcon />}
            />
            <DashboardCardComponents
              name="Dismissal"
               number={data?.status ?? 0}
              icon={<HandThumbDownIcon />}
            />
            <DashboardCardComponents
              name="AWOL"
               number={data?.status ?? 0}
              icon={<ArrowRightStartOnRectangleIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
