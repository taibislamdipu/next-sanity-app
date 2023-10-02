import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="my-24">
        <h1 className="text-7xl font-bold">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Sanity.io
          </span>
          !
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          necessitatibus.
        </p>
      </div>

      <div>
        <h1 className="text-xl font-bold my-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            return (
              <Link
                href={`/projects/${project.slug}`}
                key={project._id}
                className="border rounded p-8 hover:scale-105 transition hover:border-blue-500"
              >
                {project.image && (
                  <Image
                    src={project.image}
                    width={250}
                    height={100}
                    className="object-cover rounded-md border border-gray-500"
                    alt="pic"
                  />
                )}
                <h1 className="text-base mt-2">Title: {project.name}</h1>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
