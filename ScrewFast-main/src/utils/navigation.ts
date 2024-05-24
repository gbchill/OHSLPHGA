// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Programs", url: "/products" },
  { name: "Instructors", url: "/services" },
  { name: "Lineage", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Quick Links",
    links: [
      { name: "Home", url: "/" },
      { name: "Programs", url: "/products" },
      { name: "Instructors", url: "/services" },
      { name: "Lineage", url: "/blog" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};