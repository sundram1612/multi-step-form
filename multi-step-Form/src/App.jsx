import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import ContactInfo from './components/ContactInfo';
import ProgressBar from './components/ProgressBar';

const App = () => {
    const [step, setStep] = useState(1); // Track the current step
    const totalSteps = 2; // Total steps (for now, just PersonalInfo and ContactInfo)

    const nextStep = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <Router>
            <div>
                <ProgressBar currentStep={step} totalSteps={totalSteps} />

                <Routes>
                    <Route
                        path="/"
                        element={<PersonalInfo nextStep={nextStep} formData={{}} />}
                    />
                    <Route
                        path="/contact-info"
                        element={<ContactInfo prevStep={prevStep} />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
