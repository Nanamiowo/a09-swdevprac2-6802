import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions";

export default async function BookingPage() {
  let profile = null;

  try {
    const session = await getServerSession(authOptions);

    const token = session?.accessToken || "test-token";

    const res = await getUserProfile(token);
    profile = res.data;
  } catch (err) {
    profile = null;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Booking Page</h1>

      {profile ? (
        <div className="border p-4 rounded mb-5">
          <p>{profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Tel:</strong> {profile.tel}</p>
          <p>
            <strong>Member Since:</strong>{" "}
            {profile.createdAt
              ? new Date(profile.createdAt).toLocaleDateString()
              : "-"}
          </p>
        </div>
      ) : (
        <p>Not logged in or loading...</p>
      )}

      <div>
        <p>Booking form goes here...</p>
      </div>
    </div>
  );
}