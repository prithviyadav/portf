import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/prithviyadav",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/prithvi-yadav-590742232/",
  },
];

export default function Social({containerStyles, iconStyles}) {
  return <div className={containerStyles}>
    {socials.map((social, index) => {
      return <Link key={index} href={social.path} target="_blank" className={iconStyles}>{social.icon}</Link>
    })}
  </div>;
}
