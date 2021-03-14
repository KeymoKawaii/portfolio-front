import Link from "next/link";

const Footer = () => {
    return (
    <footer>
        <div>
            <Link href="/Mentions-Legales">
            <a>
                Mentions Légales
            </a>
            </Link>
            <p>© 2021 All rights reserved | Paolo Trapu</p>
        </div>
    </footer>
  );
};

export default Footer;

