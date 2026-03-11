import React from 'react';
import './UserProfileCard.css';

const UserProfileCard = () => {
    return (
        <div className="profile-card-container">
            {/* Header Section */}
            <div className="profile-header">
                <div className="avatar-container">
                    {/* Using a placeholder gradient/image for avatar as per design it's a scenic image */}
                    <div className="avatar-image"></div>
                </div>
                <h2 className="profile-name">Mayank</h2>
                <p className="profile-title">Senior Software Engineer</p>
            </div>

            {/* Details Section */}
            <div className="profile-details">
                <div className="detail-row">
                    <span className="detail-label">DOB</span>
                    <span className="detail-value">12 Aug 1985</span>
                </div>

                <div className="detail-row">
                    <span className="detail-label">Mobile</span>
                    <span className="detail-value">+91 98765 43210</span>
                </div>

                <div className="detail-row">
                    <span className="detail-label">Email</span>
                    <span className="detail-value">mayank.s@example.com</span>
                </div>

                <div className="detail-row">
                    <span className="detail-label">Address</span>
                    <span className="detail-value">B-402, Green Valley Apts, Cyber City, Bangalore</span>
                </div>

                <div className="detail-row border-none">
                    <span className="detail-label">Conn.</span>
                    <span className="detail-value text-link">ETB (Electronic Transfer of Benefits)</span>
                </div>
            </div>
        </div>
    );
};

export default UserProfileCard;
