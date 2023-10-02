import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "bydsnjku",
    dataset: "production",
    apiVersion: "2023-10-30",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}
