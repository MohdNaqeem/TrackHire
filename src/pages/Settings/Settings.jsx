import SettingsSection from "../../components/Settings/SettingsSection";
import NotificationSettings from "../../components/Settings/NotificationSettings";
import ApplicationPreferences from "../../components/Settings/ApplicationPreferences";
import AccountSettings from "../../components/Settings/AccountSettings";

const Settings = () => {
  return (
    <section className="min-w-0 p-4 sm:p-6">
      {/* Page Header */}
      <div className="mb-6 text-center sm:mb-8">
        <h1 className="text-2xl font-bold text-[#211A52] sm:text-3xl">
          Settings
        </h1>

        <p className="mx-auto mt-2 max-w-md text-sm leading-5 text-[#8A86A3]">
          Manage your TrackHire preferences.
        </p>
      </div>

      {/* Settings Content */}
      <div className="mx-auto w-full max-w-4xl space-y-4 sm:space-y-6">
        {/* Notifications */}
        <SettingsSection
          title="Notifications"
          description="Choose which job search updates you want to receive."
        >
          <NotificationSettings />
        </SettingsSection>

        {/* Application Preferences */}
        <SettingsSection
          title="Application Preferences"
          description="Set your default preferences for your job search."
        >
          <ApplicationPreferences />
        </SettingsSection>

        {/* Account */}
        <SettingsSection
          title="Account"
          description="Manage your TrackHire account."
        >
          <AccountSettings />
        </SettingsSection>
      </div>
    </section>
  );
};

export default Settings;