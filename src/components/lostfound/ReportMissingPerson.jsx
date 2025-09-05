import React, { useState } from 'react';

const ReportMissingPerson = () => {
  const [personName, setPersonName] = useState('');
  const [description, setDescription] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Missing person report submitted!\nName: ${personName}\nDescription: ${description}\nContact: ${contactInfo}`);
    setPersonName('');
    setDescription('');
    setContactInfo('');
  };

  return (
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
  );
};

export default ReportMissingPerson;
