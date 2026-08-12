import { useState } from "react";

import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import ProfileEditModal from "../../components/Profile/ProfileEditModal";

import { profileData } from "../../data/profileData";

const Profile = () => {
  const [profile, setProfile] = useState(profileData);

  const [isEditModalOpen, setIsEditModalOpen] =
    useState(false);

  const handleSaveProfile = (updatedProfile) => {
    setProfile(updatedProfile);
    setIsEditModalOpen(false);
  };

  return (
    <section className="p-6">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#211A52]">
          Profile
        </h1>

        <p className="mt-2 text-sm text-[#8A86A3]">
          Manage your personal and professional information.
        </p>
      </div>

      {/* Profile Header */}
      <div className="mb-6">
        <ProfileHeader
          profile={profile}
          onEdit={() => setIsEditModalOpen(true)}
        />
      </div>

      {/* Profile Information */}
      <ProfileInfo profile={profile} />

      {/* Edit Modal */}
      {isEditModalOpen && (
        <ProfileEditModal
          profile={profile}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSaveProfile}
        />
      )}
    </section>
  );
};

export default Profile;