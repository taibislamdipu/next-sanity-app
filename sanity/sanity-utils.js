import { createClient, groq } from "next-sanity";
import config from "./config/client-config";

export async function getProjects() {
  // const client = createClient({
  //   projectId: "bydsnjku",
  //   dataset: "production",
  //   apiVersion: "2023-10-30",
  //   useCdn: true,
  // });

  return createClient(config).fetch(
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

export async function getProject(slug) {
  // const client = createClient({
  //   projectId: "bydsnjku",
  //   dataset: "production",
  //   apiVersion: "2023-10-30",
  //   useCdn: true,
  // });

  return createClient(config).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      current
    }`,
    { slug }
  );
}
