import React from 'react'

function ProgressBar({currentStep, totalSteps}) {

    const width = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-orange-700">
        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${width}%` }}> Step {currentStep} of {totalSteps} </div>
    </div>
  )
}

export default ProgressBar