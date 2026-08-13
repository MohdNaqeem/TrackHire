import { useState } from "react";
import { notificationSettings } from "../../data/settingsData";

const NotificationSettings = () => {
  const [notifications, setNotifications] =
    useState(notificationSettings);

  const handleToggle = (id) => {
    setNotifications((previousSettings) =>
      previousSettings.map((setting) =>
        setting.id === id
          ? {
              ...setting,
              enabled: !setting.enabled,
            }
          : setting,
      ),
    );
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {notifications.map((setting) => (
        <div
          key={setting.id}
          className="flex min-w-0 items-start gap-3 rounded-2xl bg-[#FAFAFC] p-4 sm:items-center sm:gap-4"
        >
          {/* Setting Information */}
          <div className="min-w-0 flex-1">
            <h3 className="break-words font-semibold leading-5 text-[#211A52]">
              {setting.title}
            </h3>

            <p className="mt-1 break-words text-sm leading-5 text-[#8A86A3]">
              {setting.description}
            </p>
          </div>

          {/* Toggle */}
          <button
            type="button"
            onClick={() => handleToggle(setting.id)}
            className={`relative flex h-6 w-11 shrink-0 items-center rounded-full p-1 transition-colors duration-200 ${
              setting.enabled
                ? "bg-[#3CBFA4]"
                : "bg-[#DCDCE7]"
            }`}
            aria-label={`Toggle ${setting.title}`}
          >
            <span
              className={`h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                setting.enabled
                  ? "translate-x-5"
                  : "translate-x-0"
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationSettings;