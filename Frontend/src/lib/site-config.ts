export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL ?? "mejiagabriel0715@gmail.com";

export const GITHUB_URL =
  import.meta.env.VITE_GITHUB_URL ?? "https://github.com/Gabbuvtt";

export const LINKEDIN_URL =
  import.meta.env.VITE_LINKEDIN_URL ?? "https://www.linkedin.com/";

export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  CONTACT_EMAIL,
)}&su=${encodeURIComponent("Contacto desde tu portafolio")}`;
