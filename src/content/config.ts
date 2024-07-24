import { defineCollection } from "astro:content";

import privacySchema from "@schemas/privacy";
import pressKitSchema from "@schemas/press-kit";

const privacyCollection = defineCollection({
  type: `content`,
  schema: privacySchema,
});

const pressKitCollection = defineCollection({
  type: `content`,
  schema: ({ image }) => pressKitSchema(image),
});

export const collections = {
  privacy: privacyCollection,
  press: pressKitCollection,
};
