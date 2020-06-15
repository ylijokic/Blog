import React from "react"
import Layout from "../components/layout"
import contactStyles from "./contact.module.scss"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title={"Contact Me"} />
      <h1>Contact Me</h1>
      <div className={contactStyles.formMain}>
        <div className={contactStyles.formDiv}>
          <form
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
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
