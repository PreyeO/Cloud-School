import UserProfileView from "@/components/dashboard-screens/admins/UserProfileView";

// Correct type for App Router dynamic route params
interface UserProfilePageProps {
  params: {
    id: string;
  };
}

// No need to extend PageProps
export default function UserProfilePage({ params }: UserProfilePageProps) {
  return <UserProfileView id={params.id} />;
}
