// Unchangeable.jsx
import React, { useState } from 'react';

const Unchangeable = ({ formData, onSave }) => {
    const [isEditing, setEditing] = useState(false);
    const [editedData, setEditedData] = useState(formData);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = async () => {
        setEditing(false);
        await onSave(editedData); // Wait for the save operation to complete
    };

    const handleCancel = () => {
        setEditing(false);
        setEditedData(formData);
    };

    const handleChange = (e, fieldName) => {
        setEditedData({ ...editedData, [fieldName]: e.target.value });
    };

    const handleKeyPress = (e, fieldName) => {
        if (e.key === 'Enter') {
            handleSave();
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    };

    return (
        <div>
            <div>
                <label>Company Name</label>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedData.companyname}
                        onChange={(e) => handleChange(e, 'companyname')}
                        onKeyDown={(e) => handleKeyPress(e, 'companyname')}
                    />
                ) : (
                    <input type="text" value={formData.companyname} readOnly />
                )}
            </div>

            <div>
                <label>Company Address</label>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedData.Companyaddress}
                        onChange={(e) => handleChange(e, 'Companyaddress')}
                        onKeyDown={(e) => handleKeyPress(e, 'Companyaddress')}
                    />
                ) : (
                    <input type="text" value={formData.Companyaddress} readOnly />
                )}
            </div>

            <div>
                <label>Company Contact</label>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedData.contac}
                        onChange={(e) => handleChange(e, 'contac')}
                        onKeyDown={(e) => handleKeyPress(e, 'contac')}
                    />
                ) : (
                    <input type="text" value={formData.contac} readOnly />
                )}
            </div>

            {isEditing && (
                <div>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            )}
            {!isEditing && <button onClick={handleEdit}>Edit</button>}
        </div>
    );
};

export default Unchangeable;
