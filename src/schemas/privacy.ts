import { z } from "astro:content";

const section = z.object({
  heading: z.string(),
  body: z.string(),
});

const privacySchema = z.object({
  title: z.string(),
  description: z.string(),
  lastUpdated: z.string().date(),
  policy: z.array(section),
});

export default privacySchema;