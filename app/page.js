import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      {projects.map((project) => {
        return (
          <div key={project._id}>
            <h1 className="text-3xl">Title: {project.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
