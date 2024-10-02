import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./shared/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/components/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      /** BreakPoints **/
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontSize: {
        /** Typography **/
        "5xl": [
          "3rem",
          {
            lineHeight: "var(--leading-h1)",
          },
        ],
        "4xl": [
          "2.5rem",
          {
            lineHeight: "3rem",
          },
        ],
        "3xl": [
          "2rem",
          {
            lineHeight: "2.375rem",
          },
        ],
        "2xl": [
          "1.75rem",
          {
            lineHeight: "2.125rem",
          },
        ],
        xl: [
          "1.5rem",
          {
            lineHeight: "1.75rem",
          },
        ],
      },
      colors: {
        black: {
          50: "rgba(0, 0, 0, 0.1)",
          100: "rgba(0, 0, 0, 0.2)",
          200: "rgba(0, 0, 0, 0.3)",
          300: "rgba(0, 0, 0, 0.4)",
          400: "rgba(0, 0, 0, 0.5)",
          500: "rgba(0, 0, 0, 0.6)",
          600: "rgba(0, 0, 0, 0.7)",
          700: "rgba(0, 0, 0, 0.8)",
          800: "rgba(0, 0, 0, 0.9)",
          900: "rgba(0, 0, 0, 1)",
        },
        white: {
          50: "rgba(255, 255, 255, 0.1)",
          100: "rgba(255, 255, 255, 0.2)",
          200: "rgba(255, 255, 255, 0.3)",
          300: "rgba(255, 255, 255, 0.4)",
          400: "rgba(255, 255, 255, 0.5)",
          500: "rgba(255, 255, 255, 0.6)",
          600: "rgba(255, 255, 255, 0.7)",
          700: "rgba(255, 255, 255, 0.8)",
          800: "rgba(255, 255, 255, 0.9)",
          900: "rgba(255, 255, 255, 1)",
        },
        primary: {
          50: "#FFFFFF",
          100: "#C8CEFC",
          200: "#AEB6FB",
          300: "#8895F9",
          400: "#7181F8",
          500: "#4E61F6",
          600: "#4758E0",
          700: "#3745AF",
          800: "#2B3587",
          900: "#212967",
        },
        grey: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EA",
          300: "#D2D5DB",
          400: "#9EA2AE",
          500: "#6D717F",
          600: "#4D5461",
          700: "#394050",
          800: "#212936",
          900: "#000000",
        },
        success: {
          50: "#ECF8EF",
          100: "#C5E9CD",
          200: "#A9DEB4",
          300: "#81CF92",
          400: "#69C57D",
          500: "#43B75D",
          600: "#3DA755",
          700: "#308242",
          800: "#256533",
          900: "#1C4D27",
        },
        danger: {
          50: "#FDECEC",
          100: "#FAC5C3",
          200: "#F7A9A7",
          300: "#F4827E",
          400: "#F16965",
          500: "#EE443F",
          600: "#D93E39",
          700: "#A9302D",
          800: "#832523",
          900: "#641D1A",
        },
        warning: {
          50: "#FFF7E6",
          100: "#FFE5B0",
          200: "#FFD88A",
          300: "#FFC654",
          400: "#FFBB33",
          500: "#FFAA00",
          600: "#E89B00",
          700: "#B57900",
          800: "#8C5E00",
          900: "#6B4700",
        },
        info: {
          50: "#E6F4FF",
          100: "#B0DEFF",
          200: "#8ACEFF",
          300: "#54B8FF",
          400: "#33AAFF",
          500: "#0095FF",
          600: "#0088E8",
          700: "#006AB5",
          800: "#00528C",
          900: "#003F6B",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};

export default config;
