import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


function PreferencesInfo({prevStep}) {
    const [formData3, setFormData3] = useState({
        preferredLanguage: '',
        preferredContactMethod: '',
        preferredTimezone: '',
        preferredNewsletterFrequency: '',
    })
    
    const [errors, setErrors] = useState(false)
    const validate = () => {
        let validationErrors = {}
        if (!formData3.preferredLanguage) validationErrors.preferredLanguage = 'This field is required';
        if (!formData3.preferredContactMethod) validationErrors.preferredContactMethod = 'This field is required';
        if (!formData3.preferredTimezone) validationErrors.preferredTimezone = 'This field is required';
        if (!formData3.preferredNewsletterFrequency) validationErrors.preferredNewsletterFrequency = 'This field is required';
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData3(prevformData3 => ({...prevformData3, [e.target.name]: e.target.value}))
    }

    const navigate = useNavigate();
    const handlePrev = () => {
        // Go back to the previous step
        sessionStorage.setItem('formData3', JSON.stringify(formData3));
        prevStep();
        navigate('/contact-info');
    };
    // Handle form submission and redirect to new page
    const handleSubmit = (e) => {
        // console.log('validating ')
        if(validate()){
        sessionStorage.setItem('formData3', JSON.stringify(formData3));
        e.preventDefault();
        navigate('/thank-you');
       }
    };

    // Saving input fields data even after navigating to nextSteps
    useEffect(() => {
        const savedFormData = sessionStorage.getItem('formData3');

        if (savedFormData) {
            setFormData3(JSON.parse(savedFormData));
        }
    }, []);

    // Clear sessionStorage when page reloads
    useEffect(() => {
        const handlePageReload = () => {
            sessionStorage.removeItem('formData3');
        };
        // Added event listener for page reload
        window.addEventListener('beforeunload', handlePageReload);
        return () => {
           window.removeEventListener('beforeunload', handlePageReload);
        };
    }, []);

  return (
    <div className='h-screen bg-no-repeat bg-cover mt-5'>
        <h1 className='text-[#5140e6] font-bold p-2 text-xl shadow-blue-400 rounded-lg shadow-md text-center flex justify-center md:w-[25%] mx-auto backdrop-blur-sm my-4'>Preferences Information</h1>
        <form  className='min-w-xl md:max-w-screen-md mx-auto my-2 p-8 space-y-5 rounded-md shadow-lg backdrop-blur-sm' style={{
            boxShadow: '0px 1px 20px #4169E1'}}>

                {/* preffered contact method */}
                <div>
                <label className="text-lg font-medium text-gray-600" htmlFor="preferredContactMethod">Preferred Contact Method</label>
                <select
                    name="preferredContactMethod"
                    value={formData3.preferredContactMethod}
                    onChange={handleChange}
                    className="w-full bg-transparent text-gray-300 px-3 py-2 border-[1.5px] border-purple-300 rounded-md outline-none focus:border-blue-600"
                >
                    <option value="" disabled >Select contact method</option>
                    <option className='bg-black' value="email">Email</option>
                    <option className='bg-black' value="sms">SMS</option>
                    <option className='bg-black' value="whatsapp">WhatsApp</option>
                </select>
                {errors.preferredContactMethod && <p className="text-red-500 text-sm">{errors.preferredContactMethod}</p>}
                </div>

                {/* Preferred Language */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor='preferredLanguage'>Preferred Language</label>
                    <select
                        name="preferredLanguage"
                        id='preferredLanguage'
                        value={formData3.preferredLanguage}
                        onChange={handleChange}
                        className="w-full px-3 bg-transparent text-gray-300 py-2 border-[1.5px] border-purple-300 rounded-md outline-none focus:border-blue-600"
                    >
                        <option className='bg-black' value="" disabled >Select language</option>
                        <option className='bg-black' value="Assamese">Assamese</option>
                        <option className='bg-black' value="Bengali">Bengali</option>
                        <option className='bg-black' value="Bodo">Bodo</option>
                        <option className='bg-black' value="Dogri">Dogri</option>
                        <option className='bg-black' value="Gujarati">Gujarati</option>
                        <option className='bg-black' value="Hindi">Hindi</option>
                        <option className='bg-black' value="Kannada">Kannada</option>
                        <option className='bg-black' value="Kashmiri">Kashmiri</option>
                        <option className='bg-black' value="Konkani">Konkani</option>
                        <option className='bg-black' value="Maithili">Maithili</option>
                        <option className='bg-black' value="Malayalam">Malayalam</option>
                        <option className='bg-black' value="Manipuri">Manipuri</option>
                        <option className='bg-black' value="Marathi">Marathi</option>
                        <option className='bg-black' value="Nepali">Nepali</option>
                        <option className='bg-black' value="Odia">Odia</option>
                        <option className='bg-black' value="Punjabi">Punjabi</option>
                        <option className='bg-black' value="Sanskrit">Sanskrit</option>
                        <option className='bg-black' value="Santali">Santali</option>
                        <option className='bg-black' value="Sindhi">Sindhi</option>
                        <option className='bg-black' value="Tamil">Tamil</option>
                        <option className='bg-black' value="Telugu">Telugu</option>
                        <option className='bg-black' value="Urdu">Urdu</option>
                    </select>
                    {errors.preferredLanguage && <p className="text-red-500 text-sm">{errors.preferredLanguage}</p>}
                </div>

                 {/* Preferred Newsletter Frequency */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor='preferredNewsletterFrequency'>Email Newsletter Frequency</label>
                    <select
                        name="preferredNewsletterFrequency"
                        id='preferredNewsletterFrequency'
                        value={formData3.preferredNewsletterFrequency}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-transparent text-gray-300 border-[1.5px] border-purple-300 rounded-md outline-none focus:border-blue-600"
                    >
                        <option value="" disabled >Select frequency</option>
                        <option className='bg-black' value="daily">Daily</option>
                        <option className='bg-black' value="weekly">Weekly</option>
                        <option className='bg-black' value="monthly">Monthly</option>
                    </select>
                    {errors.preferredNewsletterFrequency && <p className="text-red-500 text-sm">{errors.preferredNewsletterFrequency}</p>}
                </div>

                 {/* Preferred Timezone */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor='preferredTimezone'>Preferred Timezone (GMT)</label>
                    <select
                        name="preferredTimezone"
                        id='preferredTimezone'
                        value={formData3.preferredTimezone}
                        onChange={handleChange}
                        className="w-full bg-transparent  px-3 py-2 border-[1.5px] border-purple-300 text-gray-300 rounded-md outline-none focus:border-blue-600 "
                    >
                        <option className='bg-black' value="">Select timezone</option>
                        <option className='bg-black' value="GMT+05:30">(GMT+05:30) India Standard Time (IST)</option>
                        <option className='bg-black' value="GMT-12:00">(GMT-12:00) International Date Line West</option>
                        <option className='bg-black' value="GMT-11:00">(GMT-11:00) Midway Island, Samoa</option>
                        <option className='bg-black' value="GMT-10:00">(GMT-10:00) Hawaii</option>
                        <option className='bg-black' value="GMT-09:00">(GMT-09:00) Alaska</option>
                        <option className='bg-black' value="GMT-08:00">(GMT-08:00) Pacific Time (US & Canada)</option>
                        <option className='bg-black' value="GMT-07:00">(GMT-07:00) Mountain Time (US & Canada)</option>
                        <option className='bg-black' value="GMT-06:00">(GMT-06:00) Central Time (US & Canada)</option>
                        <option className='bg-black' value="GMT-05:00">(GMT-05:00) Eastern Time (US & Canada)</option>
                        <option className='bg-black' value="GMT-04:00">(GMT-04:00) Atlantic Time (Canada)</option>
                        <option className='bg-black' value="GMT-03:00">(GMT-03:00) Buenos Aires</option>
                        <option className='bg-black' value="GMT-02:00">(GMT-02:00) Mid-Atlantic</option>
                        <option className='bg-black' value="GMT-01:00">(GMT-01:00) Azores, Cape Verde</option>
                        <option className='bg-black' value="GMT+00:00">(GMT+00:00) London, Lisbon</option>
                        <option className='bg-black' value="GMT+01:00">(GMT+01:00) Paris, Berlin</option>
                        <option className='bg-black' value="GMT+02:00">(GMT+02:00) Athens, Jerusalem</option>
                        <option className='bg-black' value="GMT+03:00">(GMT+03:00) Moscow, Baghdad</option>
                        <option className='bg-black' value="GMT+04:00">(GMT+04:00) Abu Dhabi, Baku</option>
                        <option className='bg-black' value="GMT+05:00">(GMT+05:00) Islamabad, Karachi</option>
                        <option className='bg-black' value="GMT+05:30">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
                        <option className='bg-black' value="GMT+06:00">(GMT+06:00) Dhaka, Almaty</option>
                        <option className='bg-black' value="GMT+07:00">(GMT+07:00) Bangkok, Hanoi</option>
                        <option className='bg-black' value="GMT+08:00">(GMT+08:00) Beijing, Singapore</option>
                        <option className='bg-black' value="GMT+09:00">(GMT+09:00) Tokyo, Seoul</option>
                        <option className='bg-black' value="GMT+10:00">(GMT+10:00) Sydney, Guam</option>
                        <option className='bg-black' value="GMT+11:00">(GMT+11:00) Solomon Islands, New Caledonia</option>
                        <option className='bg-black' value="GMT+12:00">(GMT+12:00) Fiji, Marshall Islands</option>
                    </select>
                    {errors.preferredTimezone && <p className="text-red-500 text-sm">{errors.preferredTimezone}</p>}
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
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 ml-4"
                    >
                        Submit
                    </button>
               </div>
        </form>
       
    </div>
  )
}

export default PreferencesInfo