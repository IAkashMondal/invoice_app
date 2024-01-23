// Main.jsx
import React, { useState, useEffect } from 'react';
import Changeable from './Chaneable';
import Unchangeable from './Unchaneable';

export const MainFrom = () => {
    const [formData, setFormData] = useState({
        // Initial state data

        name: '',
        number: '',
        address: '',
        state: '',
        district: '',
        code: '',
        quantity: '',
        // Initial data for unchangeable fields
        companyname: 'Abc Ltd',
        Companyaddress: 'Slg, Delhi',
        contac: '+91 1800 5454 1800',
    });

    useEffect(() => {
        // Fetch initial data from http://localhost:3007/initialdata
        fetch('http://localhost:3007/initialdata')
            .then(response => response.json())
            .then(initialData => setFormData(prevData => ({ ...prevData, ...initialData })))
            .catch(error => console.error('Error fetching initial data:', error));
    }, []);
    const handleChangeableData = (data) => {
        setFormData(data);
    };

    const handleUnchangeableData = async (data) => {
        // Update local state
        setFormData((prevData) => ({
            ...prevData,
            companyname: data.companyname,
            Companyaddress: data.Companyaddress,
            contac: data.contac,
        }));

        // // Save data on the server using fetch or your preferred method
        // try {
        //     const response = await fetch('http://localhost:3007/invoiceofcomapny', {
        //         method: 'POST', // Use POST for creating a new resource
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(data),
        //     });

        //     if (response.ok) {
        //         console.log('Data saved successfully on the server');
        //     } else {
        //         console.error('Failed to save data on the server');
        //     }
        // } catch (error) {
        //     console.error('Error saving data on the server:', error);
        // }
    };

    const handleSaveData = () => {
        // Send data to http://localhost:3007/invoiceofcomapny to save in JSON file
        fetch('http://localhost:3007/invoiceofcomapny', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data saved successfully:', data);
                // You may want to reset the form or perform other actions after successful save
            })
            .catch(error => console.error('Error saving data:', error));
    };

    return (
        <div>
            <Changeable formData={formData} onChange={handleChangeableData} />
            <Unchangeable formData={formData} onSave={handleUnchangeableData} />
            <button onClick={handleSaveData}>Save Data</button>
        </div>
    );
};


