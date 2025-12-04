
import { FaPhoneAlt, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const FloatingNav = () => {
  return (
    <div className="floating_nav">
      <a href="tel:+919951911087" className="nav_icon phone">
        <FaPhoneAlt />
      </a>

      <a
  href="https://wa.me/919951911087"
  target="_blank"
  rel="noopener noreferrer"
  className="nav_icon whatsapp"
>
  <FaWhatsapp />
</a>

<a
  href="https://www.linkedin.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="nav_icon linkedin"
>
  <FaLinkedin />
</a>

    </div>
  );
};

export default FloatingNav;
