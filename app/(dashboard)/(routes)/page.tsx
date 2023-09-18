import { UserButton } from "@clerk/nextjs";

function Home() {
  return (
    <div>
      <p>this page is protected</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
export default Home;
