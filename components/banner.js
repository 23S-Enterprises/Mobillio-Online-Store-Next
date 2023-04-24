import React from 'react'

import PropTypes from 'prop-types'

const Banner = (props) => {
  return (
    <>
      <div className={`banner-banner ${props.rootClassName} `}>
        <div className="banner-container">
          <div className="banner-container1">
            <img
              alt="image"
              src="/playground_assets/image-tvcl-400w.png"
              className="banner-image"
            />
            <div className="banner-container2">
              <h3 className="banner-text Heading-3">BOX STATE</h3>
              <span className="banner-text1">hip-HOP</span>
              <button className="banner-button button">SHOP MERCH</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .banner-banner {
            flex: 0 0 auto;
            width: 100%;
            height: 1px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-950);
          }
          .banner-container {
            width: 506px;
            height: 116px;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-950);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .banner-container1 {
            width: 100%;
            height: 150px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .banner-image {
            top: 0px;
            left: 3px;
            width: 25%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            align-self: center;
            margin-top: 0px;
            object-fit: cover;
            padding-top: 10px;
            margin-right: 0px;
            padding-left: 10px;
            margin-bottom: 0px;
            padding-right: 10px;
            padding-bottom: 10px;
          }
          .banner-container2 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 75%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
          }
          .banner-text {
            margin-top: var(--dl-space-space-unit);
            margin-bottom: 0px;
          }
          .banner-text1 {
            font-size: 10px;
            margin-top: 5px;
            line-height: 20px;
            margin-bottom: 5px;
            letter-spacing: 1em;
            text-transform: uppercase;
          }
          .banner-button {
            margin-top: 0px;
            justify-content: flex-start;
          }
          .banner-root-class-name {
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .banner-root-class-name1 {
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          @media (max-width: 1600px) {
            .banner-image {
              width: 25%;
            }
            .banner-container2 {
              width: 75%;
            }
            .banner-text {
              margin-top: 20px;
              margin-bottom: 0px;
            }
            .banner-text1 {
              margin-top: 0px;
              margin-bottom: 6px;
            }
            .banner-button {
              padding-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 1200px) {
            .banner-text1 {
              font-size: 10px;
              line-height: 20px;
              letter-spacing: 1em;
              text-transform: uppercase;
            }
          }
          @media (max-width: 479px) {
            .banner-container {
              width: 100%;
              height: 116px;
            }
          }
        `}
      </style>
    </>
  )
}

Banner.defaultProps = {
  text: 'hip-HOP',
  image_src: '507cadf0-abf4-4a65-9559-1303d82bfff0',
  heading: 'BOX STATE',
  image_alt1: 'image',
  rootClassName: '',
  button: 'SHOP MERCH',
  heading1: 'BOX STATE',
  image_alt: 'image',
  text1: 'hip-HOP',
}

Banner.propTypes = {
  text: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  heading1: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
}

export default Banner
