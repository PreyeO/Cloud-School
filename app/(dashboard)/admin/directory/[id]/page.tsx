import UserProfileView from "@/components/dashboard-screens/admins/UserProfileView";

interface UserProfilePageProps {
  params: {
    id: string;
  };
}

export default function UserProfilePage({ params }: UserProfilePageProps) {
  return <UserProfileView id={params.id} />;
}
