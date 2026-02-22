import { useTranslations } from "next-intl";

import { Container } from "@/components/base/container";
import { Section } from "@/components/base/section";

const codeFrameworks = [
  {
    name: "Next.js",
    logo: (
      <svg viewBox="0 0 180 180" fill="none" className="size-8">
        <mask
          id="nextjs-mask"
          width="180"
          height="180"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#nextjs-mask)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path
            d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
            fill="url(#nextjs-g1)"
          />
          <path d="M115 54h12v72h-12z" fill="url(#nextjs-g2)" />
        </g>
        <defs>
          <linearGradient
            id="nextjs-g1"
            x1="109"
            y1="116.5"
            x2="144.5"
            y2="160.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="nextjs-g2"
            x1="121"
            y1="54"
            x2="120.799"
            y2="106.875"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Nuxt",
    logo: (
      <svg viewBox="0 0 400 400" fill="none" className="size-8">
        <path
          d="M227.3 321.7H370c4.7 0 9.3-1.3 13.3-3.7 4-2.4 7.3-5.9 9.4-10 2.1-4.1 2.9-8.7 2.3-13.3-.6-4.5-2.5-8.7-5.5-12.1L285.6 113.3c-2.1-3.4-5-6.2-8.5-8.2-3.5-2-7.5-3-11.5-3s-8 1-11.5 3c-3.5 2-6.4 4.8-8.5 8.2l-18.3 31.7L193 84.3c-2.1-3.4-5.1-6.2-8.6-8.2-3.5-2-7.5-3-11.5-3s-8 1-11.5 3c-3.5 2-6.5 4.8-8.6 8.2L5.5 282.6c-3 3.4-4.9 7.6-5.5 12.1-.6 4.5.2 9.2 2.3 13.3 2.1 4.1 5.4 7.6 9.4 10 4 2.4 8.6 3.7 13.3 3.7h89.7c36.7 0 63.7-16.1 82.3-47.5l65.8-113.5 18-31.7 54.2 93.5h-72.2l-18 31.7h109.6l-54.2 93.5h-71.7zm-114 0l-71.7-123.7 71.7-123.5 36 62L113 199.7l-17.8 30.8 18 31.2h-.9z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Remix",
    logo: (
      <svg viewBox="0 0 800 800" fill="none" className="size-8">
        <path
          d="M587.95 527.45c4.55 58.5 4.55 85.95 4.55 106.55H456.1c0-9.4.35-18.2.7-27.3 1.05-27.3 2.1-56.7-6.65-100.2-11.55-57.75-58.1-70.35-126-70.35H207.5V527h-0.5v107H80V165h276.5c123.55 0 197.05 43.75 197.05 143.5 0 73.15-45.5 120.75-106.4 136.15 57.75 15.4 112.7 44.1 140.8 82.8zm-283.45-213h-97v105h97c63 0 99.05-22.05 99.05-54.25S367.5 314.45 304.5 314.45z"
          fill="currentColor"
        />
        <path
          d="M207 633.95V527h117.15c17.93 0 28.81 2.7 28.81 22.79 0 18.14-1.04 55.81-1.04 84.16H207z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Astro",
    logo: (
      <svg viewBox="0 0 256 366" className="size-8">
        <path
          fill="currentColor"
          d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 00-79.426-26.891L133.318 73.008a5.63 5.63 0 00-10.802.017L79.784 219.11A276.453 276.453 0 000 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 019.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 019.95 7.373z"
        />
        <path
          fill="currentColor"
          fillOpacity=".6"
          d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14-5.07-7.197-2.017-18.687 5.727-24.727 13.107-10.225 25.755-5.06 31.82.98 4.298 4.283 6.327 10.297 6.087 17.593-.68 20.69-17.986 35.702-17.986 35.702 10.27 5.327 22.218 8.337 35.007 8.337 34.89 0 62.87-21.39 62.87-58.14 0-14.46-3.645-28.636-15.742-39.4z"
        />
      </svg>
    ),
  },
  {
    name: "SvelteKit",
    logo: (
      <svg viewBox="0 0 256 308" className="size-8">
        <path
          d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 00-37.135 49.074 85.566 85.566 0 003.968 55.044A82.186 82.186 0 00.003 191.59a85.604 85.604 0 0013.784 60.676c28.541 40.847 84.886 52.985 125.732 27.092l71.703-45.715a82.199 82.199 0 0037.134-49.074 85.566 85.566 0 00-3.967-55.044 82.187 82.187 0 009.077-28.117 85.601 85.601 0 00-13.784-60.7z"
          fill="currentColor"
          fillOpacity=".7"
        />
        <path
          d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 01-8.484-37.348 49.978 49.978 0 011.98-8.429l1.36-3.778 3.482 2.637a95.429 95.429 0 0028.876 14.814l2.742.86-.252 2.743a16.264 16.264 0 002.62 10.642c5.77 8.18 16.559 11.132 25.65 7.024a15.086 15.086 0 003.293-2.029l71.7-45.699a14.96 14.96 0 006.755-10.542 16.232 16.232 0 00-2.615-11.551c-5.77-8.181-16.559-11.132-25.65-7.024a15.153 15.153 0 00-3.294 2.028l-27.376 17.44c-4.292 2.781-9.033 4.751-13.99 5.81-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 01-8.484-37.348 48.593 48.593 0 0121.932-34.218l71.7-45.699a49.174 49.174 0 0113.99-5.81c23.102-6.007 47.497 3.036 61.103 22.648a52.685 52.685 0 018.484 37.348 50.122 50.122 0 01-1.98 8.429l-1.36 3.779-3.481-2.638a95.429 95.429 0 00-28.877-14.814l-2.742-.86.252-2.742a16.264 16.264 0 00-2.62-10.643c-5.769-8.18-16.558-11.131-25.649-7.023a15.15 15.15 0 00-3.294 2.028l-71.7 45.699a14.96 14.96 0 00-6.755 10.542 16.232 16.232 0 002.615 11.551c5.77 8.182 16.559 11.132 25.65 7.024a15.153 15.153 0 003.294-2.028l27.376-17.44a49.166 49.166 0 0113.99-5.81c23.102-6.007 47.497 3.036 61.103 22.648a52.685 52.685 0 018.484 37.348 48.593 48.593 0 01-21.932 34.218l-71.7 45.699a49.174 49.174 0 01-13.99 5.81z"
          fill="currentColor"
        />
      </svg>
    ),
  },
] as const;

const nocodeTools = [
  {
    name: "WeWeb",
    logo: (
      <svg viewBox="0 0 120 120" className="size-8">
        <path
          d="M20 30 L35 90 L50 50 L65 90 L80 30"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50 30 L65 90 L80 50 L95 90 L110 30"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </svg>
    ),
  },
  {
    name: "Webflow",
    logo: (
      <svg viewBox="0 0 256 153" className="size-8">
        <path d="M256 0v152.948H0V0h256z" fill="none" />
        <path
          d="M187.25 29.47s-16.17 49.77-17.73 54.8c-.4-5.54-11.39-54.8-11.39-54.8-25.08 0-38.04 17.5-45 35.93 0 0-17.49 46.6-19.17 51.4-0.18-5.67-5.31-51.4-5.31-51.4-1.5-23.18-22.56-35.93-39.1-35.93L71.6 123.48s16.35 0 17.77-0.24c-.13 0 19.86-53.14 19.86-53.14 1.37 5.55 12.6 53.38 12.6 53.38s17.59 0 18.73-.24c-.06 0 20.2-54.77 20.2-54.77 1.16 5.3 7.67 54.77 7.67 54.77s17.48.24 17.48.24l19.88-93.78c-14.37 0-18.54.04-18.54.04z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Bubble",
    logo: (
      <svg viewBox="0 0 60 60" className="size-8">
        <circle cx="22" cy="22" r="14" fill="currentColor" fillOpacity="0.8" />
        <circle cx="38" cy="38" r="14" fill="currentColor" fillOpacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Softr",
    logo: (
      <svg viewBox="0 0 60 60" className="size-8">
        <rect
          x="8"
          y="8"
          width="18"
          height="18"
          rx="4"
          fill="currentColor"
          fillOpacity="0.9"
        />
        <rect
          x="34"
          y="8"
          width="18"
          height="18"
          rx="4"
          fill="currentColor"
          fillOpacity="0.6"
        />
        <rect
          x="8"
          y="34"
          width="18"
          height="18"
          rx="4"
          fill="currentColor"
          fillOpacity="0.6"
        />
        <rect
          x="34"
          y="34"
          width="18"
          height="18"
          rx="4"
          fill="currentColor"
          fillOpacity="0.3"
        />
      </svg>
    ),
  },
] as const;

export function WorksWith() {
  const t = useTranslations("WorksWith");

  return (
    <Section spacing="sm">
      <Container>
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
          {t("title")}
        </p>

        {/* Code Frameworks */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {codeFrameworks.map(({ name, logo }) => (
            <div
              key={name}
              className="flex items-center gap-2 text-muted-foreground/50 transition-colors hover:text-muted-foreground"
              title={name}
            >
              {logo}
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="my-6 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-border" />
          <span className="text-xs text-muted-foreground/50">
            {t("nocode")}
          </span>
          <div className="h-px w-12 bg-border" />
        </div>

        {/* No-code Tools */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {nocodeTools.map(({ name, logo }) => (
            <div
              key={name}
              className="flex items-center gap-2 text-muted-foreground/50 transition-colors hover:text-muted-foreground"
              title={name}
            >
              {logo}
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
