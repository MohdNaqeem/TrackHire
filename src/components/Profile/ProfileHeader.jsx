import {
  RiEditLine,
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";

const ProfileHeader = ({ profile, onEdit }) => {
  return (
    <section className="rounded-3xl border border-[#E7E7EF] bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        {/* Avatar */}
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-[#ECFBF8] sm:h-24 sm:w-24">
          <RiUserLine
            size={40}
            className="text-[#3CBFA4] sm:hidden"
          />

          <RiUserLine
            size={42}
            className="hidden text-[#3CBFA4] sm:block"
          />
        </div>

        {/* Profile Details */}
        <div className="min-w-0 flex-1 text-center sm:text-left">
          <h1 className="break-words text-xl font-bold text-[#211A52] sm:text-2xl">
            {profile.name}
          </h1>

          <p className="mt-1 break-words text-sm font-medium text-[#5F5B80] sm:text-base">
            {profile.currentRole}
          </p>

          <div className="mt-3 flex min-w-0 items-center justify-center gap-2 text-sm text-[#8A86A3] sm:justify-start">
            <RiMailLine
              size={16}
              className="shrink-0"
            />

            <span className="min-w-0 break-all">
              {profile.email}
            </span>
          </div>
        </div>

        {/* Edit Button */}
        <button
          type="button"
          onClick={onEdit}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#211A52] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#2D2568] sm:w-auto"
        >
          <RiEditLine size={18} />

          <span>Edit Profile</span>
        </button>
      </div>
    </section>
  );
};

export default ProfileHeader;