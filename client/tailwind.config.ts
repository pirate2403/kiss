import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        // Brand
        "brand-black": "#333",
        "brand-green": "#6BC2BB",
        "brand-green-20": "rgba(107, 194, 187, 0.20)",
        "brand-green-1": "#60AEA8",
        "brand-green-2": "#559B95",
        "brand-yellow": "#FFC639",
        "brand-yellow-1": "#E5B233",
        "brand-yellow-2": "#CC9E2D",
        "brand-red": "#DB4D45",
        "brand-red-1": "#C5453E",
        "brand-red-2": "#AF3D37",
        // Grayscale
        "gray-5": "#FAFAFC",
        "gray-10": "#E7E9ED",
        "gray-20": "#CED2DB",
        "gray-30": "#B6BCC9",
        "gray-40": "#9EA5B8",
        "gray-40-25": "rgba(158, 165, 184, 0.25)",
        "gray-50": "#858FA6",
        // Semantic
        message: "#4070F4",
        "message-20": "rgba(64, 112, 244, 0.20)",
        success: "#0BB07B",
        "success-20": "rgba(11, 176, 123, 0.20)",
        warning: "#FFAD0D",
        "warning-20": "rgba(255, 173, 13, 0.20)",
        error: "#F03D3D",
        "error-20": "rgba(240, 61, 61, 0.20)",
        information: "#3C4C70",
        white: "#FFF",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        bold: "700",
      },
      boxShadow: {
        s: "0px 2px 4px 0px rgba(11, 31, 77, 0.08)",
        m: "0px 4px 8px 0px rgba(11, 31, 77, 0.10)",
        l: "0px 8px 16px 0px rgba(11, 31, 77, 0.12)",
        xl: "0px 12px 24px 0px rgba(11, 31, 77, 0.14)",
        xxl: "0px 16px 32px 0px rgba(11, 31, 77, 0.16)",
      },
      lineHeight: {
        base: "21.6px",
      },
    },
  },
};
export default config;
