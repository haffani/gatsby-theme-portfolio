module.exports = {
  siteTitle: "Hamza AFFANI | Software Engineer",
  siteDescription:
    "Hamza AFFANI is a software engineer based in Casablanca, who specializes in developing high-quality payment systems and applications.",
  siteKeywords:
    "Hamza AFFANI, Hamza, Affani, haffani, software engineer, front-end engineer, Java developer, javascript",
  siteUrl: "https://hamza-affani.netlify.com",
  siteLanguage: "en_US",
  name: "AFFANI Hamza",
  location: "Casablanca, Morocco",
  email: "elaffani95@@gmail.com",
  github: "https://github.com/liffanu",
  twitterHandle: "@elaffani95",
  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/liffanu",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/hamza-affani/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hamzaaffani/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/elaffani95",
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Experience",
      url: "/#jobs",
    },
    {
      name: "Work",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],

  navHeight: 100,
  greenColor: "#64ffda",
  navyColor: "#0a192f",
  darkNavyColor: "#020c1b",

  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 5, z: 10 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.3,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
