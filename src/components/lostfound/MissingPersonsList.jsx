import React from 'react';

const MissingPersonsList = () => {
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

  return (
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
  );
};

export default MissingPersonsList;