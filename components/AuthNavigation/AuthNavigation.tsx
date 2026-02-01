"use client";

import Link from "next/link";
import { useAuthStore } from "@/lib/stores/authStore";
import { logout } from "@/lib/api/clientApi";
import { useRouter } from "next/navigation";
import css from "./AuthNavigation.module.css";

const AuthNavigation = () => {
  const router = useRouter();
  const { isAuthenticated, user } = useAuthStore();
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated,
  );

  const handleLogout = async () => {
    await logout();
    clearIsAuthenticated();
    router.push("/sign-in");
  };

  return isAuthenticated ? (
    <>
      <li>
        <Link href="/profile">{user?.email}</Link>
      </li>
      <li>
        <button onClick={handleLogout} className={css.ctaButton}>
          Logout
        </button>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link href="/sign-in">Login</Link>
      </li>
      <li>
        <Link href="/sign-up">Sign up</Link>
      </li>
    </>
  );
};

export default AuthNavigation;
