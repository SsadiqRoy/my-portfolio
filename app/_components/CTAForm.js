'use client';

function CTAForm() {
  // console.log(nobe);

  function submitForm(ev) {
    ev.preventDefault();

    console.log(ev);
    const data = new FormData(ev.currentTarget);
    const body = {};

    for (const [key, value] of data.entries()) {
      body[key] = value;
    }

    const maildata = {
      email: body.email,
      subject: body.subject,
      body: `${body.message.replaceAll('\n', '%0D')} %0A%0AName: ${body.name}. %0ALocation: ${body.location}%0A%0A`,
    };

    window.open(`mailto:samuelmadebombe@gmail.com?subject=${maildata.subject}&body=${String(maildata.body)}`);
  }

  return (
    <form onSubmit={submitForm}>
      <div className="form-group">
        <input id="name" name="name" type="text" required placeholder="name" />
        <label htmlFor="name">Name*</label>
      </div>

      <div className="form-group">
        <input id="location" name="location" type="text" placeholder="location" />
        <label htmlFor="location">location</label>
      </div>

      <div className="form-group">
        <input id="subject" name="subject" type="text" required placeholder="subject" />
        <label htmlFor="subject">subject*</label>
      </div>

      <div className="form-group">
        <textarea id="message" name="message" type="text" required placeholder="message" />
        <label htmlFor="message">message*</label>
      </div>

      <div className="form-group-right">
        <button className="btn-primary-alt btn-small portfolio-website">leave a message</button>
      </div>
    </form>
  );
}

export default CTAForm;
