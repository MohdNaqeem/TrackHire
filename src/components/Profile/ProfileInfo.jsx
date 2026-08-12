import {
  RiBriefcaseLine,
  RiMapPinLine,
  RiPhoneLine,
  RiUserLine,
} from "react-icons/ri";

const ProfileInfo = ({ profile }) => {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-2">
      {/* Personal Information */}
      <section className="min-w-0 rounded-3xl border border-[#E7E7EF] bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5 sm:mb-6">
          <h2 className="text-xl font-bold text-[#211A52]">
            Personal Information
          </h2>

          <p className="mt-1 text-sm text-[#8A86A3]">
            Your basic profile information.
          </p>
        </div>

        <div className="space-y-4">
          {/* Name */}
          <div className="flex min-w-0 items-center gap-3 rounded-2xl bg-[#FAFAFC] p-4 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFBF8]">
              <RiUserLine
                size={19}
                className="text-[#3CBFA4]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-[#8A86A3]">
                Full Name
              </p>

              <p className="mt-1 break-words font-semibold text-[#211A52]">
                {profile.name}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex min-w-0 items-center gap-3 rounded-2xl bg-[#FAFAFC] p-4 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFBF8]">
              <RiPhoneLine
                size={19}
                className="text-[#3CBFA4]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-[#8A86A3]">
                Phone
              </p>

              <p className="mt-1 break-words font-semibold text-[#211A52]">
                {profile.phone}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex min-w-0 items-center gap-3 rounded-2xl bg-[#FAFAFC] p-4 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFBF8]">
              <RiMapPinLine
                size={19}
                className="text-[#3CBFA4]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-[#8A86A3]">
                Location
              </p>

              <p className="mt-1 break-words font-semibold text-[#211A52]">
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Information */}
      <section className="min-w-0 rounded-3xl border border-[#E7E7EF] bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5 sm:mb-6">
          <h2 className="text-xl font-bold text-[#211A52]">
            Professional Information
          </h2>

          <p className="mt-1 text-sm text-[#8A86A3]">
            Your current and preferred career roles.
          </p>
        </div>

        <div className="space-y-4">
          {/* Current Role */}
          <div className="flex min-w-0 items-center gap-3 rounded-2xl bg-[#FAFAFC] p-4 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFBF8]">
              <RiBriefcaseLine
                size={19}
                className="text-[#3CBFA4]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-[#8A86A3]">
                Current Role
              </p>

              <p className="mt-1 break-words font-semibold text-[#211A52]">
                {profile.currentRole}
              </p>
            </div>
          </div>

          {/* Preferred Role */}
          <div className="flex min-w-0 items-center gap-3 rounded-2xl bg-[#FAFAFC] p-4 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFBF8]">
              <RiBriefcaseLine
                size={19}
                className="text-[#3CBFA4]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-[#8A86A3]">
                Preferred Role
              </p>

              <p className="mt-1 break-words font-semibold text-[#211A52]">
                {profile.preferredRole}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileInfo;