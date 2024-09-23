import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function StepWrapper({ children, setStep }) {
    const location = useLocation();

    useEffect(() => {
        // Update step based on the current URL path
        if (location.pathname === '/') {
            setStep(1);  // PersonalInfo step
        } 
        else if (location.pathname === '/contact-info') {
            setStep(2);  // ContactInfo step
        }
        else if(location.pathname === '/preferences-info'){
            setStep(3);  // PreferencesInfo step
        }
    }, [location, setStep]);

    return children;
}

export default StepWrapper;
