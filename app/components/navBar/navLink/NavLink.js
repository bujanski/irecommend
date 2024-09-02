"use client";
import Link from "next/link";
import styles from "./NavLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
    const pathName = usePathname();

    return (
        <Link
            href={link.path}
            className={`${styles.container} ${
                pathName === link.path && styles.active
            }`}
        >
            {link.title}
        </Link>
    );
};

export default NavLink;
