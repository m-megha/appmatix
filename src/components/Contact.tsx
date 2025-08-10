import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");

  return (
    <form
      className="contact"
      onSubmit={(e) => {
        e.preventDefault();
        setEmail("");
      }}
    >
      <h2>Let's keep in Touch</h2>
      <p id="contactDescription">
        Enter you email to keep in the know with the latest updates from
        Transparent.
      </p>
      <input
        type="email"
        placeholder="your@email.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
