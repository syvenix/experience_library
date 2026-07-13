export const designTokens = {
  colors: {
    primary: "#2563EB",
    navy: "#0B1F36",
    cyan: "#00C6E6",
    emerald: "#00B67A",
    lightBlue: "#E8F3FF",
    cloud: "#F5F7FA",
    lightGray: "#E6ECF2",
    white: "#FFFFFF",
    ink: "#081A33",
    body: "#41516A",
    muted: "#6D7C94",
    border: "#DDE7F3",
    success: "#DDF8ED",
    successText: "#007A52",
    warning: "#F8B84E",
    danger: "#FF4B55"
  },
  typography: {
    fontFamily: {
      sans: [
        "var(--font-inter)",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "sans-serif"
      ],
      editorial: [
        "var(--font-playfair)",
        "Playfair Display",
        "Georgia",
        "serif"
      ]
    },
    fontSize: {
      small: ["14px", { lineHeight: "22px", fontWeight: "400" }],
      body: ["16px", { lineHeight: "26px", fontWeight: "400" }],
      h4: ["24px", { lineHeight: "32px", fontWeight: "600" }],
      h3: ["32px", { lineHeight: "40px", fontWeight: "600" }],
      h2: ["48px", { lineHeight: "56px", fontWeight: "700" }],
      h1: ["64px", { lineHeight: "72px", fontWeight: "700" }]
    }
  },
  spacing: {
    0: "0px",
    1: "8px",
    2: "16px",
    3: "24px",
    4: "32px",
    5: "40px",
    6: "48px",
    7: "56px",
    8: "64px",
    9: "72px",
    10: "80px",
    12: "96px",
    16: "128px"
  },
  radius: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    "2xl": "28px",
    pill: "999px"
  },
  shadow: {
    xs: "0 4px 12px rgb(11 31 54 / 0.06)",
    sm: "0 8px 24px rgb(11 31 54 / 0.08)",
    md: "0 14px 40px rgb(11 31 54 / 0.10)",
    lg: "0 20px 56px rgb(11 31 54 / 0.12)",
    xl: "0 28px 80px rgb(11 31 54 / 0.16)",
    glow: "0 20px 60px rgb(37 99 235 / 0.22)"
  },
  motion: {
    duration: {
      fast: 0.14,
      base: 0.18,
      max: 0.2
    },
    ease: [0.22, 1, 0.36, 1]
  }
} as const;

export type DesignTokens = typeof designTokens;
