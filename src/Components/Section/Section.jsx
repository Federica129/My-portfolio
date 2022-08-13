import "./index.css";

function Section() {
  return (
    <div className="Section">
      <h2 className="title" id="Aboutme">
        About me
      </h2>
      <div className="parag">
        <p>
          I'm 23 years old and I was born and live in Palermo (Sicily).
          <br />
          I'm a quite,sunny and a little shy girl that loves making new friends,
          go out and learn new things!
          <br />
          After high school, I did my first work experiences in the world of
          retail where I improved my skills (in particulary) in the customers
          contact.
          <br />
          In March 2020, in Italy they closed the activities due to COVID for 3
          months.. and here I known, studied, played as a pastime for the first
          time HTML/CSS.
          <br />
          Today I decided to follow a course of study thanks to{" "}
          <a className="link" href="https://edgemony.com/">
            Edgemony
          </a>{" "}
          that allows me to learn programming languages, improve my knowledge
          and to be a day a web developer.
        </p>
        <h2 className="title title2">Education</h2>
        <p>
          I graduated in 2018 from the Technical and Economic Institute for
          Tourism.
        </p>

        <h2 className="title title2">Interest</h2>
        <p>
          I love animals, nature, the sea, traveling, keeping fit by practicing
          some sports.
        </p>
      </div>
      <h2 className="title" id="Exp">
        Work history
      </h2>
      <h4 className="title4">SALES ASSISTANT</h4>
      <h5 className="title5">May 2021 - October 2021</h5>
      <p>
        Sales Assistant at the store "CROFF" (OVS s.p.a.) in a street of
        Palermo. My duties were: Assisting customers during their choice of
        products to buy; arrangement and replacement of goods, shop and cashier
        management. During this experience, since I learned fast, I worked in
        three other locations due to need of staff e.g Upim, improving myself.
        The same agency offered some training courses about our security at
        work, fire prevention (low risk) and the new European legislation on
        privacy.
      </p>
      <h4 className="title4">TOUR GUIDE</h4>
      <h5 className="title5">September 2016 - September 2018</h5>
      <p>
        Tour guide in the most interesting tourist attractions of Palermo.
        Particularly in October 2016, I had joined at the Festival "Le Vie dei
        Tesori" as a tour guide assistant, this has allowed me to improve in my
        communication skills and understanding of customers in general, leading
        to a general growth in different work fields.
      </p>
    </div>
  );
}

export default Section;
