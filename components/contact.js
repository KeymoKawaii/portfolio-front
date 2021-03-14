export default function ContactForm() {
    return (
      <div className="darkContainer">
      <section id='contact'>
      <div>
        <form name="contact" method="POST" data-netlify="true">
          <h2>Contactez moi !</h2>
          {/* <input type="hidden" name="form-name" value="contact" /> */}

            <label htmlFor="yourname">
              Votre Nom:
            </label>
            <input type="text" name="name" id="yourname" />

            <label htmlFor="youremail">
              Votre Email:
            </label>
            <input type="email" name="email" id="youremail" />

            <label htmlFor="yourmessage">
              Votre Message :
            </label>
            <textarea name="message" id="yourmessage"></textarea>
  
            <button type="submit">Envoi</button>

        </form>
      </div>
      </section>
      </div>
    )
  }