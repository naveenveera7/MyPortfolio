function contact() {
  return(
    <section id="contact" className="contact section">

      <div className="container section-title">
        <h1>Contact</h1>
        
      </div>
      <p>You can contact me from the details below and you can mail me by filling the below form. Recruiters can contact me...</p>
      <div className="container" >
        <div className="mydetails">
          <label>📌 Address</label>
          <p>Ongole,Andhra Pradesh,IN</p>
          <label >📧  Email</label>
          <p><a href="mailto:naveenveera27@gmail.com">naveenveera27@gmail.com</a>
          </p>
          <label>📞 Phone</label>
          <p><a href="tel:+916281032917">+91 6281032917</a></p>
        </div>
          <div className="form-box">
            {/*  action="forms/contact.php" method="post" */}
            <form action="https://api.web3forms.com/submit" method="POST"> 
            <input type="hidden" name="access_key" value="22222265-16f8-4349-9f59-89c22f03e915" />
              <div className="inside-form">

                <div className="form-field">
                  <label for="name-field" className="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" className="form-control" required="Enter Name" />
                </div>

                <div className="form-field">
                  <label for="email-field" className="pb-2">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email-field" required="Enter Mail" />
                </div>

                <div className="form-field">
                  <label for="subject-field" className="pb-2">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject-field" required="enter Subject" />
                </div>

                <div className="form-field">
                  <label for="message-field" className="pb-2">Message</label>
                  <textarea className="form-control" name="message" rows="10" id="message-field" required="Enter Something"></textarea>
                </div>

                <div>
                  {/* <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div> */}
                  {/* <input type="checkbox" name="botcheck" class="hidden" style={{display:"none"}}></input> */}
                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>

    </section>
  )
}
export default contact;