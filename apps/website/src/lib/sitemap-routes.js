export const BASE_URL = "https://www.skillyards.in";

export const STATIC_SITEMAP_ROUTES = [
    { path: "/", label: "Home", section: "Company", priority: 1.0 },
    { path: "/about", label: "About Us", section: "Company" },
    { path: "/contact", label: "Contact", section: "Company" },
    { path: "/gallery", label: "Gallery", section: "Company" },

    { path: "/programs", label: "Programs", section: "Courses" },
    { path: "/programs/fullstack", label: "Full-Stack Development", section: "Courses" },
    { path: "/programs/digitalmarketing", label: "Digital Marketing", section: "Courses" },
    { path: "/programs/bca", label: "BCA Programs", section: "Courses" },
    { path: "/programs/bba", label: "BBA Programs", section: "Courses" },

    { path: "/blog", label: "Blog", section: "Resources" },
    { path: "/faqs", label: "FAQs", section: "Resources" },
    { path: "/support", label: "Support", section: "Resources" },
    { path: "/10-minutes-test", label: "10-Minute Skill Test", section: "Resources" },

    { path: "/careers", label: "Careers", section: "Careers" },
    { path: "/team", label: "Our Team", section: "Company" },

    { path: "/testimonials", label: "Testimonials", section: "Students" },
    { path: "/success-stories", label: "Success Stories", section: "Students" },

    { path: "/legal/privacy-policy", label: "Privacy Policy", section: "Legal" },
    { path: "/legal/refund-policy", label: "Refund Policy", section: "Legal" },
    { path: "/legal/terms-of-service", label: "Terms of Service", section: "Legal" },

    { path: "/unsubscribe", label: "Unsubscribe", section: "Legal" },
];

export const LEADERS = [
    { username: "suryanshupadhyay", name: "Suryansh Upadhyay" },
    { username: "rahulsingh", name: "Rahul Singh" },
];

export const PROGRAMS = [
    { slug: "bca", priority: 0.95 },
    { slug: "bba", priority: 0.95 },
    { slug: "fullstack", priority: 0.95 },
    { slug: "digitalmarketing", priority: 0.95 },
];