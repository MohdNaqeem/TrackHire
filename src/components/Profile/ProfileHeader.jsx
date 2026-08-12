import {
  RiEditLine,
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";

const ProfileHeader = ({ profile, onEdit }) => {
  return (
    <section className="rounded-3xl border border-[#E7E7EF] bg-white p-6 shadow-sm">
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        {/* Avatar */}
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-[#ECFBF8]">
          <RiUserLine
            size={42}
            className="text-[#3CBFA4]"
          />
        </div>

        {/* Profile Details */}
        <div className="min-w-0 flex-1 text-center sm:text-left">
          <h1 className="text-2xl font-bold text-[#211A52]">
            {profile.name}
          </h1>

          <p className="mt-1 font-medium text-[#5F5B80]">
            {profile.currentRole}
          </p>

          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-[#8A86A3] sm:justify-start">
            <RiMailLine size={16} />
            <span>{profile.email}</span>
          </div>
        </div>

        {/* Edit Button */}
        <button
          type="button"
          onClick={onEdit}
          className="flex items-center gap-2 rounded-xl bg-[#211A52] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#2D2568]"
        >
          <RiEditLine size={18} />
          Edit Profile
        </button>
      </div>
    </section>
  );
};

export default ProfileHeader;