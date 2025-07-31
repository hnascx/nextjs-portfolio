import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        blue: {
          900: "#0f172a",
        },
        cyan: {
          100: "#5EEAD4",
          200: "#134E4A",
        },
        gray: {
          100: "#E5E7EB",
          200: "#94A3B8",
          300: "#64748B",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontSize: {
        // Heading
        "heading-lg": ["48px", { lineHeight: "100%", fontWeight: "700" }],
        "heading-md": ["20px", { lineHeight: "175%", fontWeight: "400" }],
        "heading-sm": ["12px", { lineHeight: "120%", fontWeight: "500" }],

        // Body
        "body-md": ["16px", { lineHeight: "150%", fontWeight: "300" }],
        "body-sm": ["14px", { lineHeight: "150%", fontWeight: "300" }],
        "body-xs": ["12px", { lineHeight: "150%", fontWeight: "300" }],

        // Tags
        "body-tag": ["12px", { lineHeight: "100%", fontWeight: "400" }],
      },
    },
  },
} satisfies Config
