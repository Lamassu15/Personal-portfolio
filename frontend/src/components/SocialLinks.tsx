import { FiLinkedin, FiGithub } from "react-icons/fi";
import { socialLinks } from "../data/socialLinks";
import { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  linkedin: <FiLinkedin />,
  github: <FiGithub />,
};

const SocialLinks = () => {
  return (
    <div className="flex gap-6">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:animate-pulse transition hover:opacity-80"
          aria-label={`Visit our ${link.name} page`}
        >
          {iconMap[link.icon]}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
