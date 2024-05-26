import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["res.cloudinary.com"],
  },
  site: 'https://mario-chico.github.io',
});
