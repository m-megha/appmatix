import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>Lets keep in touch</h2>
      <p>
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
    </div>
  );
};

export default Contact;
