import { defineCollection } from "astro:content";

import privacySchema from "@schemas/privacy";

const privacyCollection = defineCollection({
  type: `content`,
  schema: privacySchema,
});

export const collections = {
  "privacy": privacyCollection,
};
