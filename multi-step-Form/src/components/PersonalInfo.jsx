import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

function PersonalInfo({ nextStep }) {   //
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        ftitle: '',
        fathername: '',
        dob: '',
        gender: '',
        maritalStatus:'',
        hasLinkedin: '',
        linkedinUrl: '',
        hasGraduated: '',
        clgname: '',
        clgroll: '',
        clgcgpa: '',
        degreeprogram: '',
        passingyear: '',

    });

    const navigate = useNavigate();

    const handleNext = () => {
        if(validate()){            
            console.log(formData.name)
            const { name } = formData;
            sessionStorage.setItem('personalInfo', JSON.stringify({ name }));
            sessionStorage.setItem('formData', JSON.stringify(formData));
            nextStep(); 
            navigate('/contact-info'); // Navigate to ContactInfo component
        }       
    };

      
    const handleChange = (e) => {
        setFormData(prevFormData => ({...prevFormData, [e.target.name]: e.target.value}));
    };

    //  form validation
    const [errors, setErrors] = useState({});
    const validate = () => {
        let validationErrors = {}

        if (!formData.title) validationErrors.title = 'Title is required';
        if (!formData.name) validationErrors.name = 'Full name is required';
        if (!formData.ftitle) validationErrors.ftitle = 'Its title is required';
        if (!formData.name) validationErrors.fathername = 'fathers name is required';
        if (!formData.dob) validationErrors.dob = 'DOB is required';
        if (!formData.gender) validationErrors.gender = 'Gender is required';
        if (!formData.maritalStatus) validationErrors.maritalStatus = 'This field is required';
        if (!formData.hasLinkedin) validationErrors.hasLinkedin = 'This field is required';
        if (!formData.linkedinUrl) validationErrors.linkedinUrl = 'This field is required';
        if (!formData.hasGraduated) validationErrors.hasGraduated = 'This field is required';
        if (!formData.clgname) validationErrors.clgname = 'This field is required';
        if (!formData.passingyear) validationErrors.passingyear = 'This field is required';
        if (!formData.clgroll) validationErrors.clgroll = 'This field is required';
        if (!formData.clgcgpa) validationErrors.clgcgpa = 'This field is required';
        if (!formData.degreeprogram) validationErrors.degreeprogram = 'This field is required';
        
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

   // Saving input fields data even after navigating to nextSteps
    useEffect(() => {
        const savedFormData = sessionStorage.getItem('formData');
        // const savedState = sessionStorage.getItem('selectedState');

        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
    }, []);

    // Clear sessionStorage when page reloads
    useEffect(() => {
        const handlePageReload = () => {
            sessionStorage.removeItem('formData');
        };

        // Added event listener for page reload
        window.addEventListener('beforeunload', handlePageReload);

        return () => {
           window.removeEventListener('beforeunload', handlePageReload);
        };
    }, []);
    
  return (
    <div className='mb-10 bg-no-repeat bg-cover h-full'>
        <h1 className='text-[#5140e6] font-bold p-2 text-xl shadow-blue-400 rounded-lg shadow-md text-center flex justify-center md:w-[25%] mx-auto backdrop-blur-sm my-4'>Personal Information</h1>
        <form 
        className='min-w-xl md:max-w-screen-md mx-auto my-2 p-8 space-y-5 rounded-md shadow-lg backdrop-blur-sm' 
        style={{
            boxShadow: '0px 1px 20px #4169E1'
          }}
          >

            {/* title and Name */}
            <div className='flex gap-5 items-center'>
                <label className="text-lg font-medium text-gray-600" htmlFor="name">Name</label>
                <select
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="bg-transparent border-b-[2.5px] border-violet-600 py-2 pr-1 rounded-md focus:outline-none focus:border-blue-500 text-slate-300">
                    <option value="" disabled className='bg-black'>-title-</option>
                    <option value="mr" className='bg-black'>Mr.</option>
                    <option value="ms" className='bg-black'>Ms.</option>
                    <option value="mrs" className='bg-black'>Mrs.</option>
                    <option value="dr" className='bg-black'>Dr.</option>
                </select>
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full py-2 px-4 bg-transparent border-b-[2.5px] rounded-md focus:outline-none border-violet-700 focus:border-b-blue-500 text-slate-300 text-base"
                    placeholder="Enter your full name"
                    // disabled={disabled}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Father's name */}
            <div className='flex gap-5 items-center'>
                <label className="text-lg font-medium text-gray-600" htmlFor="fathername">Father's Name</label>
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
                    className="w-[68.4%] py-2 px-4 bg-transparent border-b-[2.5px] rounded-md focus:outline-none border-violet-700 focus:border-b-blue-500 text-slate-300 text-base"
                    placeholder="Enter your father's name"
                />
                {errors.fathername && <p className="text-red-500 text-sm">{errors.fathername}</p>}
            </div>
           

            {/* Date Of Birth */}
            <div className='flex md:justify-between gap-5 items-center'>
                <div className='flex flex-row gap-5 items-center'>
                    <label className="text-lg font-medium text-gray-600 hidden md:flex" htmlFor="dob">Date Of Birth</label>
                    <label className="text-lg font-medium text-gray-600 flex md:hidden" htmlFor="dob">D.O.B</label>
                    <input
                        type="date"
                        name="dob"
                        id="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="md:py-2 md:px-4 px-2 bg-transparent border-b-[2.5px] border-violet-800 rounded-md focus:outline-none focus:border-blue-500 mr-[5px] text-slate-300 text-base"
                    />
                    {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
                </div>

                {/* Gender */}
                <div className="flex gap-5">
                <label className="text-lg font-medium text-gray-600 flex items-center" htmlFor="gender">Gender</label>
                    <div className="flex md:space-x-[10px] gap-3 flex-wrap">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                id='gender'
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                                className="form-radio md:h-5 md:w-5 text-blue-600 text-base"
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
                                className="form-radio md:h-5 md:w-5 text-pink-600 text-base"
                            />
                            <span className="ml-1 text-slate-300 ">Female</span>
                        </label>
                        {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
                    </div>
                </div>
                
            </div>

            {/* Marital Status */}
                <div className="flex gap-5">
                    <label className="text-lg font-medium text-gray-600" htmlFor="maritalStatus">Marital Status</label>
                    <div className="flex space-x-5">
                        <label className="flex items-center">
                            <input
                                id='maritalStatus'
                                type="radio"
                                name="maritalStatus"
                                value="Married"
                                checked={formData.maritalStatus === 'Married'}
                                onChange={handleChange}
                                className="form-radio md:h-5 md:w-5 text-blue-600 text-base"
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
                                className="form-radio md:h-5 md:w-5 text-pink-600 text-base"
                            />
                            <span className="ml-1 text-slate-300 ">Unmarried</span>
                        </label>
                    </div>
                    {errors.maritalStatus && <p className="text-red-500 text-sm">{errors.maritalStatus}</p>}
                </div>                     
           
                <div className="flex flex-wrap gap-5">
                    <label className="text-lg font-medium text-gray-600">Do you have LinkedIn Account ?</label>
                    <div className="flex md:space-x-[10px] gap-3 flex-wrap">
                        <label className="flex items-center gap-2 text-white">
                            <input
                                type="checkbox"
                                name='hasLinkedin'
                                value="yes"
                                checked={formData.hasLinkedin === 'yes'}
                                onChange={handleChange}
                                className="form-checkbox md:h-5 md:w-5 text-blue-600 text-base"
                            />
                            Yes
                        </label>
                        <label className="flex items-center gap-2 text-white">
                            <input
                                type="checkbox"
                                name='hasLinkedin'
                                value="no"
                                checked={formData.hasLinkedin === 'no'}
                                onChange={handleChange}
                                className="form-checkbox md:h-5 md:w-5 text-pink-600 text-base"
                            />
                            No
                        </label>
                        {errors.hasLinkedin && <p className="text-red-500 text-sm">{errors.hasLinkedin}</p>}
                    </div>

                    {formData.hasLinkedin === 'yes' && (
                        <div className="flex space-x-5 items-center w-full">
                            <label className="text-lg font-medium text-gray-600 " htmlFor="linkedinUrl">LinkedIn URL</label>
                            <input
                                id='linkedinUrl'
                                type="url"
                                name="linkedinUrl"
                                value={formData.linkedinUrl}
                                onChange={handleChange}
                                placeholder="Enter your LinkedIn URL"
                                className="w-[65%] py-2 px-4 bg-transparent border-b-[2.5px] rounded-md focus:outline-none border-b-violet-700 focus:border-b-blue-500 text-slate-300 text-base"
                            />
                            {errors.linkedinUrl && <p className="text-red-500 text-sm">{errors.linkedinUrl}</p>}

                        </div>
                    )}
                </div>               

                <div className="flex flex-wrap gap-5 ">
                    <label className="text-lg font-medium text-gray-600">Have you completed your Graduation ?</label>
                    <div className="flex md:space-x-[10px] gap-3 flex-wrap">
                        <label className="flex items-center gap-2 text-white">
                            <input
                                type="checkbox"
                                value="yes"
                                name='hasGraduated'
                                checked={formData.hasGraduated === 'yes'}
                                onChange={handleChange}
                                className="form-checkbox md:h-5 md:w-5 text-blue-600 text-base"
                            />
                            Yes
                        </label>
                        <label className="flex items-center gap-2 text-white">
                            <input
                                type="checkbox"
                                value="no"
                                name='hasGraduated'
                                checked={formData.hasGraduated === 'no'}
                                onChange={handleChange}
                                className="form-checkbox md:h-5 md:w-5 text-pink-600 text-base"
                            />
                            No
                        </label>
                        {errors.hasGraduated && <p className="text-red-500 text-sm">{errors.hasGraduated}</p>}
                    </div>

                    {formData.hasGraduated === 'yes' && (
                        <div className='md:space-y-5'>
                            <div className='md:flex w-[100%]'>
                                <div className='flex items-center w-full md:space-x-5'>
                                    <label className="text-lg font-medium text-gray-600 w-36" htmlFor="clgname">College Name</label>
                                    <input
                                        id='clgname'
                                        type='text'
                                        name="clgname"
                                        value={formData.clgname}
                                        onChange={handleChange}
                                        placeholder="Enter your college name"
                                        className="md:w-[80%] w-full py-2 px-4 bg-transparent border-b-[2.5px] rounded-md focus:outline-none border-b-violet-700 focus:border-b-blue-600 text-gray-300"
                                    />
                                    {errors.clgname && <p className="text-red-500 text-sm">{errors.clgname}</p>}
                                </div>

                                <div className=' flex items-center space-x-5 md:relative left-5 mt-5'>
                                    <label className="text-lg font-medium text-gray-600" htmlFor="passingyear">Passing Year</label>
                                    <input 
                                        type="text" 
                                        id='passingyear'
                                        name="passingyear"
                                        value={formData.passingyear}
                                        onChange={handleChange}
                                        className="md:w-[45%] w-20 py-2 px-4 bg-transparent border-b-[2.5px] rounded-md focus:outline-none border-b-violet-700 focus:border-b-blue-600 text-gray-300"
                                    />
                                    {errors.passingyear && <p className="text-red-500 text-sm">{errors.passingyear}</p>}
                                </div>
                            </div>

                           <div className='md:flex md:space-x-12 mt-3'>
                                <div className='flex items-center space-x-3'>
                                    <label className="text-lg font-medium text-gray-600" htmlFor="cgpa">CGPA/ Percentage</label>
                                    <input
                                        type="text"
                                        id='cgpa'
                                        name="clgcgpa"
                                        value={formData.clgcgpa}
                                        onChange={handleChange}
                                        className="w-[30%] py-2 px-4 bg-transparent border-b-[2.5px] rounded-md focus:outline-none border-b-violet-700 focus:border-b-blue-600 text-gray-300"
                                    />
                                    {errors.clgcgpa && <p className="text-red-500 text-sm">{errors.clgcgpa}</p>}
                                </div>

                                <div className='flex items-center space-x-5 md:relative left-[40px] mt-5'>
                                    <label className="text-lg font-medium text-gray-600" htmlFor="rollno">Roll No.</label>
                                    <input
                                        type="text"
                                        id='rollno'
                                        name="clgroll"
                                        value={formData.clgroll}
                                        onChange={handleChange}
                                        placeholder='Enter roll no.'
                                        className="w-[45%] py-2 px-4 bg-transparent border-b-[2.5px] rounded-md focus:outline-none border-b-violet-700 focus:border-b-blue-600 text-gray-300"
                                    />
                                    {errors.clgroll && <p className="text-red-500 text-sm">{errors.clgroll}</p>}
                                </div>
                            </div>

                            <div className='mt-5'>
                                <label className='text-lg font-medium text-gray-600' htmlFor='degreeprogram'>Degree Program</label>
                                <select
                                id='degreeprogram'
                                name="degreeprogram"
                                value={formData.degreeprogram}
                                onChange={handleChange}
                                className="w-[100%] py-2 px-4 bg-transparent border-b-[2.5px] rounded-md focus:outline-none border-b-violet-700 focus:border-b-blue-600 text-gray-300"
                                >
                                    <option disabled value="">--Select Degree--</option>
                                    <option className='bg-black' value="BCA">BCA (Bachelor of Computer Applications)</option>
                                    <option className='bg-black' value="B.Tech">B.Tech (Bachelor of Technology)</option>
                                    <option className='bg-black' value="B.Sc">B.Sc (Bachelor of Science)</option>
                                    <option className='bg-black' value="BBA">BBA (Bachelor of Business Administration)</option>
                                    <option className='bg-black' value="B.Com">B.Com (Bachelor of Commerce)</option>
                                    <option className='bg-black' value="BA">BA (Bachelor of Arts)</option>
                                    <option className='bg-black' value="B.Arch">B.Arch (Bachelor of Architecture)</option>
                                    <option className='bg-black' value="B.Ed">B.Ed (Bachelor of Education)</option>
                                                                      

                                </select>
                                {errors.degreeprogram && <p className="text-red-500 text-sm">{errors.degreeprogram}</p>}

                            </div>

                        </div>

                    )}

                </div>

                <button
                     type="button"
                     onClick={handleNext}
                     className="px-4 py-2 font-medium bg-blue-500 text-white rounded-md hover:bg-blue-700 relative left-[90%] top-2 cursor-pointer">
                    Next
                </button>                        
               
            
        </form>
    </div>
  )
}

export default PersonalInfo