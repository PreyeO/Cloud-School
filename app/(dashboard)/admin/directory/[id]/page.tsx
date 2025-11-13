import UserProfileView from "@/components/dashboard-screens/admins/directory/UserProfileView";

interface UserProfilePageProps {
  params: Promise<{ id: string }>;
}

export default async function UserProfilePage({
  params,
}: UserProfilePageProps) {
  const { id } = await params;
  return <UserProfileView id={id} />;
}
