import { currentUser } from "@clerk/nextjs";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { UserNameForm } from "@/components/forms/user-name-form";

export const metadata = {
  title: "Projectx Settings - Customize Your Experience",
  description:
    "Adjust your Projectx account settings for a tailored real estate management experience. Manage language preferences, account details, and more.",
};

export default async function SettingsPage() {
  const user = await currentUser();

  const handleUpdateUser = async (data) => {
    // ... logic to update the user
  };

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <UserNameForm
          user={{ id: user?.id ?? "", username: user?.username ?? "" }}
        />
      </div>
    </DashboardShell>
  );
}
