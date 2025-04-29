import EmptyProject from "@/components/empty-project";
import { cookies } from "next/headers";
import Link from "next/link";
import { formatDate } from "date-fns";
const getProjects = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
    headers: {
      Authorization: `Bearer ${(await cookies()).get("accessToken")?.value}`,
    },
  });
  const data = await response.json();
  return data;
};

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-2xl font-bold my-4">All Projects</h1>
      <div className="flex flex-col gap-4">
        {projects?.map((project: any) => (
          <div className="flex flex-col gap-2" key={project._id}>
            <Link
              href={`/projects/${project._id}`}
              className="text-lg font-bold hover:text-blue-500"
            >
              {project.name}
            </Link>
            <p className="text-sm text-gray-500">
              {formatDate(project.createdAt, "dd MMM yyyy")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
