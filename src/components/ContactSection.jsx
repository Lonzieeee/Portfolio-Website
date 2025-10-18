import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  Phone,
  Send,
} from "lucide-react";
import styles from "./ContactSection.module.css";

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Get In <span className={styles.primaryText}>Touch</span>
        </h2>

        <p className={styles.subtitle}>
          Have a project in mind or a question? I'm available for collaborations
          and opportunities—feel free to reach out.
        </p>

        <div className={styles.grid}>
          {/* LEFT SIDE */}
          <div className={styles.leftColumn}>
            <div className={styles.infoWrapper}>
              <h3 className={styles.sectionTitle}>Contact Information</h3>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Mail className={styles.icon} />
                </div>
                <div className={styles.infoText}>
                  <h4>Email</h4>
                  <a
                    href="mailto:wanderilorna@gmail.com"
                  >
                    wanderilorna@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Phone className={styles.icon} />
                </div>
                <div className={styles.infoText}>
                  <h4>Phone</h4>
                  <a
                    href="tel:+254719424977"
                  >
                    +254719424977
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <MapPin className={styles.icon} />
                </div>
                <div className={styles.infoText}>
                  <h4>Location</h4>
                  <p>
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Connect With Me</h4>
              <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/wanderilorna" target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <Linkedin />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <Twitter />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <Instagram />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Send a Message</h3>

            {submitted && (
              <div className={styles.successMessage}>
                ✅ Your message has been sent successfully!
              </div>
            )}

            <form
              action="https://formspree.io/f/xyzjqwkv"
              method="POST"
              className={styles.form}
              onSubmit={() => {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 5000);
              }}
            >
              <div className={styles.formGroup}>
                <label
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Lorna Wanderi..."
                />
              </div>

              <div className={styles.formGroup}>
                <label
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="lorna@gmail.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
