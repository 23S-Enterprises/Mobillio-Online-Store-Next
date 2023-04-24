import React from 'react'
import Head from 'next/head'

import SectionHeading from '../components/section-heading'
import BlogPostCard1 from '../components/blog-post-card1'

const Shop = (props) => {
  return (
    <>
      <div className="shop-container">
        <Head>
          <title>Shop - Mobillio Online Store</title>
          <meta property="og:title" content="Shop - Mobillio Online Store" />
        </Head>
        <div className="shop-navbar">
          <header
            data-role="Header"
            className="shop-header max-width-container"
          >
            <div className="shop-navbar1">
              <div className="shop-container01">
                <img
                  alt="search3271286"
                  src="/playground_assets/search3271286-y3pr.svg"
                  className="shop-image"
                />
                <input
                  type="text"
                  placeholder="search"
                  className="shop-textinput input"
                />
              </div>
              <div className="shop-left">
                <span className="shop-text navbar-link">SHOP</span>
                <span className="shop-text01 navbar-link">
                  <span>MUSIC</span>
                  <br></br>
                </span>
                <span className="shop-text04 navbar-link">VIDEOS</span>
              </div>
              <div className="shop-container02">
                <div className="shop-container03">
                  <img
                    alt="image"
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bf8eb06c-47be-437c-8eb8-b7697389fa1d/bb6e5499-7951-49bd-9479-6eae0f31201e?org_if_sml=13034"
                    className="shop-image1"
                  />
                </div>
              </div>
              <div className="shop-right">
                <span className="shop-text05 navbar-link">NEWS</span>
                <span className="shop-text06 navbar-link">ABOUT</span>
                <span className="shop-text07 navbar-link">CONTACT</span>
              </div>
              <svg viewBox="0 0 1024 1024" className="shop-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <div className="shop-icons">
                <img
                  alt="iconsbxscart3271299"
                  src="/playground_assets/iconsbxscart3271299-p0os.svg"
                  className="shop-image2"
                />
                <img
                  alt="iconsbxsheartcircle3271300"
                  src="/playground_assets/iconsbxsheartcircle3271300-e1n9.svg"
                  className="shop-image3"
                />
                <img
                  alt="AccountCircle3271301"
                  src="/playground_assets/accountcircle3271301-lsf8.svg"
                  className="shop-image4"
                />
              </div>
            </div>
            <div className="shop-container04">
              <div data-role="BurgerMenu" className="shop-burger-menu"></div>
            </div>
            <div data-role="MobileMenu" className="shop-mobile-menu">
              <div className="shop-nav">
                <div className="shop-container05">
                  <span className="shop-logo-center">MOBILLIO</span>
                  <div
                    data-role="CloseMobileMenu"
                    className="shop-close-mobile-menu"
                  >
                    <svg viewBox="0 0 1024 1024" className="shop-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="shop-middle">
                  <span className="shop-text08">SHOP</span>
                  <span className="shop-text09">LOOKBOOK</span>
                  <span className="shop-text10">SPECIAL</span>
                  <span className="shop-text11">ABOUT</span>
                  <span className="shop-text12">BLOG</span>
                  <span className="shop-text13">CONTACT</span>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="shop-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="shop-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="shop-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="shop-main">
          <div className="shop-hero section-container">
            <div className="shop-max-width max-width-container">
              <div className="shop-hero1">
                <img
                  alt="image23271449"
                  src="/playground_assets/add%20a%20heading%20%5B16%5D-600h.png"
                  className="shop-image5"
                />
                <div className="shop-container06">
                  <span className="shop-text14">Artist of the Month</span>
                  <h1 className="shop-text15">TROY GOOD</h1>
                  <span className="shop-text16">Based In:</span>
                  <span className="shop-text17">PUEBLO, CO</span>
                  <div className="shop-btn-group">
                    <button className="shop-button button">
                      READ FEATURETTE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shop-trending-items section-container">
            <div className="max-width-container">
              <SectionHeading></SectionHeading>
              <div className="shop-blog">
                <BlogPostCard1
                  image_src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxjaXR5fGVufDB8fHx8MTYyNjQ1MDI4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                  rootClassName="rootClassName10"
                ></BlogPostCard1>
              </div>
              <div className="shop-blog1">
                <div className="shop-container07">
                  <BlogPostCard1 rootClassName="rootClassName11"></BlogPostCard1>
                </div>
                <div className="shop-container08">
                  <BlogPostCard1
                    image_src="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName12"
                  ></BlogPostCard1>
                </div>
                <div className="shop-container09"></div>
              </div>
              <div className="shop-blog2">
                <div className="shop-container10">
                  <BlogPostCard1 rootClassName="rootClassName13"></BlogPostCard1>
                </div>
                <div className="shop-container11">
                  <BlogPostCard1
                    image_src="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName14"
                  ></BlogPostCard1>
                </div>
                <div className="shop-container12"></div>
              </div>
            </div>
          </div>
          <div className="shop-pricing">
            <div className="shop-container13">
              <div className="shop-container14">
                <h1>Pricing Plans</h1>
                <span className="shop-text19">
                  <span>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In lorem lorem, malesuada in metus vitae, scelerisque
                      accumsan ipsum.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </div>
              <div className="shop-container15">
                <div className="shop-container16">
                  <span className="shop-text23">Free</span>
                  <span className="shop-text24">$0</span>
                  <span className="shop-text25">
                    <span className="shop-text26">10</span>
                    <span> Projects</span>
                  </span>
                  <span className="shop-text28">
                    <span className="shop-text29">99</span>
                    <span> Components</span>
                  </span>
                  <span className="shop-text31">
                    <span className="shop-text32">3</span>
                    <span> Collaborators</span>
                  </span>
                  <span className="shop-text34">
                    <span className="shop-text35">Public projects</span>
                  </span>
                  <button className="shop-button1 button">Learn More</button>
                </div>
                <div className="shop-container17">
                  <span className="shop-text36">Free</span>
                  <span className="shop-text37">$29</span>
                  <span className="shop-text38">
                    <span className="shop-text39">100</span>
                    <span> Projects</span>
                  </span>
                  <span className="shop-text41">
                    <span className="shop-text42">1000</span>
                    <span> Components</span>
                  </span>
                  <span className="shop-text44">
                    <span className="shop-text45">20</span>
                    <span> Collaborators</span>
                  </span>
                  <span className="shop-text47">
                    <span className="shop-text48">Private projects</span>
                  </span>
                  <button className="shop-button2 button">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shop-footer">
          <div className="max-width-container">
            <footer className="shop-footer1">
              <div className="shop-container18">
                <h3 className="shop-text49 Heading-3">MOBILLIO</h3>
                <span className="shop-text50">
                  <span>4517 Washington Ave. Manchester, Kentucky 39495,</span>
                  <br></br>
                  <span>United States</span>
                </span>
                <span className="shop-text53">(671) 555-0110</span>
                <span className="shop-text54">contact@mobillio.com</span>
              </div>
              <div className="shop-links-container">
                <div className="shop-container19">
                  <span className="shop-text55">Categories</span>
                  <span className="shop-text56">Collections</span>
                  <span className="shop-text57">Desks</span>
                  <span className="shop-text58">Furniture</span>
                  <span className="shop-text59">Lamps</span>
                  <span className="shop-text60">Plants</span>
                  <span className="shop-text61">Decoration</span>
                </div>
                <div className="shop-container20">
                  <span className="shop-text62">Company</span>
                  <span className="shop-text63">Shop</span>
                  <span className="shop-text64">Lookbook</span>
                  <span className="shop-text65">Specials</span>
                  <span className="shop-text66">About</span>
                  <span className="shop-text67">Blog</span>
                </div>
                <div className="shop-container21">
                  <span className="shop-text68">Resources</span>
                  <span className="shop-text69">Contact us</span>
                  <span className="shop-text70">Order</span>
                  <span className="shop-text71">Track your order</span>
                  <span className="shop-text72">Shipping &amp; Delivery</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .shop-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .shop-navbar {
            top: 0px;
            left: 0px;
            width: 100%;
            display: flex;
            z-index: 1000;
            position: fixed;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-pallet-green);
          }
          .shop-header {
            max-width: 100%;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
            background-color: #ffffff;
          }
          .shop-navbar1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;
          }
          .shop-container01 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .shop-image {
            width: 24px;
            height: 24px;
            z-index: 100;
            margin-right: -32px;
          }
          .shop-textinput {
            color: #000000;
            width: 100%;
            max-width: var(--dl-size-size-xxlarge);
            transition: 0.3s;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            padding-left: var(--dl-space-space-threeunits);
            background-color: #ffffff;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .shop-textinput:hover {
            border-color: var(--dl-color-pallet-yellow);
          }
          .shop-left {
            display: flex;
            grid-gap: 45px;
            position: relative;
            align-items: flex-start;
          }
          .shop-text {
            font-size: 15px;
          }
          .shop-text01 {
            font-size: 15px;
          }
          .shop-text04 {
            font-size: 15px;
          }
          .shop-container02 {
            flex: 0 0 auto;
            width: 82px;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .shop-container03 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .shop-image1 {
            width: 94px;
            object-fit: cover;
          }
          .shop-right {
            display: flex;
            grid-gap: 45px;
            position: relative;
            align-items: flex-start;
          }
          .shop-text05 {
            font-size: 15px;
          }
          .shop-text06 {
            font-size: 15px;
          }
          .shop-text07 {
            font-size: 15px;
          }
          .shop-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .shop-icons {
            display: flex;
          }
          .shop-image2 {
            width: 24px;
            height: 24px;
            margin: 0 24px 0 0;
            position: relative;
            box-sizing: border-box;
            object-fit: cover;
            border-color: transparent;
          }
          .shop-image3 {
            width: 24px;
            height: 24px;
            margin: 0 24px 0 0;
            position: relative;
            box-sizing: border-box;
            object-fit: cover;
            border-color: transparent;
          }
          .shop-image4 {
            width: 24px;
            height: 24px;
            position: relative;
            box-sizing: border-box;
            object-fit: cover;
            border-color: transparent;
          }
          .shop-container04 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .shop-burger-menu {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
          }
          .shop-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateX(100%);
            transition: 0.3s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .shop-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .shop-container05 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .shop-logo-center {
            color: var(--dl-color-gray-black);
            height: auto;
            font-size: 24px;
            font-family: Jost;
            font-weight: 500;
            line-height: 20px;
            margin-left: var(--dl-space-space-fourunits);
            margin-right: var(--dl-space-space-fourunits);
            letter-spacing: 0.4em;
            text-decoration: none;
          }
          .shop-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .shop-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .shop-middle {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .shop-text08 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .shop-text09 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .shop-text10 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .shop-text11 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .shop-text12 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .shop-text13 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .shop-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .shop-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .shop-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .shop-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .shop-hero {
            padding-top: 75px;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: #ffffff;
          }
          .shop-max-width {
            width: 1920px;
            max-width: 100%;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            justify-content: flex-end;
          }
          .shop-hero1 {
            width: 100%;
            height: 670px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .shop-image5 {
            width: 627px;
            height: 624px;
            position: relative;
            max-width: 579px;
            box-sizing: border-box;
            max-height: 579px;
            object-fit: cover;
            margin-left: var(--dl-space-space-fourunits);
            border-color: transparent;
          }
          .shop-container06 {
            height: 173px;
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            background-color: #ffffff;
          }
          .shop-text14 {
            color: var(--dl-color-gray-black50);
            font-size: 14px;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            text-align: left;
            font-family: Jost;
            font-weight: 700;
            line-height: 18px;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .shop-text15 {
            color: var(--dl-color-gray-black);
            width: 529px;
            height: 133px;
            font-size: 75px;
            max-width: 450px;
            font-family: Jost;
            font-weight: 500;
            line-height: 70px;
            margin-bottom: 10px;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            text-decoration: none;
          }
          .shop-text16 {
            color: var(--dl-color-gray-black50);
            font-size: 14px;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            text-align: left;
            font-family: Jost;
            font-weight: 700;
            line-height: 18px;
            margin-bottom: 0px;
            text-transform: uppercase;
          }
          .shop-text17 {
            color: #000000;
            font-size: 28px;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .shop-btn-group {
            width: 339px;
            height: 91px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .shop-button {
            margin-top: 0px;
            justify-content: flex-start;
          }
          .shop-trending-items {
            padding-top: 66px;
          }
          .shop-blog {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .shop-blog1 {
            width: 100%;
            height: 618px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .shop-container07 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .shop-container08 {
            display: flex;
            align-items: center;
            margin-right: 0px;
            justify-content: center;
          }
          .shop-container09 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .shop-blog2 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .shop-container10 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .shop-container11 {
            display: flex;
            align-items: center;
            margin-right: 0px;
            justify-content: space-between;
          }
          .shop-container12 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .shop-pricing {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: #ffffff;
          }
          .shop-container13 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            justify-content: center;
          }
          .shop-container14 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .shop-text19 {
            color: var(--dl-color-gray-500);
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .shop-container15 {
            flex: 2;
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .shop-container16 {
            flex: 1;
            height: 450px;
            display: flex;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-white);
          }
          .shop-container16:hover {
            transform: scale(1.02);
          }
          .shop-text23 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .shop-text24 {
            margin: var(--dl-space-space-twounits);
            font-size: 4rem;
            font-weight: 200;
          }
          .shop-text25 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text26 {
            font-weight: 700;
          }
          .shop-text28 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text29 {
            font-weight: 700;
          }
          .shop-text31 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text32 {
            font-weight: 700;
          }
          .shop-text34 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text35 {
            font-weight: 700;
          }
          .shop-button1 {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .shop-container17 {
            flex: 1;
            color: var(--dl-color-gray-white);
            height: 450px;
            display: flex;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-black);
          }
          .shop-container17:hover {
            transform: scale(1.02);
          }
          .shop-text36 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .shop-text37 {
            margin: var(--dl-space-space-twounits);
            font-size: 4rem;
            font-weight: 200;
          }
          .shop-text38 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text39 {
            font-weight: 700;
          }
          .shop-text41 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text42 {
            font-weight: 700;
          }
          .shop-text44 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text45 {
            font-weight: 700;
          }
          .shop-text47 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text48 {
            font-weight: 700;
          }
          .shop-button2 {
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .shop-footer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-950);
            border-width: 1px;
            flex-direction: column;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .shop-footer1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: space-between;
          }
          .shop-container18 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .shop-text49 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .shop-text50 {
            color: var(--dl-color-gray-black50);
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .shop-text53 {
            color: var(--dl-color-gray-black50);
            margin-top: var(--dl-space-space-twounits);
          }
          .shop-text54 {
            color: var(--dl-color-gray-black50);
            margin-top: 12px;
          }
          .shop-links-container {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .shop-container19 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .shop-text55 {
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 14px;
            margin-bottom: 44px;
          }
          .shop-text56 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text57 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text58 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text59 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text60 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text61 {
            color: var(--dl-color-gray-black50);
          }
          .shop-container20 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .shop-text62 {
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 14px;
            margin-bottom: 44px;
          }
          .shop-text63 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text64 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text65 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text66 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text67 {
            color: var(--dl-color-gray-black50);
          }
          .shop-container21 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .shop-text68 {
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 14px;
            margin-bottom: 44px;
          }
          .shop-text69 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text70 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text71 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text72 {
            color: var(--dl-color-gray-black50);
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 1600px) {
            .shop-navbar {
              background-color: #ffffff;
            }
            .shop-header {
              width: 100%;
              height: 95px;
              max-width: 100%;
              margin-top: 0px;
              padding-top: 5px;
              margin-bottom: 0px;
              padding-bottom: 0px;
            }
            .shop-navbar1 {
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .shop-text {
              font-size: 15px;
            }
            .shop-text01 {
              font-size: 15px;
            }
            .shop-text04 {
              font-size: 15px;
            }
            .shop-image1 {
              width: 88px;
              height: 92px;
              margin-left: 0px;
              margin-right: 0px;
            }
            .shop-text05 {
              font-size: 15px;
            }
            .shop-text06 {
              font-size: 15px;
            }
            .shop-text07 {
              font-size: 15px;
            }
            .shop-hero {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .shop-max-width {
              margin-right: 40px;
            }
            .shop-hero1 {
              height: 757px;
              margin-top: 0px;
              margin-bottom: 5px;
            }
            .shop-image5 {
              width: 814px;
              height: 617px;
              margin-left: var(--dl-space-space-sixunits);
            }
            .shop-container06 {
              position: relative;
            }
            .shop-text15 {
              color: var(--dl-color-gray-black);
              height: 123px;
              font-size: 75px;
              align-self: stretch;
              font-family: Jost;
              font-weight: 500;
              line-height: 60px;
              margin-bottom: 20px;
              letter-spacing: 0.16em;
              text-transform: uppercase;
              text-decoration: none;
            }
          }
          @media (max-width: 1200px) {
            .shop-navbar {
              height: 93px;
            }
            .shop-header {
              width: 100%;
              height: 61px;
              margin-top: 3x;
              margin-bottom: 3x;
            }
            .shop-textinput {
              width: 202px;
            }
            .shop-container03 {
              width: 156px;
              margin-right: 0px;
            }
            .shop-image1 {
              width: 75px;
              height: 64px;
              align-self: center;
              margin-left: 0px;
              margin-right: 0px;
            }
            .shop-icons {
              margin-left: var(--dl-space-space-halfunit);
            }
            .shop-hero {
              height: 836px;
              padding-top: 0px;
            }
            .shop-max-width {
              height: 668px;
              margin-left: 40px;
            }
            .shop-hero1 {
              height: 655px;
              margin-top: 20px;
            }
            .shop-image5 {
              width: auto;
              height: 591px;
              max-width: auto;
              align-self: flex-start;
              max-height: auto;
              margin-left: var(--dl-space-space-fiveunits);
              margin-right: 0px;
            }
            .shop-container06 {
              width: 464px;
              height: 448px;
              margin-left: 40px;
              margin-right: 0px;
              padding-right: 0px;
            }
            .shop-text14 {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .shop-text15 {
              line-height: 70px;
            }
            .shop-text16 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .shop-btn-group {
              height: 63px;
            }
          }
          @media (max-width: 991px) {
            .shop-navbar {
              height: 67px;
            }
            .shop-header {
              height: 109px;
              margin-top: 0px;
              padding-top: 0px;
              padding-left: 19px;
              margin-bottom: 0px;
              padding-right: 12px;
              padding-bottom: 0px;
            }
            .shop-navbar1 {
              padding-bottom: 0px;
            }
            .shop-container01 {
              display: none;
            }
            .shop-left {
              display: none;
            }
            .shop-container03 {
              width: 110px;
              margin-top: 0px;
              align-items: flex-start;
              margin-left: 0px;
              padding-top: var(--dl-space-space-halfunit);
              justify-content: flex-start;
            }
            .shop-image1 {
              width: 76px;
              height: 68px;
              align-self: flex-start;
              margin-left: 0px;
              margin-right: 0px;
            }
            .shop-right {
              display: none;
            }
            .shop-icon {
              width: 55px;
              height: 46px;
              display: flex;
            }
            .shop-icons {
              display: none;
            }
            .shop-burger-menu {
              display: flex;
            }
            .shop-logo-center {
              margin-left: 0px;
            }
            .shop-hero {
              height: 985px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .shop-hero1 {
              width: auto;
              height: 753px;
              margin-top: 0px;
              padding-top: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 0px;
            }
            .shop-image5 {
              width: 624px;
              height: 583px;
              align-self: center;
              margin-left: 0px;
              margin-right: 0px;
            }
            .shop-container06 {
              width: 559px;
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .shop-text14 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .shop-text15 {
              color: var(--dl-color-gray-black);
              width: 486px;
              height: 122px;
              font-size: 70px;
              align-self: center;
              margin-top: var(--dl-space-space-halfunit);
              text-align: center;
              font-family: Jost;
              font-weight: 500;
              line-height: 60px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
              letter-spacing: 0.16em;
              padding-bottom: 0px;
              text-transform: uppercase;
              text-decoration: none;
            }
            .shop-text16 {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .shop-btn-group {
              justify-content: center;
            }
            .shop-blog {
              flex-direction: column;
            }
            .shop-blog1 {
              flex-direction: column;
            }
            .shop-container07 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .shop-container08 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .shop-blog2 {
              flex-direction: column;
            }
            .shop-container10 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .shop-container11 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .shop-container13 {
              align-items: center;
              flex-direction: column;
            }
            .shop-container14 {
              align-items: center;
            }
            .shop-text19 {
              text-align: center;
            }
            .shop-container15 {
              width: 100%;
            }
            .shop-footer1 {
              flex-direction: column-reverse;
            }
            .shop-links-container {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .shop-header {
              height: 96px;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .shop-image1 {
              width: 87px;
              height: 75px;
            }
            .shop-icon {
              width: 51px;
              height: 58px;
            }
            .shop-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .shop-main {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .shop-hero {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .shop-hero1 {
              height: 733px;
              margin-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .shop-image5 {
              height: 598px;
              margin-right: 0px;
            }
            .shop-container06 {
              height: 220px;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .shop-text15 {
              font-size: 70px;
              margin-top: 0px;
            }
            .shop-btn-group {
              height: 68px;
              justify-content: center;
            }
            .shop-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .shop-blog1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .shop-blog2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .shop-container13 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .shop-container15 {
              flex-direction: column;
            }
            .shop-container16 {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .shop-container17 {
              width: 100%;
            }
            .shop-footer1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .shop-links-container {
              margin-top: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .shop-navbar {
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .shop-header {
              width: 467px;
              height: 94px;
              padding: var(--dl-space-space-halfunit);
              margin-top: 0px;
              padding-top: 0px;
              margin-right: 15px;
              padding-left: 0px;
              margin-bottom: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .shop-navbar1 {
              height: 88px;
              margin-left: 13px;
            }
            .shop-container01 {
              display: none;
            }
            .shop-container03 {
              margin-left: 0px;
              padding-top: 0px;
            }
            .shop-icon {
              width: 83px;
              height: 57px;
              align-self: center;
              margin-right: 0px;
            }
            .shop-mobile-menu {
              padding: 16px;
            }
            .shop-hero {
              height: 722px;
              padding-top: 100px;
              padding-bottom: 5px;
            }
            .shop-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              background-color: #fffefe;
            }
            .shop-image5 {
              width: 477px;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: 0px;
              padding-right: var(--dl-space-space-halfunit);
            }
            .shop-container06 {
              width: 479px;
              height: 214px;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .shop-text15 {
              height: 53px;
              font-size: 60px;
              align-self: center;
              margin-top: var(--dl-space-space-halfunit);
              line-height: 50px;
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
              letter-spacing: 0.12em;
              padding-bottom: 0px;
            }
            .shop-text16 {
              color: var(--dl-color-gray-black50);
              font-size: 14px;
              font-style: normal;
              font-family: Jost;
              font-weight: 700;
              line-height: 18px;
              text-transform: uppercase;
            }
            .shop-text17 {
              color: rgb(0, 0, 0);
              font-size: 28px;
              font-style: normal;
              font-weight: 500;
              line-height: 32px;
              padding-top: 5px;
              padding-bottom: 5px;
            }
            .shop-btn-group {
              height: 38px;
              margin-top: 10px;
              flex-direction: column;
              justify-content: flex-end;
            }
            .shop-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .shop-blog1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .shop-blog2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .shop-container13 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .shop-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .shop-links-container {
              align-items: flex-start;
              flex-direction: column;
              justify-content: space-between;
            }
            .shop-container19 {
              margin-right: var(--dl-space-space-unit);
            }
            .shop-container20 {
              margin-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Shop
