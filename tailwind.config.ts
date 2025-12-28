
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // ... other config
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/forms'),
     // Add this line
  ],
};
export default config;