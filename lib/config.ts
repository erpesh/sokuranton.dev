const url = process.env.NEXT_PUBLIC_SITE_URL || "https://sokuranton.dev";
const fullName = "Anton Sokur";

export const siteConfig = {
    title: `${fullName} - Software Engineer`,
    fullName: fullName,
    description:
        `Portfolio of ${fullName}, a software engineer specializing in web development and machine learning.`,
    url: url,
    ogImage: `${url}/og-image.png`,
    links: {
        github: "https://github.com/erpesh",
        linkedin: "https://www.linkedin.com/in/anton-sokur/",
        email: "anton.sokur1@gmail.com",
        cv: `${url}/cv.pdf`,
    }
}