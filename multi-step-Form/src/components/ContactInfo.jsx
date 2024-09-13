import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactInfo = ({ prevStep }) => {
    const navigate = useNavigate();

    const handlePrev = () => {
        // Go back to the previous step
        prevStep();
        navigate('/');
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <form>
                {/* Form fields for contact info */}
               <div>
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                    >
                        Previous
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 ml-4"
                    >
                        Submit
                    </button>
               </div>
            </form>
        </div>
    );
};

export default ContactInfo;
