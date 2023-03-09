import Link from "next/link";
import { useRouter } from "next/router";

export default function ActiveLink({ children, ...rest }) {
  const { asPath } = useRouter();

  const colorClasses = asPath === rest.href ? "text-black" : "text-gray";

  return (
    <li
      className={`${colorClasses} hover:text-black transition-all ease delay-50`}
    >
      <Link {...rest}>{children}</Link>
    </li>
  );
}
