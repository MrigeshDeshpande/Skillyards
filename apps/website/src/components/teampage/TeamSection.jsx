import TeamMemberCard from "./TeamMemberCard";

/**
 * TeamSection
 *
 * Props:
 * @param {string}   title    — Section heading e.g. "Leadership"
 * @param {string}   [subtitle] — Optional subheading
 * @param {Array}    members  — Array of TeamMemberCard props objects
 */
export default function TeamSection({ title, subtitle, members = [] }) {
    if (!members.length) return null;

    return (
        <div className="mb-20">
            {/* Section header */}
            <div className="mb-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                    {title}
                </p>
                {subtitle && (
                    <p className="text-muted-foreground text-base max-w-xl">
                        {subtitle}
                    </p>
                )}
                <div className="mt-3 w-10 h-[3px] rounded-full bg-primary" />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {members.map((member) => (
                    <TeamMemberCard key={member.name} {...member} />
                ))}
            </div>
        </div>
    );
}
