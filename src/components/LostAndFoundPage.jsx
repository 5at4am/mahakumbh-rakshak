import React, { useState } from 'react';

const LostAndFoundPage = () => {
  const [personName, setPersonName] = useState('');
  const [description, setDescription] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  
  const missingPersons = [
    {
      id: 1,
      name: 'Amit Sharma',
      age: 65,
      location: 'Near Mahakaleshwar Temple',
      date: '2023-02-15',
      description: 'Elderly man wearing white kurta, last seen in the evening',
      contact: 'Personnel: +91-9876543210'
    },
    {
      id: 2,
      name: 'Priya Patel',
      age: 8,
      location: 'Ram Ghat',
      date: '2023-02-14',
      description: 'Young girl in red dress, with a blue bag',
      contact: 'Personnel: +91-9876543211'
    },
    {
      id: 3,
      name: 'Rajesh Gupta',
      age: 45,
      location: 'Kumbh Mela Grounds',
      date: '2023-02-13',
      description: 'Middle-aged man with a walking stick, wearing spectacles',
      contact: 'Personnel: +91-9876543212'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    alert(`Missing person report submitted!
Name: ${personName}
Description: ${description}
Contact: ${contactInfo}`);
    setPersonName('');
    setDescription('');
    setContactInfo('');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 bg-background/card shadow-md">
        <div className="max-w-6xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-text/primary">Missing Persons in Ujjain</h1>
            <p className="text-text/secondary">Report missing persons or find information about missing individuals during Kumbh Mela</p>
          </div>
        </div>
      </div>
      
      <div id="main-content" className="flex-grow p-4 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-background/card rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-text/primary mb-4">Report Missing Person</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-text/primary mb-1 font-medium">Person's Name</label>
                <input 
                  type="text" 
                  value={personName}
                  onChange={(e) => setPersonName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-background/card text-text/primary focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Full name of the missing person"
                  required
                />
              </div>
              <div>
                <label className="block text-text/primary mb-1 font-medium">Age</label>
                <input 
                  type="number" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-background/card text-text/primary focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Age of the missing person"
                />
              </div>
              <div>
                <label className="block text-text/primary mb-1 font-medium">Description</label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-background/card text-text/primary focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Describe the person's appearance, clothing, and circumstances of disappearance"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-text/primary mb-1 font-medium">Last Known Location</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-background/card text-text/primary focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Where was the person last seen in Ujjain?"
                />
              </div>
              <div>
                <label className="block text-text/primary mb-1 font-medium">Contact Information</label>
                <input 
                  type="text" 
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-background/card text-text/primary focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your contact details for follow-up"
                  required
                />
              </div>
              <button 
                type="submit"
                className="bg-success hover:bg-success/90 text-white font-medium py-2 px-4 rounded-lg transition-colors w-full shadow-md"
              >
                Submit Report
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-background/card rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-text/primary mb-4">Missing Persons</h2>
              <div className="space-y-4">
                {missingPersons.map((person) => (
                  <div key={person.id} className="border border-gray-200 rounded-lg p-4 hover:bg-background/light transition-colors">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-text/primary">{person.name}</h3>
                      <span className="text-sm text-text/tertiary">{person.date}</span>
                    </div>
                    <p className="text-sm text-text/secondary mt-1">Age: {person.age} | {person.location}</p>
                    <p className="text-sm text-text/tertiary mt-2">{person.description}</p>
                    <p className="text-sm text-primary mt-2 font-medium">{person.contact}</p>
                    <button className="mt-3 bg-danger hover:bg-danger/90 text-white px-3 py-1 rounded text-sm shadow-md">
                      Mark as Found
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-background/card rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-text/primary mb-4">Emergency Contacts</h2>
              <div className="space-y-3">
                <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-background/light transition-colors">
                  <div className="bg-danger/10 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-text/primary">Emergency Helpline</h3>
                    <p className="text-sm text-text/secondary">24/7 Missing Person Hotline</p>
                  </div>
                  <button className="text-primary hover:text-accent font-medium ml-auto">Call 1098</button>
                </div>
                <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-background/light transition-colors">
                  <div className="bg-danger/10 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-text/primary">Police Station</h3>
                    <p className="text-sm text-text/secondary">Nearest to Kumbh Mela Area</p>
                  </div>
                  <button className="text-primary hover:text-accent font-medium ml-auto">View Map</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LostAndFoundPage;