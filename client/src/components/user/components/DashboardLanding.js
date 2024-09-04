import React, {useState} from 'react'
import { format, add } from 'date-fns';
import { IoCalendarOutline } from 'react-icons/io5';
import { MdEvent } from 'react-icons/md';
import CalendarComponent from "./CalendarComponent"
import { IoCloseSharp } from "react-icons/io5";



export default function DashboardLanding() {

  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = (e) => {
    console.log("print it "+e.target.id);
      if (e.target.id === 'popupOverlay') {
          setIsOpen(false);
      }
  };

  const [step, setStep] = useState(1);

  const nextStep = () => {
      if (step < 3) {
          setStep(step + 1);
      }
  };

  const prevStep = () => {
      if (step > 1) {
          setStep(step - 1);
      }
  };

  const submitForm = () => {
      // Submit form logic here
      console.log('Form submitted');
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };



  const [events, setEvents] = useState([
    { id: 1, title: 'Event 1', start: new Date(), end: add(new Date(), { hours: 2 }) },
    { id: 2, title: 'Event 2', start: add(new Date(), { days: 1 }), end: add(new Date(), { days: 1, hours: 2 }) },
    // Add more events as needed
  ]);

  const createEvent = () => {
    // Logic to create a new event
    // For demonstration, we'll add a placeholder event
    setEvents([
      ...events,
      { id: events.length + 1, title: `Event ${events.length + 1}`, start: new Date(), end: add(new Date(), { hours: 2 }) },
    ]);
  };

  const currentTime = new Date();
  const upcomingEvents = events.filter(event => event.start > currentTime);
  const runningEvents = events.filter(event => event.start <= currentTime && event.end >= currentTime);


  const data = [
    { date: '2024-01', attendees: 400, ticketsSold: 240 },
    { date: '2024-02', attendees: 300, ticketsSold: 200 },
    { date: '2024-03', attendees: 500, ticketsSold: 300 },
    { date: '2024-04', attendees: 600, ticketsSold: 400 },
    { date: '2024-05', attendees: 700, ticketsSold: 600 },
  ];


  const [formData, setFormData] = useState({
    eventName: '',
    eventDescription: '',
    eventType: '',
    eventDepartment: '',
    eventDate: '',
    eventTime: '',
    ticketPrice: '',
    eventLocation: '',
    organiserName: '',
    organiserEmail: '',
    organiserDepartment: '',
});

const isStepComplete = () => {
    switch(step) {
        case 1:
            return formData.eventName && formData.eventDescription && formData.eventType && 
                   formData.eventDepartment && formData.eventDate && formData.eventTime && 
                   formData.ticketPrice;
        case 2:
            return formData.eventLocation;
        case 3:
            return formData.organiserName && formData.organiserEmail && formData.organiserDepartment;
        default:
            return false;
    }
};


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};



 

  return (
    //i have removed the min-h-screen. later it can be added with overflow behaviour
    <div className="p-6 bg-gray-800 text-white overflow-hidden">
    <h2 className="text-2xl font-bold mb-6">Welcome to your dashboard Baljit!</h2>
    <div className="space-y-12 border border-gray-400 rounded-lg p-6 transition-all duration-300">
      <div className="flex justify-between items-start gap-6">
        {/* Statistics Section */}
        <div className="flex flex-col space-y-6 w-full md:w-2/3">
          <div className="flex justify-center items-center h-80 bg-gray-700 border border-gray-500 shadow-md rounded-lg p-6">
            <div className="flex flex-col justify-center items-center text-center space-y-4 ">
              <img src="https://img.freepik.com/premium-vector/illustration-content-writing-flat-design_9206-2783.jpg?w=740" alt="Illustration" className="rounded-xl w-3/12" />
              <p className="text-gray-400">Want to see metrics on your recent event? Create and publish an event to get started.</p>
              <button onClick={openPopup} className="px-4 py-2 bg-white text-gray-800 rounded-full">Create Event</button>
            </div>
          </div>
        </div>



  <div class="text-center">


    {isOpen && (
      <div>
        <div  className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
              <div className="bg-gray-600 p-8 rounded-lg w-full max-w-3xl">
              <div className='relative'>
                <h2 className="text-2xl font-bold mb-6 text-center">Create Event</h2>
                <div>

                <button  id="popupOverlay"  onClick={closePopup} className='absolute top-0 right-0 text-gray-500 hover:text-gray-700 flex '>
                   Close 
                </button>
                </div>
              </div>

                  {/* Steps Navigation */}
                  <ol className="flex justify-center items-center  w-3/4 mx-auto text-sm font-medium text-center text-gray-500 sm:text-base">
                  <li className={`flex md:w-full items-center ${step > 1 ? "text-blue-400 after:border-blue-500" : ""} 
                      sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:hidden 
                      sm:after:inline-block after:mx-6 xl:after:mx-10`}>
                      <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                          {isStepComplete() && step >= 1 && <svg className="w-4 h-4 me-2.5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>}
                          Details 
                      </span>
                  </li>
                  <li className={`flex md:w-full items-center ${step > 2 ? "text-blue-400 after:border-blue-500" : ""} 
                      after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:hidden 
                      sm:after:inline-block after:mx-6 xl:after:mx-10`}>
                      <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                          {isStepComplete() && step >= 2 && <svg className="w-4 h-4 me-2.5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>}
                          Location
                      </span>
                  </li>
                  <li className="flex items-center">
                      {isStepComplete() && step === 3 && <svg className="w-4 h-4 me-2.5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                      </svg>}
                      Confirm
                  </li>
              </ol>



                <div className='max-h-80 max-w-100 p-5 overflow-scroll'>

                  {/* Form Content */}
                  {step === 1 && (
                            <div className="mb-8">
                                <label className="block mb-2">Event Name</label>
                                <input
                                    type="text"
                                    name="eventName"
                                    value={FormData.eventName}
                                    onChange={handleInputChange}
                                    className="w-full p-2 mb-4 bg-gray-800 border border-gray-300 rounded"
                                    placeholder="Enter event name"
                                />

                                <label className="block mb-2">Event Description</label>
                                <textarea
                                    name='eventDescription'
                                    onChange={FormData.eventDescription}
                                    className="w-full p-2 mb-4 border bg-gray-800 border-gray-300 rounded"
                                    placeholder="Enter event description"
                                />

                                <label className="block mb-2">Event Type</label>
                                <input
                                    type="text"
                                    name='eventType'
                                    onChange={FormData.eventType}
                                    className="w-full p-2 mb-4 border bg-gray-800 border-gray-300 rounded"
                                    placeholder="Enter event type"
                                />

                                <label className="block mb-2">Event Department</label>
                                <input
                                    type="text"
                                    name='eventDepartment'
                                    onChange={FormData.eventDepartment}
                                    className="w-full p-2 mb-4 border bg-gray-800 border-gray-300 rounded"
                                    placeholder="Enter event department"
                                />

                                <label className="block mb-2">Event Date</label>
                                <input
                                    type="date"
                                    name='eventDate'
                                    onChange={FormData.eventDate}
                                    className="w-full p-2 mb-4 border bg-gray-800 border-gray-300 rounded"
                                />

                                <label className="block mb-2">Event Time</label>
                                <input
                                    type="time"
                                    name='eventTime'
                                    onChange={FormData.eventTime}
                                    className="w-full p-2 mb-4 border bg-gray-800 border-gray-300 rounded"
                                />

                                <label className="block mb-2">Ticket Price</label>
                                <input
                                    type="number"
                                    name='ticketPrice'
                                    onChange={FormData.ticketPrice}
                                    className="w-full p-2 mb-4 border bg-gray-800 border-gray-300 rounded"
                                    placeholder="Enter ticket price"
                                />
                            </div>
                        )}

                        {step === 2 && (
                            <div className="mb-8">
                                <label className="block mb-2">Event Location</label>
                                <input
                                    type="text"
                                    name='eventLocation'
                                    onChange={FormData.eventLocation}
                                    className="w-full p-2 mb-4 border bg-gray-800 border-gray-300 rounded"
                                    placeholder="Enter event location"
                                />
                            </div>
                        )}

                        {step === 3 && (
                            <div className="mb-8">
                                <label className="block mb-2">Organiser Name</label>
                                <input
                                    type="text"
                                    name='organiserName'
                                    onChange={FormData.organiserName}
                                    className="w-full p-2 mb-4 border bg-gray-800 border-gray-300 rounded"
                                    placeholder="Enter organiser name"
                                />

                                <label className="block mb-2">Organiser Email</label>
                                <input
                                    type="email"
                                    name='organiserEmail'
                                    onChange={FormData.organiserEmail}
                                    className="w-full p-2 mb-4 border bg-gray-800 border-gray-300 rounded"
                                    placeholder="Enter organiser email"
                                />

                                <label className="block mb-2">Organiser Department</label>
                                <input
                                    type="text"
                                    name='organiserDepartment'
                                    onChange={FormData.organiserDepartment}
                                    className="w-full p-2 mb-4 border bg-gray-800 border-gray-300 rounded"
                                    placeholder="Enter organiser department"
                                />
                            </div>
                        )}
                             {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    {step > 1 && (
                        <button onClick={prevStep} className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
                            Previous
                        </button>
                    )}
                    {step < 3 ? (
                        <button onClick={nextStep} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                            Next
                        </button>
                    ) : (
                        <button onClick={submitForm} className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                            Create Event
                        </button>
                    )}
                </div>

</div>



                  
              </div>
          </div>
      
    </div>
    )}

  </div>



  


        {/* Calendar Section */}
        <div className="flex-none w-full md:w-1/3">
          <CalendarComponent />
        </div>
      </div>
    </div>
  </div>
  
  
  )
}
