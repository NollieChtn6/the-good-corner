import { useMutation } from "@apollo/client";
import { useState } from "react";
import type { LoginFormData } from "../@types/types";
import { LOGIN_MUTATION, type LoginMutationResult } from "../graphql/mutations";

export function LoginForm() {
  const [loginUser, { data: _userData, loading: loggingIn, error: loginError }] =
    useMutation<LoginMutationResult>(LOGIN_MUTATION);

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await loginUser({
        variables: { userData: formData },
      });
      console.log("Login successful:", response.data?.loginUser);
    } catch (error) {
      console.error("Failed log in:", error);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Se connecter</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-input">
          <label className="label" htmlFor="email">
            Adresse e-mail&nbsp;:
          </label>
          <input
            className="text-field"
            name="email"
            id="email"
            required
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>
        <div className="form-input">
          <label className="label" htmlFor="password">
            Mot de passe&nbsp;:
          </label>
          <input
            className="text-field"
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
        </div>
        <div className="btn-container">
          <button className="button" type="submit">
            {loggingIn ? "Connexion en cours..." : "Se connecter"}
          </button>
        </div>
        {loginError && <p className="error">Une erreur est survenue. Veuillez réessayer.</p>}
      </form>
    </div>
  );
}
