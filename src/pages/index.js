import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import scalaThumb from '../assets/images/thumbs/Scala.jpeg'
import reactThumb from '../assets/images/thumbs/01.png'
import weatherappThumb from '../assets/images/thumbs/weatherappThumb.png'
import etchThumb from '../assets/images/thumbs/etch.png'
import octocatThumb from '../assets/images/thumbs/octocat.png'

import reactPortfolio from '../assets/images/fulls/reactPortfolio.png'
import compilerDemo from '../assets/images/fulls/compilerDemo.gif'
import weatherappFull from '../assets/images/fulls/weatherAppDemo.gif'
import etchDemo from '../assets/images/fulls/etchsketchdemo.gif'

import resume from '../assets/RussellCarterResume.pdf'

// adjust thumb sizes to 370 x 217 before importing them
// full ~~> 630 x 375
const DEFAULT_IMAGES = [
  {
    id: '1',
    src: compilerDemo,
    thumbnail: scalaThumb,
    caption: 'Compiler',
    description: 'Gittex to HTML compiler made in Scala. Click for demo.',
  },
  {
    id: '2',
    src: reactPortfolio,
    thumbnail: reactThumb,
    caption: 'React Portfolio',
    description:
      'My first portfolio that I created with ReactJS and Bootstrap.',
  },
  {
    id: '3',
    src: weatherappFull,
    thumbnail: weatherappThumb,
    caption: 'React Weather App',
    description:
      'Retrieves the weather based on location from the OpenWeather API',
  },
  {
    id: '4',
    src: etchDemo,
    thumbnail: etchThumb,
    caption: 'Etch-A-Sketch',
    description:
      'Etch a sketch using a HTML canvas and vanilla JavaScript using the WASD keys',
  },
  {
    id: '5',
    src: octocatThumb,
    thumbnail: octocatThumb,
    caption: 'Coding Challenge',
    description:
      'One vs one coding challenege web app built in ReactJS, Node.js, and MongoDB',
  },
  {
    id: '6',
    src: octocatThumb,
    thumbnail: octocatThumb,
    caption: 'Hotel Management',
    description:
      'Hotel management project created with ReactJS, Node.js, and MySQL.',
  },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const siteTitle = 'Russell Carter'
    const siteDescription = 'Site description'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                I'm a senior Computer Science student with experience in full
                stack development
              </h2>
            </header>
            <p>
              While at Towson University, I have learned how to constructively
              use data structures, algorithms, algorithm analysis, and design
              patterns.
              <br />
              In my own time, I have been focusing on popular frameworks such as
              ReactJS and node.js. I love working modern JavaScript. If you
              would like to learn more about me, check out my resume below.
            </p>
            <ul className="actions">
              <li>
                <a
                  href={resume}
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Projects</h2>
            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />
            The above two projects are term projects for my last semester at the
            university. Follow me on GitHub to watch them come to life!
            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul> */}
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Feel free to email, call, or text me at antime. I am wrapping up
              my last semester at the university, but I will get back to you as
              soon as possible!
            </p>
            <div className="row">
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    Baltimore, MD
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    410-790-1425
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:russell.c12@gmail.com">
                      russell.c12@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
