import React, { useState, useEffect } from 'react';
import './UserProfileCard.css';

const UserProfileCard = () => {
    const [data, setData] = useState(null);

    const urlParams = new URLSearchParams(window.location.search);
    const wiName = urlParams.get('wiName') || 'MORTGAGE-0000001829-RLOS';
    const address = urlParams.get('address') || 'B-402, Green Valley Apts, Cyber City, Bangalore';

    useEffect(() => {
        fetch(`https://tytlmsdemo.newgensoftware.net/underwriterbackend/details?wiName=${wiName}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, [wiName]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    };

    return (
        <div className="profile-card-container">
            {/* Header Section */}
            <div className="profile-header">
                <div className="avatar-container">
                    {/* Using a placeholder gradient/image for avatar as per design it's a scenic image */}
                    <div className="avatar-image"></div>
                </div>
                <h2 className="profile-name">{data && data.firstName && data.lastName ? `${data.firstName} ${data.lastName}` : ''}</h2>
                <p className="profile-title">{data && data.empName ? data.empName : ''}</p>
            </div>

            {/* Details Section */}
            <div className="profile-details">
                <div className="detail-row">
                    <span className="detail-label">DOB</span>
                    <span className="detail-value">{data && data.dob ? formatDate(data.dob) : ''}</span>
                </div>

                <div className="detail-row">
                    <span className="detail-label">Mobile</span>
                    <span className="detail-value">{data && data.mobileNo ? `+91 ${data.mobileNo}` : ''}</span>
                </div>

                <div className="detail-row">
                    <span className="detail-label">Email</span>
                    <span className="detail-value">{data && data.emailId ? data.emailId : ''}</span>
                </div>

                <div className="detail-row">
                    <span className="detail-label">Address</span>
                    <span className="detail-value">{address}</span>
                </div>

                <div className="detail-row border-none">
                    <span className="detail-label">Conn.</span>
                    <span className="detail-value text-link">{data && data.existingCustomer ? (data.existingCustomer === 'Yes' ? 'ETB' : 'NTB') : ''}</span>
                </div>
            </div>
        </div>
    );
};

export default UserProfileCard;
