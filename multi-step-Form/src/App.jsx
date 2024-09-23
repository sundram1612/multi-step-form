import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import ContactInfo from './components/ContactInfo';
import PreferencesInfo from './components/PreferencesInfo';
import ProgressBar from './components/ProgressBar';
import StepWrapper from './components/StepWrapper';
import ThankYou from './components/ThankYou';

const App = () => {
    const [step, setStep] = useState(() => {     // Track the current step
        const savedStep = localStorage.getItem('currentStep')
        return savedStep ? parseInt(savedStep) : 1;
    });

    // const [formData, setFormData] = useState({});
    const totalSteps = 3; // Total steps (for now, just PersonalInfo and ContactInfo)

 // Save the current step to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('currentStep', step);
    }, [step]);

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



    useEffect(() => {
        localStorage.setItem('currentStep', step)
    }, [step]);

    useEffect(() => {
        const handlePageReload = () => {
            localStorage.removeItem('currentStep');
        };

        window.addEventListener('beforeunload', handlePageReload);

        return () => {
            window.removeEventListener('beforeunload', handlePageReload);
        };
    }, []);

    
     // Conditional rendering of ProgressBar based on route
     const shouldShowProgressBar = location.pathname !== '/thank-you';

    return (
       
        <Router>
        <StepWrapper setStep={setStep}>
            <div className="m-4">
                
                {/* Conditionally show ProgressBar based on current route */}
                {shouldShowProgressBar && (
                        <ProgressBar currentStep={step} totalSteps={totalSteps} />
                    )}

                {/* Route components */}
                <Routes>
                    <Route
                        path="/"
                        element={<PersonalInfo nextStep={nextStep}  />}
                    />
                    <Route
                        path="/contact-info"
                        element={<ContactInfo prevStep={prevStep} nextStep={nextStep}  />}
                    />
                    <Route
                        path='/preferences-info'
                        element={<PreferencesInfo prevStep={prevStep}  />}
                    />
                    <Route
                        path='/thank-you'
                        element={<ThankYou />}
                    />
                </Routes>
            </div>
        </StepWrapper>
    </Router>
    
    );
};

export default App;

// formData={formData} setFormData={setFormData}