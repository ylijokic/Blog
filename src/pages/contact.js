import React from "react"
import Layout from "../components/layout"
import contactStyles from "./contact.module.scss"
import Head from "../components/head"
import layoutStlyes from "../components/layout.module.scss"

const ContactPage = () => {
  return (
    <Layout>
      <Head title={"Contact Me"} />
        <div className={contactStyles.formMain}>
          <h1>Contact Me</h1>
          <div className={contactStyles.formDiv}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className={contactStyles.montform}
            >
              <p className={contactStyles.name}>
                <label>
                  {" "}
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={contactStyles.feedbackInput}
                  />
                </label>
              </p>
              <p className={contactStyles.email}>
                <label>
                  {" "}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={contactStyles.feedbackInput}
                  />
                </label>
              </p>
              <p className={contactStyles.text}>
                <label>
                  {" "}
                  <textarea
                    name="message"
                    placeholder="Message"
                    className={contactStyles.feedbackInput}
                  ></textarea>
                </label>
              </p>
              <div>
                <div data-netlify-recaptcha></div>
              </div>
              <p>
                <button className={contactStyles.btnDark} type="submit">
                  Send
                </button>
              </p>
            </form>
            {/* <form
              className={contactStyles.montform}
              id="reused_form"
              method="POST"
              data-netlify="true"
            >
              <p className={contactStyles.name}>
                <input
                  name="name"
                  type="text"
                  className={contactStyles.feedbackInput}
                  required
                  placeholder="Name"
                  id="name"
                />
              </p>
              <p className={contactStyles.email}>
                <input
                  name="email"
                  type="email"
                  required
                  className={contactStyles.feedbackInput}
                  id="email"
                  placeholder="Email"
                />
              </p>
              <p className={contactStyles.text}>
                <textarea
                  name="message"
                  className={contactStyles.feedbackInput}
                  id="message"
                  placeholder="Message"
                ></textarea>
              </p>
              <div>
                <div data-netlify-recaptcha></div>
              </div>
              <input
                type="submit"
                value="Send Message"
                className={contactStyles.btnDark}
              />
            </form> */}
          </div>
        </div>
    </Layout>
  )
}

export default ContactPage
