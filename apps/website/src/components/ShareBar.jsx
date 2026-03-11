"use client";

import { useState, useEffect } from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTelegramPlane,
    FaTwitter,
    FaWhatsapp,
    FaEnvelope,
    FaCommentDots,
    FaTimes,
    FaChevronLeft,
} from "react-icons/fa";

import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookMessengerShareButton,
} from "react-share";

const STORAGE_KEY = "sharebar-visible";


const ShareBar = () => {
    const [mounted, setMounted] = useState(false);
    const [showBar, setShowBar] = useState(true);
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        setMounted(true);

        // Load saved state
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved !== null) setShowBar(saved === "true");

        setCurrentUrl(window.location.href);

        const handleResize = () => {
            if (localStorage.getItem(STORAGE_KEY) === "false") return;
            setShowBar(window.innerWidth >= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const hideBar = () => {
        localStorage.setItem(STORAGE_KEY, "false");
        setShowBar(false);
    };

    const showBarHandler = () => {
        localStorage.setItem(STORAGE_KEY, "true");
        setShowBar(true);
    };

    if (!mounted) return null; // Prevent FOUC

    const shareTitle = "SkillYards – Empowering Future Skills";
    const shareDesc = "Join SkillYards.in to learn, certify, and grow your professional skillset.";

    // Env toggles
    const showFacebook = true;
    const showLinkedIn = true;
    const showTwitter = true;
    const showTelegram = true;
    const showWhatsApp = true;
    const showMessenger = false;
    const showEmail = true;

    return (
        <>
            {showBar ? (
                <div
                    className="
        fixed top-1/3 right-3 z-50 flex flex-col gap-3
        rounded-3xl
        bg-white/80 dark:bg-neutral-900/80
        backdrop-blur-xl
        border border-white/40 dark:border-white/10
        shadow-[0_20px_40px_rgba(0,0,0,0.12)]
        p-3
        transition-all duration-300
        "
                >
                    {showFacebook && (
                        <FacebookShareButton url={currentUrl} quote={shareTitle} hashtag="#SkillYards" aria-label="Share on Facebook"
                                             title="Share on Facebook">
                            <GlassIcon bg="bg-[#1877F2]">
                                <FaFacebookF size={18} />
                            </GlassIcon>
                        </FacebookShareButton>
                    )}

                    {showTwitter && (
                        <TwitterShareButton url={currentUrl} title={shareTitle} aria-label="Share on Twitter">
                            <GlassIcon bg="bg-[#1DA1F2]">
                                <FaTwitter size={18} />
                            </GlassIcon>
                        </TwitterShareButton>
                    )}

                    {showLinkedIn && (
                        <LinkedinShareButton url={currentUrl} aria-label="Share on LinkedIn"
                                             title="Share on LinkedIn">
                            <GlassIcon bg="bg-[#0A66C2]">
                                <FaLinkedinIn size={18} />
                            </GlassIcon>
                        </LinkedinShareButton>
                    )}

                    {showTelegram && (
                        <TelegramShareButton url={currentUrl} title={shareTitle} aria-label="Share on Telegram">
                            <GlassIcon bg="bg-[#0088CC]">
                                <FaTelegramPlane size={18} />
                            </GlassIcon>
                        </TelegramShareButton>
                    )}

                    {showWhatsApp && (
                        <WhatsappShareButton url={currentUrl} title={shareTitle} aria-label="Share on WhatsApp">
                            <GlassIcon bg="bg-[#25D366]">
                                <FaWhatsapp size={18} />
                            </GlassIcon>
                        </WhatsappShareButton>
                    )}

                    {showEmail && (
                        <EmailShareButton url={currentUrl} subject="Discover SkillYards" aria-label="Share via Email"
                                          title="Share via Email">
                            <GlassIcon bg="bg-[#EA4335]">
                                <FaEnvelope size={18} />
                            </GlassIcon>
                        </EmailShareButton>
                    )}

                    {/* Close */}
                    <button
                        onClick={hideBar}
                        className="
            mt-1 flex items-center justify-center
            h-11 w-11 rounded-full
            bg-neutral-200/70 dark:bg-neutral-800/70
            backdrop-blur-md
            border border-white/30
            hover:-translate-y-px
            transition
            "
                        aria-label="Hide share menu"
                    >
                        <FaTimes size={16} />
                    </button>
                </div>
            ) : (
                <button
                    onClick={showBarHandler}
                    className="
        fixed top-1/2 right-3 z-50
        h-12 w-12 rounded-full
        bg-white/80 dark:bg-neutral-900/80
        backdrop-blur-xl
        border border-white/40
        shadow-lg
        flex items-center justify-center
        hover:-translate-x-0.5
        transition
        "
                    aria-label="Show share menu"
                >
                    <FaChevronLeft size={18} />
                </button>
            )}
        </>
    );
};

export default ShareBar;

function GlassIcon({ children, bg }) {
    return (
        <div
            className={`
            relative flex items-center justify-center
            h-11 w-11 rounded-full
            ${bg}
            text-white
            shadow-md
            hover:-translate-y-0.5
            hover:shadow-xl
            transition-all duration-300
            `}
        >
            {/* Glass highlight */}
            <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10" />
            {children}
        </div>
    );
}
