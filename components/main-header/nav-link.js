"use client"
import Link from "next/link"
import styles from "./nav-link.module.css"
import { usePathname } from "next/navigation"

const NavLink = ({ href, children }) => {
	const path = usePathname()

	return (
		<Link href={href} className={path === href ? styles.active : undefined}>
			{children}
		</Link>
	)
}

export default NavLink