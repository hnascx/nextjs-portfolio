import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
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
          200: "#94a3b8",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        // Heading
        "heading-hg": ["40px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-xl": ["32px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-lg": ["28px", { lineHeight: "120%", fontWeight: "700" }],

        // Body
        "body-md": ["16px", { lineHeight: "150%", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "150%", fontWeight: "400" }],
        "body-xs": ["12px", { lineHeight: "150%", fontWeight: "400" }],

        // Tags
        "body-tag": ["12px", { lineHeight: "100%", fontWeight: "400" }],
      },
    },
  },
} satisfies Config
