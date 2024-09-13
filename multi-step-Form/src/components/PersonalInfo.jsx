import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function PersonalInfo({nextStep}) {
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        ftitle: '',
        fathername: '',
        mtitle: '',
        mothername: '',
        dob: '',
        address: '',
        maritalStatus:'',
        city: '',
        country: '',
        pincode: '',
        gender: '',
    });

    const navigate = useNavigate();
  

    const handleNext = () => {
        if (validate()) {    // Move to the next step if validation passes
            nextStep(); 
            navigate('/contact-info'); // Navigate to ContactInfo component
        }
        
    };

    const [selectedState, setSelectedState] = useState('');

    const states = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
        'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
        'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
        'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
        'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ];

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
      };
      
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
        
        //  form validation
    const [errors, setErrors] = useState({});
    const validate = () => {
        let validationErrors = {};

        if (!formData.title) validationErrors.title = 'Title is required';
        if (!formData.name) validationErrors.name = 'Full name is required';
        if (!formData.name) validationErrors.fathername = 'fathers name is required';
        if (!formData.dob) validationErrors.dob = 'DOB is required';
        if (!formData.address) validationErrors.address = 'Address is required';
        if (!formData.city) validationErrors.city = 'City is required';
        if (!selectedState) validationErrors.state = 'State is required';
        if (!formData.pincode) validationErrors.pincode = 'Pin Code is required';
        if (!formData.country) validationErrors.country = 'Country is required';
        if (!formData.gender) validationErrors.gender = 'Gender is required';
        if (!formData.email) {
            validationErrors.email = 'Email is required';
        } 
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Email address is invalid';
        }
        if (!formData.mobile) {
            validationErrors.mobile = 'Mobile number is required';
        } 
        else if (!/^\d{10}$/.test(formData.mobile)) {
            validationErrors.mobile = 'Mobile number must be 10 digits';
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

  return (
    <div className=''>
        <h1 className='text-[#5140e6] font-bold p-2 text-xl shadow-gray-500 rounded-lg shadow-md flex justify-center w-[20%] mx-auto backdrop-blur-sm mt-1'>Personal Information</h1>
        <form 
        className='min-w-xl md:max-w-screen-md mx-auto my-2 p-8 space-y-5 rounded-md shadow-lg backdrop-blur-sm' 
        style={{
            boxShadow: '0 4px 15px purple, 0 8px 12px green'
          }}
          >

            {/* title and Name */}
            <div className='flex gap-2'>
                <h2 className='flex items-center md:text-xl  font-bold text-blue-300 font-serif'>Name:</h2>
                <select
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="bg-transparent border-b-[2.5px] border-violet-600 py-2 pr-1 rounded-md focus:outline-none focus:border-blue-500 text-slate-300">
                    <option className='bg-black'>-title-</option>
                    <option className='bg-black'>Mr.</option>
                    <option className='bg-black'>Ms.</option>
                    <option className='bg-black'>Mrs.</option>
                    <option className='bg-black'>Dr.</option>
                </select>
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full py-2 px-4 bg-transparent border-b-[2.5px] rounded-md focus:outline-none border-violet-700 focus:border-b-blue-500 text-slate-300"
                    placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Father's name */}
            <div className='flex gap-2'>
                <h2 className='flex items-center md:text-xl  font-bold text-blue-300 font-serif'>Father's Name:</h2>
                <select
                    name="ftitle"
                    id="ftitle"
                    value={formData.ftitle}
                    onChange={handleChange}
                    className="bg-transparent border-b-[2.5px] border-violet-700 py-2 pr-1 rounded-md focus:outline-none focus:border-blue-500 text-slate-300">
                    <option className='bg-black'>-title-</option>
                    <option className='bg-black'>Mr.</option>
                    <option className='bg-black'>Dr.</option>
                </select>
                {errors.ftitle && <p className="text-red-500 text-sm">{errors.ftitle}</p>}
                <input
                    type="text"
                    name="fathername"
                    id="fathername"
                    value={formData.fathername}
                    onChange={handleChange}
                    className="w-[63%] py-2 px-4 bg-transparent border-b-[2.5px] rounded-md focus:outline-none border-violet-700 focus:border-b-blue-500 text-slate-300"
                    placeholder="Enter your father's name"
                />
                {errors.fathername && <p className="text-red-500 text-sm">{errors.fathername}</p>}
            </div>

            {/* Mother's name */}
            <div className='flex gap-2'>
                <h2 className='flex items-center md:text-xl  font-bold text-blue-300 font-serif'>Mother's Name:</h2>
                <select
                    name="mtitle"
                    id="mtitle"
                    value={formData.mtitle}
                    onChange={handleChange}
                    className="bg-transparent border-b-[2.5px] border-violet-700 py-2 pr-1 rounded-md focus:outline-none focus:border-blue-500 text-slate-300">
                    <option className='bg-black'>-title-</option>
                    <option className='bg-black'>Mrs.</option>
                    <option className='bg-black'>Dr.</option>
                </select>
                <input
                    type="text"
                    name="mothername"
                    id="mothername"
                    value={formData.mothername}
                    onChange={handleChange}
                    className="w-[62%] py-2 px-4 bg-transparent border-b-[2.5px] rounded-md focus:outline-none border-violet-700 focus:border-b-blue-500 text-slate-300"
                    placeholder="Enter your father's name"
                />
            </div>

            {/* Date Of Birth */}
            <div className='flex md:justify-between gap-x-2'>
                <div className='flex flex-row gap-[2.8px]'>
                <h2 className='items-center  md:text-xl  font-bold text-blue-300 font-serif mr-1 hidden md:flex'>Date Of Birth:</h2> 
                <h2 className='items-center  md:text-xl  font-bold text-blue-300 font-serif mr-1 flex md:hidden'>D.O.B</h2>
                    <input
                        type="date"
                        name="dob"
                        id="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="md:py-2 md:px-4 px-2 bg-transparent border-b-[2.5px] border-violet-800 rounded-md focus:outline-none focus:border-blue-500 mr-[5px] text-slate-300"
                    />
                    {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
                </div>

                {/* Gender */}
                <div className="flex space-x-4">
                    <h2 className='flex items-center  md:text-xl  font-bold text-blue-300 font-serif'>Gender:</h2>
                    <div className="flex md:space-x-[10px] flex-wrap ">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                                className="form-radio md:h-5 md:w-5 text-blue-600"
                            />
                            <span className="ml-1 text-slate-300 ">Male</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleChange}
                                className="form-radio md:h-5 md:w-5 text-pink-600"
                            />
                            <span className="ml-1 text-slate-300 ">Female</span>
                        </label>
                        {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
                    </div>
                </div>
                
            </div>

            {/* Marital Status */}
                 <div className="flex">
                    <h2 className='flex items-center  md:text-xl  font-bold text-blue-300 font-serif mr-2'>Marital Status:</h2>
                    <div className="flex space-x-5">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="maritalStatus"
                                value="Married"
                                checked={formData.maritalStatus === 'Married'}
                                onChange={handleChange}
                                className="form-radio md:h-5 md:w-5 text-blue-600"
                            />
                            <span className="ml-1 text-slate-300 ">Married</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="maritalStatus"
                                value="Unmarried"
                                checked={formData.maritalStatus === 'Unmarried'}
                                onChange={handleChange}
                                className="form-radio md:h-5 md:w-5 text-pink-600"
                            />
                            <span className="ml-1 text-slate-300 ">Unmarried</span>
                        </label>
                    </div>
                </div>

            {/* Address */}
            <div className='flex gap-2'>
                <h2 className='flex items-center  md:text-xl  font-bold text-blue-300 font-serif'>Address:</h2>
                <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full py-2 px-4 bg-transparent border-b-[2.5px] border-violet-700 text-slate-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your address"
                />
                {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>                
           
                {/* City, State, Country */}
                <div className='flex flex-wrap gap-4 md:items-center md:justify-between'>
                    <div className='flex items-center'>
                         <h2 className=' md:text-xl  font-bold text-blue-300 font-serif mr-2'>City:</h2>

                         <input 
                         type="text"
                         value={formData.city}
                         id='city' 
                         name="city"
                         onChange={handleChange}
                         placeholder='Enter your city'
                         className="py-2 px-4 bg-transparent text-slate-300 border-b-[2.5px] border-violet-800 rounded-md focus:outline-none focus:border-blue-500"
                         />
                         {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                    </div>

                    <div className='flex items-center'>
                         <h2 className=' md:text-xl  font-bold text-blue-300 font-serif mr-2'>Pin Code:</h2>
                         <input 
                         type="text"
                         value={formData.pincode}
                         id='pincode' 
                         name="pincode"
                         onChange={handleChange}
                         placeholder='Enter pin code'
                         className="py-2 px-4 bg-transparent text-slate-300 border-b-[2.5px] border-violet-800 rounded-md focus:outline-none focus:border-blue-500 overflow-hidden"
                         />
                         {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
                    </div>


                    <div className='flex items-center'>
                        <h2 className=' md:text-xl  font-bold text-blue-300 font-serif mr-2'>State:</h2>
                        <select
                            id="select-state"
                            value={selectedState}
                            onChange={handleStateChange}
                            className="py-2 px-6 bg-transparent text-slate-300 border-b-[2.5px] focus:border-blue-500 border-violet-800 rounded-md focus:outline-none "
                            >
                            <option  value="">--Choose a state--</option>
                            {states.map((state, index) => (
                                <option className='bg-black' key={index} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                        {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                    </div>

                    <div className='flex items-center'>
                        <h2 className=' md:text-xl  font-bold text-blue-300 font-serif mr-2'>Country:</h2>
                       <select 
                       value={formData.country}
                       onChange={handleChange}
                       name="country" 
                       id="country"
                       className="py-2 px-4 bg-transparent text-slate-300 border-b-[2.5px] focus:border-blue-500 border-violet-800 rounded-md focus:outline-none"
                       >
                        <option className='bg-black' value="">--Choose a country--</option>
                        <option value='India' className='bg-black'>INDIA</option>
                       </select>
                       {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleNext}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Next
                </button>
            
        </form>
    </div>
  )
}

export default PersonalInfo