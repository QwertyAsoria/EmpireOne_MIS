import React, { useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import Wysiwyg from "../../components/wysiwyg";

export function OnboardingDocsStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);

    const forms = [
        <div key={0}>
            <Wysiwyg
                label=""
                name="wysiwyg"
                value=""
            // onChange={formHandler}
            />
        </div>,
        <div key={0}>
            <Wysiwyg
                label=""
                name="wysiwyg"
                value=""
            // onChange={formHandler}
            />
        </div>,
        <div key={0}>
            <h1>Sample Form</h1>
        </div>,
        <div key={0}>
            <h1>Another Sample Form</h1>
        </div>,
    ];

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const handleStepClick = (step) => setActiveStep(step);

    return (
        <div className="bg-gray-200 transition-colors duration-300 overflow-y-scroll h-screen p-14">
            <div className="container mx-auto items-center justify-center w-full px-6 py-5 shadow-2xl shadow-black bg-white rounded-lg">
                <div className="flex items-center justify-center p-3 mb-6">
                    <img className="w-72" src="images/newlogo.png" alt="logo" />
                </div>
                <p className="mb-4"><b>ONBOARDING</b></p>
                <Stepper
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                >
                    {forms.map((form, index) => (
                        <Step
                            key={index}
                            onClick={() => handleStepClick(index)}
                            className="p-2 w-10 items-center justify-center"
                        >
                            {index + 1}
                        </Step>
                    ))}
                </Stepper>
                <div className="mb-2 mt-4">
                    {forms[activeStep]}
                    <div className="flex items-center mb-2 mt-11 pt-4">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                        <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"><b>I fully understand the Attendance Policy.</b></label>
                    </div>
                </div>
                <div className="mt-10 flex justify-between">
                    <Button onClick={handlePrev} disabled={isFirstStep} className={isFirstStep ? "disabledPrevButton bg-slate-400" : ""}>
                        Prev
                    </Button>
                    {isLastStep ? (
                        <Button onClick={handleNext}>
                            Finish
                        </Button>
                    ) : (
                        <Button onClick={handleNext}>
                            Next
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}