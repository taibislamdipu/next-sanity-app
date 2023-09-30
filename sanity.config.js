import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  name: "default",
  title: "Next Sanity App Dipu",

  projectId: "bydsnjku",
  dataset: "production",

  apiVersion: "2023-09-30",

  basePath: "/admin",

  plugins: [deskTool()],
});

export default config;
