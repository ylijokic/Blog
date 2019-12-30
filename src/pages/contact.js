import React from "react"
import Layout from "../components/layout"
import contactStyles from "./contact.module.scss"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <div className={contactStyles.formMain}>
        <div className={contactStyles.formDiv}>
          <form className={contactStyles.montform} id="reused_form">
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
                id="comment"
                placeholder="Message"
              ></textarea>
            </p>
            <button href="#!" className={contactStyles.btnDark}>
              <i class="fa fa-paper-plane"></i> Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
