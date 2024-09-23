import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const ContactInfo = ({ prevStep, nextStep }) => {
    const [formData2, setFormData2] = useState({
        email: '',
        mobile: '',
        address: '',
        city: '',
        country: '',
        pincode: '',
        
    })
    const [name, setName] = useState('');
    const [selectedState, setSelectedState] = useState('');
    
    // form validation
    const [errors, setErrors] = useState({});
    const validate = () => {
        let validationErrors = {}

        if (!formData2.address) validationErrors.address = 'Address is required';
        if (!formData2.city) validationErrors.city = 'City is required';
        if (!selectedState) validationErrors.state = 'State is required';
        if (!formData2.pincode) validationErrors.pincode = 'Pin Code is required';
        if (!formData2.country) validationErrors.country = 'Country is required';
        if (!formData2.email) {
            validationErrors.email = 'Email is required';
        } 
        else if (!/\S+@\S+\.\S+/.test(formData2.email)) {
            validationErrors.email = 'Email address is invalid';
        }
        if (!formData2.mobile) {
            validationErrors.mobile = 'Mobile number is required';
        } 
        else if (!/^\d{10}$/.test(formData2.mobile)) {
            validationErrors.mobile = 'Mobile number must be 10 digits';
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    }


    const states = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
        'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
        'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
        'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
        'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ];   

    // handling onChange
    const handleInputChange = (e) => {
        // const { name, value } = e.target;   // using destructuring
        setFormData2(prevFormData => ({...prevFormData, [e.target.name]: e.target.value}));
    }
  
    // handling state onChange
    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
      };   

    // Handle Navigation 
    const navigate = useNavigate();
    const handlePrev = () => {
        // Go back to the previous step
        sessionStorage.setItem('formData2', JSON.stringify(formData2));
        sessionStorage.setItem('selectedState', selectedState);
        prevStep();
        navigate('/');
    };
    const handleNext = () => {
        // Go to the next step
        if(validate()){
            sessionStorage.setItem('formData2', JSON.stringify(formData2));
            sessionStorage.setItem('selectedState', selectedState);
            // console.log(formData2.email)
            nextStep();
            navigate('/preferences-info');
        }
    };

    // Saving input fields data even after navigating to nextSteps
    useEffect(() => {
        const savedFormData = sessionStorage.getItem('formData2');
        const savedState = sessionStorage.getItem('selectedState');

        if (savedFormData) {
            setFormData2(JSON.parse(savedFormData));
        }
        if (savedState) {
            setSelectedState(savedState);
        }
    }, []);
    
     // Clear sessionStorage when page reloads
    useEffect(() => {
        const handlePageReload = () => {
            sessionStorage.removeItem('formData2');
            sessionStorage.removeItem('selectedState');
        };
        // Added event listener for page reload
        window.addEventListener('beforeunload', handlePageReload);
        return () => {
           window.removeEventListener('beforeunload', handlePageReload);
        };
    }, []);

    // Retrieve the "name" field from sessionStorage on component mount
    useEffect(() => {
        const savedData = sessionStorage.getItem('personalInfo');
        if (savedData) {
            const { name } = JSON.parse(savedData);
            setName(name);
        }
    }, []);

   
    return (
        <div className='bg-no-repeat bg-cover h-full'>            
            <h1 className='text-[#5140e6] font-bold p-2 text-xl shadow-blue-400 rounded-lg shadow-md text-center flex justify-center md:w-[25%] mx-auto backdrop-blur-sm my-4'>Contact Information</h1>

            <form className='min-w-xl md:max-w-screen-md mx-auto my-2 p-8 space-y-5 rounded-md shadow-lg backdrop-blur-sm' style={{
            boxShadow: '0px 1px 20px #4169E1'}}>
              
                <div className="name flex gap-5 items-center">
                    <label className="text-lg font-medium text-gray-600" htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        disabled={true}
                        placeholder="Enter your name"
                        className="w-full py-2 px-4 bg-transparent border-b-[2.5px] rounded-md focus:outline-none border-violet-700 focus:border-b-blue-500 text-slate-500 text-base"
                    />
                    
                </div>

                <div className='md:flex gap-5'>
                    <div className="email flex gap-5 w-full">
                        <label className="text-lg font-medium text-gray-600 flex items-center" htmlFor="email">Email</label>
                        <input
                            id='email'
                            type="email"
                            name="email"
                            value={formData2.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="w-full py-2 px-4 bg-transparent border-b-[2.5px] rounded-md focus:outline-none border-violet-700 focus:border-b-blue-500 text-slate-300 text-base"
                            autoComplete='email'
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="mobile flex gap-5 w-full mt-5 md:mt-2">
                        <label className="text-lg font-medium text-gray-600 flex items-center" htmlFor="mobile">Mobile</label>
                        <input
                            id='mobile'
                            type="tel"
                            name="mobile"
                            value={formData2.mobile}
                            onChange={handleInputChange}
                            placeholder="Enter your mobile number"
                            className="w-full py-2 px-4 bg-transparent border-b-[2.5px] rounded-md focus:outline-none border-violet-700 focus:border-b-blue-500 text-slate-300 text-base"
                        />
                        {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                    </div>
                </div>

                 {/* Address */}
                <div className='flex gap-7 items-center'>
                    <label className="text-lg font-medium text-gray-600" htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={formData2.address}
                        onChange={handleInputChange}
                        className="w-full py-2 px-4 bg-transparent border-b-[2.5px] border-violet-700 text-slate-300 rounded-md focus:outline-none focus:border-blue-500 text-base"
                        placeholder="Enter your address"
                    />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div> 

                {/* City, pincode, State, Country */}
                <div className='gap-4 md:items-center md:justify-between space-y-5'>
                    <div className='flex items-center gap-[60px]'>
                        <label className="text-lg font-medium text-gray-600" htmlFor="city">City</label>

                         <input 
                         type="text"
                         value={formData2.city}
                         id='city' 
                         name="city"
                         onChange={handleInputChange}
                         placeholder='Enter your city'
                         className="w-[87%] py-2 px-4 bg-transparent text-slate-300 border-b-[2.5px] border-violet-800 rounded-md focus:outline-none focus:border-blue-500 text-base"
                         />
                         {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                    </div>

                    <div className='flex items-center gap-5'>
                        <label className="text-lg font-medium text-gray-600" htmlFor="pincode">Pin Code</label>
                         <input 
                         type="text"
                         value={formData2.pincode}
                         id='pincode' 
                         name="pincode"
                         onChange={handleInputChange}
                         placeholder='Enter pin code'
                         className="w-[86%] py-2 px-4 bg-transparent text-slate-300 border-b-[2.5px] border-violet-800 rounded-md focus:outline-none focus:border-blue-500  text-base"
                         />
                         {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
                    </div>


                    <div className='flex items-center gap-12'>
                    <label className="text-lg font-medium text-gray-600 flex " htmlFor="select-state">State</label>
                        <select
                            id="select-state"
                            value={selectedState}
                            onChange={handleStateChange}
                            className="w-[90%] py-2 px-6 bg-transparent text-slate-300 border-b-[2.5px] focus:border-blue-500 border-violet-800 rounded-md focus:outline-none "
                            >
                            <option  value="" disabled>--Choose a state--</option>
                            {states.map((state, index) => (
                                <option className='bg-black text-base' key={index} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                        {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                    </div>

                    <div className='flex items-center gap-5'>
                        <label className="text-lg font-medium text-gray-600" htmlFor="country">Country</label>
                       <select 
                       value={formData2.country}
                       onChange={handleInputChange}
                       name="country" 
                       id="country"
                       className="w-full py-2 px-4 bg-transparent text-slate-300 border-b-[2.5px] focus:border-blue-500 border-violet-800 rounded-md focus:outline-none"
                       >
                        <option className='bg-black text-base' disabled value="">--Choose a country--</option>
                        <option value='India' className='bg-black text-base'>INDIA</option>
                       </select>
                       {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                    </div>
                </div>           

                    
                

               <div className='flex justify-between'>
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 ml-4"
                    >
                        Next
                    </button>
               </div>
            </form>
        </div>
    );
};

export default ContactInfo;
