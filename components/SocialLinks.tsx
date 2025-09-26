import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 md:gap-4 text-4xl md:text-2xl">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
    </div>
  );
}
