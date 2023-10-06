import { isTeacher } from "@/lib/teachers";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!isTeacher(userId)) {
    return redirect("/");
  }
  return <div>{children}</div>;
};

export default TeacherLayout;
