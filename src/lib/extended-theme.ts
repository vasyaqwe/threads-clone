import { type Config } from "tailwindcss"

export const extendedTheme = {
    screens: {
        xs: "456px",
    },
    colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
            DEFAULT: "hsl(var(--primary-400))",
            300: "hsl(var(--primary-300))",
            400: "hsl(var(--primary-400))",
            foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
            DEFAULT: "hsl(var(--secondary-400))",
            300: "hsl(var(--secondary-300))",
            400: "hsl(var(--secondary-400))",
        },
        neutral: {
            100: "hsl(var(--neutral-100))",
            700: "hsl(var(--neutral-700))",
            800: "hsl(var(--neutral-800))",
            900: "hsl(var(--neutral-900))",
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
        glassmorphism: "rgba(16, 16, 18, 0.60)",
    },
    fontSize: {
        "size-900": "var(--fs-900)",
        "size-800": "var(--fs-800)",
        "size-700": "var(--fs-700)",
        "size-600": "var(--fs-600)",
        "size-500": "var(--fs-500)",
        "size-400": "var(--fs-400)",
        "size-300": "var(--fs-300)",
    },
    borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
} satisfies Config["theme"]
