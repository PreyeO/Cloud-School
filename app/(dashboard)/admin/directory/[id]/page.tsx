import UserProfileView from "@/components/dashboard-screens/admins/UserProfileView";

interface UserProfilePageProps {
  params: Promise<{ id: string }>;
}

export default async function UserProfilePage({
  params,
}: UserProfilePageProps) {
  const { id } = await params; // ✅ Await the params to satisfy Next.js 15 typing
  return <UserProfileView id={id} />;
}
