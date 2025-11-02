import UserProfileView from "@/components/dashboard-screens/admins/UserProfileView";

export default function UserProfilePage({
  params,
}: {
  params: { id: string };
}) {
  return <UserProfileView id={params.id} />;
}
