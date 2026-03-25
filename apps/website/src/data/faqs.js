/**
 * Centralised FAQ data for SkillYards.
 * Individual page FAQ components should import their slice from here
 * so all content stays in one place.
 */

export const faqCategories = {

    general: {
        label: "General",
        description: "About SkillYards, admissions, fees, and placement.",
        faqs: [
            {
                q: "What are the eligibility criteria for joining SkillYards?",
                a: "For skill courses (Full-Stack Dev & Digital Marketing), there is no strict eligibility — anyone with basic computer literacy can join. For degree programs (BCA & BBA), you need to have passed 12th grade with at least 50% marks.",
            },
            {
                q: "What's the difference between a Degree program and a Skill Course?",
                a: "Degree programs (BCA & BBA) are 3-year university-affiliated programs that give you an accredited bachelor's degree plus on-job training. Skill Courses (Full-Stack Dev & Digital Marketing) are shorter, intensive programs (3–6 months) focused on immediate job readiness with industry certificates. Both include placement support.",
            },
            {
                q: "How do I enroll in a program?",
                a: "Visit our Contact page or come to the campus directly. Our counsellors will guide you through the right program, seat availability, and the joining process. Enrollment is confirmed once the initial fee is paid.",
            },
            {
                q: "Can I join mid-batch?",
                a: "Mid-batch joining is possible in limited cases depending on how far the batch has progressed. Contact us to check availability and get access to recorded sessions to catch up.",
            },
            {
                q: "Is placement actually guaranteed?",
                a: "We have a 95% placement rate — which means we actively work to place every eligible student. We don't guarantee a specific salary, but we do guarantee dedicated placement support: resume building, mock interviews, referrals, and direct connections with 180+ hiring partners.",
            },
            {
                q: "What are the fee and EMI options?",
                a: "Skill courses start from ₹15,000 (Digital Marketing) and ₹25,000 (Full-Stack Dev). Degree program fees are shared during your counselling session. EMI and instalment options are available across all programs — contact us to know the exact payment plan.",
            },
            {
                q: "What payment modes are accepted?",
                a: "We accept UPI, bank transfer, cash, and debit/credit card at our campus. Online payments can be made via UPI or bank transfer after confirming your seat.",
            },
            {
                q: "Can I switch programs after joining?",
                a: "Program switches are evaluated case-by-case within the first 2 weeks of joining. After that, seat allocation and scheduling make switches difficult. We strongly recommend attending a counselling session before enrolling to make the right choice from the start.",
            },
            {
                q: "Are the programs available online?",
                a: "BCA and BBA are primarily offline (Agra campus), as they are university degree programs requiring physical attendance. Full-Stack Dev and Digital Marketing are available in hybrid mode (offline classes + recorded access online).",
            },
            {
                q: "What if I miss classes?",
                a: "All sessions are recorded and shared with enrolled students. Our mentors also hold weekly doubt-clearing sessions. For degree programs, we follow the university attendance policy (minimum 75% physical attendance required).",
            },
        ],
    },

    fullstack: {
        label: "Full-Stack Dev",
        description: "Everything about the Full-Stack Development program.",
        faqs: [
            {
                q: "Do I need prior coding experience to join?",
                a: "No. The course starts from absolute scratch — HTML, CSS, and basic JavaScript in Month 1. The only requirement is basic computer comfort (using a browser, typing). If you can use WhatsApp and Google, you can start this course.",
            },
            {
                q: "Is a laptop mandatory? What are the minimum specs?",
                a: "Yes, a laptop is required — this is a hands-on practical course. Minimum: Intel Core i5 / Ryzen 5, 8GB RAM, 256GB SSD, Windows 10 or macOS. A smartphone alone won't work. If you don't have a laptop that meets these specs, talk to us before enrolling.",
            },
            {
                q: "What if I miss a class?",
                a: "Every session is recorded and shared with enrolled students within 24 hours. We also hold weekly doubt-clearing sessions. That said — missing classes regularly will hurt you. The projects have deadlines. The code reviews expect your code.",
            },
            {
                q: "How is this different from just learning on YouTube or Udemy?",
                a: "YouTube gives you videos. We give you a mentor who reviews your code, peers who challenge you, real projects with real deadlines, and placement support that includes actual referrals to companies. 95% of people who start a programming tutorial online don't finish it. Our completion rate is the opposite.",
            },
            {
                q: "Is placement really 95%? What does that actually mean?",
                a: "It means 100% active effort — resume building, mock interviews, referrals to our 180+ hiring partners, and direct introductions where possible. It does not mean we guarantee a specific salary or that a company must hire you. We will work hard to get you placed — but you have to show up hireable.",
            },
            {
                q: "Can I join if I'm currently working a day job?",
                a: "Yes. We offer weekend batches and evening batches for working professionals. Check current availability during your free demo session. Be honest with yourself though — this course requires 4–6 hours of daily work. A full-time job + this course is doable but demanding.",
            },
            {
                q: "What language is the course taught in?",
                a: "Primarily Hinglish (Hindi + English) — which is the most effective way to explain complex technical concepts to students in Agra. Technical terms, documentation, and code are in English. No prior English fluency required.",
            },
            {
                q: "How many students are in each batch?",
                a: "Maximum 20 students per batch. This is intentional — smaller batches mean more mentor attention, better code review quality, and a tighter peer learning environment. We don't scale beyond 20 per batch.",
            },
            {
                q: "What happens after I complete the course?",
                a: "You stay in the SkillYards alumni network — which means access to future job referrals, continued doubt support for 3 months post-completion, and invites to alumni events. Many graduates come back as mentors once they're 2–3 years into their careers.",
            },
            {
                q: "What's the refund and cancellation policy?",
                a: "Full refund if you cancel before attending the first class. 50% refund within the first 2 weeks. No refund after 2 weeks. The free demo class exists precisely so you can make this decision before paying — we strongly recommend attending before enrolling.",
            },
        ],
    },

    digitalmarketing: {
        label: "Digital Marketing",
        description: "Everything about the Digital Marketing program.",
        faqs: [
            {
                q: "Do I need any prior marketing or tech knowledge?",
                a: "None at all. The course starts from the very beginning — what digital marketing is, why it matters, and how each channel works. If you can use Instagram and search on Google, you have everything you need to start.",
            },
            {
                q: "Do I need to know coding?",
                a: "No. Digital marketing is creative and analytical — not technical. You'll learn to use tools, run campaigns, and read data. The most technical thing you'll do is set up a WordPress site, which requires no coding.",
            },
            {
                q: "Is a laptop mandatory? What specs do I need?",
                a: "Yes, a laptop is required. Any laptop with 4GB+ RAM running Windows 10 or macOS works — digital marketing tools are browser-based, so even an older machine is fine. This is much more accessible than coding courses.",
            },
            {
                q: "Will I get access to paid tools like Ahrefs or SEMrush?",
                a: "Yes. Tool access is included during the course — you don't need to subscribe yourself. This includes Ahrefs, SEMrush (or Ubersuggest), Canva Pro, and Google Workspace. These are the same tools working professionals use daily.",
            },
            {
                q: "Are the campaigns run on real client accounts with real money?",
                a: "Yes, from Month 2. You run live Google Ads and Meta Ads campaigns on real client accounts with real budgets and real targets. You'll have actual performance data (ROAS, CPL, impressions) for your portfolio. This is the biggest differentiator of SkillYards training.",
            },
            {
                q: "What certifications will I earn?",
                a: "During the course we guide you through earning: Google Ads Certification (Search), Google Analytics 4 Certification, Meta Blueprint Certification, and HubSpot Content Marketing Certification. All four are free to take — we just make sure you're prepared and have time built into the schedule.",
            },
            {
                q: "Is placement guaranteed? What does that actually mean?",
                a: "95% of eligible students are placed — meaning we actively work on your behalf: resume building, mock interviews, referrals to 180+ hiring partners, and direct introductions where possible. We don't guarantee a specific salary or force a company to hire you. But we don't stop until you have offers to evaluate.",
            },
            {
                q: "Can I freelance after this course? Will SkillYards help me find clients?",
                a: "Many graduates do freelance — especially local business owners and homemakers. We cover freelancing setup in Month 4: pricing, proposals, contracts, and client communication. While we don't directly find freelance clients, the skills and portfolio you build make it straightforward to start approaching local businesses.",
            },
            {
                q: "Are there evening or weekend batches for working professionals?",
                a: "Yes. We offer weekday morning, weekday evening, and weekend batches. Working professionals commonly join evening or weekend batches. Discuss options during your free demo session.",
            },
            {
                q: "How is this different from doing a free Google Digital Garage course?",
                a: "Google Digital Garage teaches concepts. SkillYards OJT makes you execute them on real accounts, with real budgets, with a mentor watching and correcting your work. The difference between watching a video about running a campaign and actually running one is a job offer.",
            },
            {
                q: "Can small business owners join to grow their own business?",
                a: "Absolutely — and several do. If you run or help run a family business, you can apply everything you learn to your own brand in real time. Many graduates report growing their business during the course itself, not just after.",
            },
            {
                q: "What language are classes taught in?",
                a: "Hinglish — Hindi mixed with English. Technical terms and tools are in English, but explanations are in Hindi or Hinglish to make sure everyone understands deeply. No prior English fluency required.",
            },
        ],
    },

    degrees: {
        label: "BCA & BBA",
        description: "About the 3-year degree programs.",
        faqs: [
            {
                q: "What are the eligibility criteria for BCA and BBA?",
                a: "Both BCA and BBA require 12th pass (any stream) with a minimum of 50% marks. There's no entrance exam — just a counselling session to ensure the program is the right fit for you.",
            },
            {
                q: "Are BCA and BBA degrees university-recognised?",
                a: "Yes. Both programs are affiliated with a recognised university. You receive a standard bachelor's degree (BCA or BBA) along with on-job training and industry certifications from SkillYards.",
            },
            {
                q: "Do BCA and BBA programs offer placement support?",
                a: "Yes. Both programs include SkillYards' full placement support — resume building, mock interviews, and referrals to our hiring network. Our 95% placement rate applies to degree students too.",
            },
            {
                q: "Is attendance mandatory for degree programs?",
                a: "Yes. BCA and BBA are primarily offline programs with university attendance requirements. A minimum of 75% physical attendance is required as per university policy.",
            },
            {
                q: "Can I do BCA if I'm from an arts or commerce background?",
                a: "Yes. BCA does not require a science background at 12th level — any stream is accepted as long as you meet the 50% minimum marks requirement.",
            },
            {
                q: "What is the OJT (On-Job Training) component in degree programs?",
                a: "OJT is SkillYards' signature component where you work on real client projects alongside your academic coursework. This gives degree students practical skills that go beyond the university syllabus and directly supports placement.",
            },
        ],
    },

    support: {
        label: "Support",
        description: "Technical help, LMS access, and administrative queries.",
        faqs: [
            {
                q: "I can't access my student portal / LMS. What do I do?",
                a: "Try resetting your password first. If the issue persists, WhatsApp or email us with your enrollment ID and we'll restore access within a few hours.",
            },
            {
                q: "Where can I find recorded sessions?",
                a: "Recorded sessions are uploaded to the LMS within 24 hours of each class. Check the 'Recordings' section under your enrolled course. If a recording is missing, contact your batch coordinator.",
            },
            {
                q: "How do I get a payment receipt or invoice?",
                a: "A receipt is issued at the time of payment. If you need a duplicate receipt or a formal invoice for reimbursement, email us with your enrollment details.",
            },
            {
                q: "What does the placement process look like?",
                a: "Placement prep starts from week 1 — resume building, LinkedIn optimisation, and mock interviews. In the final phase, we connect you with our 180+ hiring partners through referrals, on-campus drives, and direct introductions.",
            },
        ],
    },

    test: {
        label: "Skill Test",
        description: "About the free 10-minute skill assessment.",
        faqs: [
            {
                q: "Is the skill test really free?",
                a: "Yes, completely free. There is no payment, no subscription, and no catch. You take the test, get your score, and receive a certificate — all at zero cost.",
            },
            {
                q: "How long does the test take?",
                a: "The test has 20–25 multiple choice questions and is designed to be completed in under 10 minutes. Most students finish in 6–8 minutes.",
            },
            {
                q: "Do I need any coding experience to take the test?",
                a: "No coding is required. The test is multiple choice — you just need a basic familiarity with HTML, CSS, JavaScript, and SEO concepts. Beginners are welcome.",
            },
            {
                q: "When will I receive my certificate?",
                a: "Your certificate is generated instantly after you submit the test. It is emailed to the address you provide in the registration form, typically within a few minutes.",
            },
            {
                q: "Is the certificate valid / recognised?",
                a: "The certificate is issued by SkillYards and is suitable for sharing on LinkedIn, your portfolio, or your CV. It demonstrates that you have completed a verified skill assessment.",
            },
            {
                q: "What happens if I score below 60%?",
                a: "You still receive a certificate — labelled 'Beginner' — along with a personalised recommendation for which SkillYards program would help you reach the next level. There is no fail.",
            },
            {
                q: "Can I retake the test?",
                a: "Yes, you can retake the test after 7 days. We encourage you to revisit the topics you found challenging and come back for a better score.",
            },
            {
                q: "Will SkillYards contact me after the test?",
                a: "Our counselling team may reach out with a program recommendation based on your score — but only once, and only to help. You can opt out at any time.",
            },
        ],
    },
};
