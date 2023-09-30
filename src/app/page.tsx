import { authOptions } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "./components/UserCard";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {/* logic checks whether there is a sessios else it redirects */}
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </>
  );
}
