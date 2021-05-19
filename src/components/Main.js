import PropTypes from 'prop-types'
import React from 'react'
// import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'
import pic04 from '../images/monte.jpg'
import pic05 from '../images/khire.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'portfolio' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Portfolio</h2>
          <span className="image main">
            {/*<img src={pic01} alt="" /> */}
          </span>
          <p>
          </p>
          <p>
          </p>
          {close}
        </article>

         {/* WORK PAGE
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>  */}

          {/* ABOUT PAGE */}
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <h2>
            Monte Stewart
          </h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <p>
          Monte Stewart brings heavy experience in commercial real estate, excellent service and a determined commitment to work hard to serve all of his exclusive clientele. With being a honors graduate, Monte continues to use his marketing skills to connect with investors, developers, sellers, engineers, etc. 
          </p>
          <h2>Khire Green</h2>
          <span className="image main">
            <img src={pic05} alt="" />
          </span>
          <p>
          Born and raised in Norfolk, Virginia, Ky Green entered the real estate realm in 2018 after attending a wholesale seminar held by Mark Whitten in Brooklyn, New York. “I took a chance on an opportunity that I knew could change my life for the better.” Ky is very strong with handling negotiations, building relationships, and trophy acquisitions to which he credits to his 5+ years of being in the selling industry. “I’m connected with some of the biggest names in commercial real estate on both ends of the spectrum.” He prides himself on professionalism and transparency as seeing those traits as being the foundation of a great business relationship. Ky seeks to acquire commercial assets for First Line Investing’s exclusive clientele of investors to satisfy any and all real estate needs. 
          </p>
          {close}
        </article>

        {/* CONTACT PAGE */}
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/monte-stewart-b795371b8/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ky-green-6b4912196/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/firstlineinvesting/?hl=en" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
