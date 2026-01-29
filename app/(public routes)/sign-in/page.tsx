"use client";

import { ApiError } from "@/app/api/api";
import { login, LoginRequest } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

import css from "./sign-in.module.css";
import { useUserDraftStore } from "@/lib/stores/userStore";

function SignIn() {
  const router = useRouter();
  const [error, setError] = useState("");
  const { draft, setDraft, clearDraft } = useUserDraftStore();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setDraft({
      ...draft,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (formData: FormData) => {
    try {
      const formValues = Object.fromEntries(formData) as LoginRequest;
      const res = await login(formValues);
      if (res) {
        router.push("/profile");
        clearDraft();
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError(
        (error as ApiError).response?.data?.error ??
          (error as ApiError).message ??
          "Oops... some error",
      );
    }
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <h1>Sign up</h1>
      <div className={css.buttonGroup}>
        <label className={css.label}>
          Email
          <input
            defaultValue={draft?.email}
            className={css.input}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter your email..."
            required
          />
        </label>
      </div>
      <div className={css.buttonGroup}>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            placeholder="Write password to your profile..."
            required
          />
        </label>
      </div>
      <div className={css.buttonGroup}>
        <button className={css.submitButton} type="submit">
          Login
        </button>
        {error && <p>{error}</p>}
      </div>
    </form>
  );
}

export default SignIn;
