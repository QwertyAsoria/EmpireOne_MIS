import React, { useState } from 'react';
import CheckboxInputComponent from '../components/checkbox-input-component';
import TableRowComponent from '../components/table-row-component';

export default function ExitInterviewFormSection() {

    return (
        <div className="h-screen overflow-hidden ">
            <div className="bg-cover bg-[url('/images/SCemp.jpg')] transition-colors duration-300 h-full overflow-y-scroll">
                <div className="container mx-auto flex justify-center">
                    <div className="bg-white shadow-2xl shadow-black rounded-lg p-6 mt-12 w-full">
                        <div className="flex items-center justify-center p-3">
                            <img className="w-60" src="/images/newlogo.png" alt="logo" />
                        </div>
                        <div className='flex text-2xl items-center justify-center'>
                            <h1><b>EXIT INTERVIEW</b></h1>
                        </div>
                        <form className='border rounded-lg p-3.5'>
                            <div className='flex flex-1 gap-4 border-4 border-gray-400 p-4 mb-3'>
                                <div className='flex w-full'>
                                    <div className="flex flex-col gap-4 mb-4 w-full">
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor=""><b>Full Name:</b></label>
                                            <input type="text" placeholder="Full name" className="border p-2 rounded w-full" />
                                        </div>
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor=""><b>Account / Department:</b></label>
                                            <input type="text" placeholder="Account / Department:" className="border p-2 rounded w-full" />
                                        </div>
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor=""><b>Date Hired:</b></label>
                                            <input type="date" placeholder="Date Hired:" className="border p-2 rounded w-full" />
                                        </div>
                                        <div className=" w-full">
                                            <label htmlFor=""><b>Immediate Supervisor:</b></label>
                                            <input type="text" placeholder="Immediate Supervisor:" className="border p-2 rounded w-full " />
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor=""><b>Employment Status:</b></label>
                                            <input type="text" placeholder="Employment Status:" className="border p-2 rounded w-full " />
                                        </div>
                                    </div>
                                </div>

                                <div className='flex w-full'>
                                    <div className="flex flex-col gap-4 mb-4 w-full">
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor=""><b>ID Number:</b></label>
                                            <input type="text" placeholder="Full name" className="border p-2 rounded w-full" />
                                        </div>
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor=""><b>Position Title:</b></label>
                                            <input type="text" placeholder="Position Title:" className="border p-2 rounded w-full" />
                                        </div>
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor=""><b>Date Separated:</b></label>
                                            <input type="date" placeholder="Date Separated:" className="border p-2 rounded w-full" />
                                        </div>
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor=""><b>Department Manager:</b></label>
                                            <input type="text" placeholder="" className="border p-2 rounded w-full" />
                                        </div>
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor=""><b>Reason for Separation::</b></label>
                                            <input type="text" placeholder="" className="border p-2 rounded w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-1 gap-4 border-4 border-gray-400 p-4 mb-3'>
                                <div className='flex w-full'>
                                    <div className="flex flex-col gap-4 mb-4 w-full">
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor=""><b>1. Please describe the main reason for leaving your current position.</b></label>
                                            <textarea type="text" placeholder="" className="border p-2 rounded w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-1 gap-4 border-4 border-gray-400 p-4 mb-3'>
                                <div className='flex w-full'>
                                    <div className="flex flex-col gap-4 mb-4 w-full">
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor=""><b>2. Kindly choose the following factors below that influence your decision to leave.</b></label>
                                            <CheckboxInputComponent label="Pay" />
                                            <CheckboxInputComponent label="Supervisor" />
                                            <CheckboxInputComponent label="Work Condition (Schedule, Setting, Travel, Flexibility)" />
                                            <CheckboxInputComponent label="Location / Commute" />
                                            <CheckboxInputComponent label="Management" />
                                            <CheckboxInputComponent label="Career Shift" />
                                            <CheckboxInputComponent label="Health Reasons" />
                                            <CheckboxInputComponent label="Family Care" />
                                            <CheckboxInputComponent label="Too Strict Company Policy" />
                                            <CheckboxInputComponent label="No Career Development / Enhancement" />
                                            <label htmlFor="" className='mt-1'>Others:</label>
                                            <input type="text" placeholder="" className="border p-2 rounded w-full " />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-1 gap-4 border-4 border-gray-400 p-4 mb-3'>
                                <div className='flex w-full'>
                                    <div className="flex flex-col gap-4 mb-4 w-full">
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor=""><b>3. Is there anything you wish you had known before you took the job?</b></label>
                                            <textarea type="text" placeholder="" className="border p-2 rounded w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-1 gap-4 border-4 border-gray-400 p-4 mb-3'>
                                <div className='flex w-full'>
                                    <div className="flex flex-col gap-4 mb-4 w-full">
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor=""><b>4. What would you suggest to the management to make our organization a better place to work?</b></label>
                                            <textarea type="text" placeholder="" className="border p-2 rounded w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-1 gap-4 border-4 border-gray-400 p-4 mb-3'>
                                <div className='flex w-full'>
                                    <div className="flex flex-col gap-4 mb-4 w-full">
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor=""><b>5. Do you feel you received appreciate support to enable to do your job?</b></label>
                                            <textarea type="text" placeholder="" className="border p-2 rounded w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Instructions: Please rate the following items based on your experience work in the company.</p>
                            <div className='flex flex-1 w-full gap-8 mt-1'>
                                <h1><b>1. Very Satisfied,</b></h1>
                                <h1><b>2. Satisfied,</b></h1>
                                <h1><b>3. Neutral,</b></h1>
                                <h1><b>4. Dissatisfied,</b></h1>
                                <h1><b>5. Very dissatisfied</b></h1>
                            </div>

                            <div className='flex flex-1 gap-4 border-4 border-gray-400 mt-2 mb-3'>
                                <table class="table table-bordered text-center w-full">
                                    <thead className='border-b-2 border-gray-300 w-full'>
                                        <tr>
                                            <th className="border border-gray-300 py-2">Your Job</th>
                                            <th className="border border-gray-300 py-2">1</th>
                                            <th className="border border-gray-300 py-2">2</th>
                                            <th className="border border-gray-300 py-2">3</th>
                                            <th className="border border-gray-300 py-2">4</th>
                                            <th className="border border-gray-300 py-2">5</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <TableRowComponent
                                                title="Opportunities to use your abilities and skills"
                                            />
                                            <TableRowComponent
                                                title="Expectation of the Job Task"
                                            />
                                            <TableRowComponent
                                                title="Training received"
                                            />
                                            <TableRowComponent
                                                title="Availability of the resources needed for the job"
                                            />
                                            <TableRowComponent
                                                title="Recognition of your contribution"
                                            />
                                            <TableRowComponent
                                                title="Cooperation within your department"
                                            />
                                            <TableRowComponent
                                                title="Cooperation with other department"
                                            />
                                    </tbody>
                                </table>
                            </div>

                            <div className='flex flex-1 gap-4 border-4 border-gray-400 mt-5 mb-3'>
                                <table class="table table-bordered text-center w-full">
                                    <thead className='border-b-2 border-gray-300 w-full'>
                                        <tr>
                                            <th className="border border-gray-300 py-2">Supervisor and Co-worker</th>
                                            <th className="border border-gray-300 py-2">1</th>
                                            <th className="border border-gray-300 py-2">2</th>
                                            <th className="border border-gray-300 py-2">3</th>
                                            <th className="border border-gray-300 py-2">4</th>
                                            <th className="border border-gray-300 py-2">5</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <TableRowComponent
                                                title="My Supervisor had an understanding of my responsibilities"
                                            />
                                            <TableRowComponent
                                                title="Overall relationship with my supervisor"
                                            />
                                            <TableRowComponent
                                                title="I was treated fairly by my supervisor"
                                            />
                                            <TableRowComponent
                                                title="My supervisor was receptive to and implemented suggestion"
                                            />
                                            <TableRowComponent
                                                title="My supervisor's ability to handle complaints and problem"
                                            />
                                            <TableRowComponent
                                                title="My supervisor has good/best management skills"
                                            />
                                            <TableRowComponent
                                                title="My relationship with my co-workers"
                                            />
                                    </tbody>
                                </table>
                            </div>



                            <div className="flex justify-end mt-2.5">
                                <button type="button" id="theme-toggle" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors">
                                    SUBMIT EXIT INTERVIEW
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
