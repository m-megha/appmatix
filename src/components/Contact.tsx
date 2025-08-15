import { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const [email, setEmail] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        { email },
        {
          publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Email sent successfully");
          setEmail("");
        },
        () => {
          toast.error("Failed to send email...");
          setEmail("");
        }
      );
  };

  return (
    <form className="contact" onSubmit={sendEmail}>
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
