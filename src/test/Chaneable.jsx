// Changeable.jsx
import React, { useState, useEffect, useRef, forwardRef } from 'react';

const Changeable = forwardRef(({ formData, onChange }, ref) => {
    const [data, setData] = useState(formData);

    const inputRefs = {
        name: useRef(null),
        number: useRef(null),
        address: useRef(null),
        state: useRef(null),
        district: useRef(null),
        code: useRef(null),
        quantity: useRef(null),
        rate: useRef(null),
    };

    useEffect(() => {
        // Set focus on the first input field when the component mounts
        inputRefs.name.current && inputRefs.name.current.focus();
    }, []);

    const handleKeyPress = (e, fieldName) => {
        if (e.key === 'Enter') {
            // Move to the next input field on Enter key press
            const keys = Object.keys(inputRefs);
            const currentIndex = keys.indexOf(fieldName);
            const nextIndex = currentIndex < keys.length - 1 ? currentIndex + 1 : 0;
            inputRefs[keys[nextIndex]].current && inputRefs[keys[nextIndex]].current.focus();
        } else if (e.key === 'Escape') {
            // Move to the previous input field on Escape key press
            const keys = Object.keys(inputRefs);
            const currentIndex = keys.indexOf(fieldName);
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : keys.length - 1;
            inputRefs[keys[prevIndex]].current && inputRefs[keys[prevIndex]].current.focus();
        }
    };

    const handleChange = (e, fieldName) => {
        setData({ ...data, [fieldName]: e.target.value });
        onChange(data);
    };

    // Forward the ref to the parent component
    useEffect(() => {
        if (ref) {
            ref.current = inputRefs;
        }
    }, [ref, inputRefs]);

    return (
        <div>
            <label>Name</label>
            <input
                type="text"
                value={data.name}
                onChange={(e) => handleChange(e, 'name')}
                onKeyDown={(e) => handleKeyPress(e, 'name')}
                ref={inputRefs.name}
                required
            />

            <label>Number</label>
            <input
                type="text"
                value={data.number}
                onChange={(e) => handleChange(e, 'number')}
                onKeyDown={(e) => handleKeyPress(e, 'number')}
                ref={inputRefs.number}
                required
            />

            <label>Address</label>
            <input
                type="text"
                value={data.address}
                onChange={(e) => handleChange(e, 'address')}
                onKeyDown={(e) => handleKeyPress(e, 'address')}
                ref={inputRefs.address}
                required
            />

            {/* Add similar input fields for other form data */}
        </div>
    );
});

export default Changeable;
