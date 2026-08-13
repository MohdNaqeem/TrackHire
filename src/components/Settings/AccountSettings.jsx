import {
  RiMailLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";

const AccountSettings = () => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <div className="space-y-4">
      {/* Email */}
      <div className="flex min-w-0 items-center gap-4 rounded-2xl bg-[#FAFAFC] p-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFBF8]">
          <RiMailLine
            size={19}
            className="text-[#3CBFA4]"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs text-[#8A86A3]">
            Account Email
          </p>

          <p className="mt-1 break-all font-semibold text-[#211A52]">
            naqeem@example.com
          </p>
        </div>
      </div>

      {/* Logout */}
      <button
        type="button"
        onClick={handleLogout}
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-red-100 px-4 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
      >
        <RiLogoutBoxRLine size={19} />
        Log out
      </button>
    </div>
  );
};

export default AccountSettings;