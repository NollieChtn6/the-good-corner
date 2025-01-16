export function LoginForm() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Se connecter</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-input">
          <label className="label" htmlFor="email">
            Adresse e-mail&nbsp;:
          </label>
          <input className="text-field" name="email" id="email" required />
        </div>
        <div className="form-input">
          <label className="label" htmlFor="password">
            Mot de passe&nbsp;:
          </label>
          <input className="text-field" type="password" name="password" id="password" required />
        </div>
        <div className="btn-container">
          <button className="button" type="submit">
            Se connecter
          </button>
        </div>
      </form>
    </div>
  );
}
