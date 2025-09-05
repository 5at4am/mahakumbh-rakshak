import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';

const MissingPersonsList = () => {
  const [missingPersons, setMissingPersons] = useState([]);

  useEffect(() => {
    fetchMissingPersons();
  }, []);

  const fetchMissingPersons = async () => {
    const { data, error } = await supabase
      .from('missing_persons')
      .select('*')
      .eq('status', 'missing')
      .order('reported_at', { ascending: false });

    if (error) {
      console.error('Error fetching missing persons:', error);
    } else {
      setMissingPersons(data);
    }
  };

  const handleMarkAsFound = async (id) => {
    const { error } = await supabase
      .from('missing_persons')
      .update({ status: 'found', found_at: new Date().toISOString() })
      .eq('id', id);

    if (error) {
      alert('Error updating status: ' + error.message);
    } else {
      alert('Status updated to found.');
      fetchMissingPersons(); // Refresh the list
    }
  };

  return (
    <div className="bg-background/card rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-text/primary mb-4">Missing Persons</h2>
      <div className="space-y-4">
        {missingPersons.map((person) => (
          <div key={person.id} className="border border-gray-200 rounded-lg p-4 hover:bg-background/light transition-colors">
            <div className="flex justify-between">
              <h3 className="font-medium text-text/primary">{person.name}</h3>
              <span className="text-sm text-text/tertiary">{new Date(person.reported_at).toLocaleDateString()}</span>
            </div>
            <p className="text-sm text-text/secondary mt-1">Age: {person.age} | {person.last_known_location}</p>
            <p className="text-sm text-text/tertiary mt-2">{person.description}</p>
            <p className="text-sm text-primary mt-2 font-medium">{person.contact_info}</p>
            <button 
              onClick={() => handleMarkAsFound(person.id)}
              className="mt-3 bg-danger hover:bg-danger/90 text-white px-3 py-1 rounded text-sm shadow-md">
              Mark as Found
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissingPersonsList;