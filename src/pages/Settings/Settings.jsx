import SettingsSection from "../../components/Settings/SettingsSection";
import NotificationSettings from "../../components/Settings/NotificationSettings";
import ApplicationPreferences from "../../components/Settings/ApplicationPreferences";
import AccountSettings from "../../components/Settings/AccountSettings";

const Settings = () => {
  return (
    <section className="p-6">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#211A52]">
          Settings
        </h1>

        <p className="mt-2 text-sm text-[#8A86A3]">
          Manage your TrackHire preferences.
        </p>
      </div>

      {/* Settings Content */}
      <div className="mx-auto max-w-4xl space-y-6">
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