import { getProject } from "@/sanity/sanity-utils";

export default async function Project({ params }) {
  const slug = params.project;

  const project = await getProject(slug);

  const { name, image, url } = project;

  return (
    <div className="max-w-3xl mx-auto py-20">
      <div className="flex justify-between items-center">
        <h1 className="bg-gradient-to-r font-extrabold text-5xl drop-shadow from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {name}
        </h1>
        <a
          href={url}
          className="bg-gray-100 hover:bg-pink-500 transition rounded-lg text-gray-500 py-3 hover:text-white px-4 font-bold whitespace-nowrap"
          target="_blank"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
