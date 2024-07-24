import { z } from "astro:content";
import type { ImageFunction } from "astro:content";

//! HELPERS
const assets = (image: ImageFunction) =>
  z.object({
    heading: z.string(),
    download: z.object({
      src: z.string(),
      size: z.string(),
    }),
    assets: z.array(image()),
  });

const subSection = z.object({
  title: z.string(),
  body: z.string(),
});

const textSection = z.object({
  heading: z.string(),
  body: z.string(),
});

const video = z.object({
  url: z.string().url(),
  title: z.string(),
  description: z.string(),
});

//! SCHEMA
const schema = (image: ImageFunction) =>
  z.object({
    factSheet: z.object({
      heading: z.string(),
      sections: z.array(subSection),
    }),
    description: textSection,
    features: textSection,
    videos: z.array(video),
    images: assets(image),
    logos: assets(image),
    about: textSection,
    team: z.object({
      heading: z.string(),
      sections: z.array(subSection),
    }),
    contact: z.object({
      heading: z.string(),
      sections: z.array(subSection),
    }),
  });

export default schema;
