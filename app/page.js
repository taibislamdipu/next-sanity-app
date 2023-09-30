import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      My projects go here
      {projects.map((project) => {
        return (
          <div key={project._id}>
            <h1>Title: {project.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
