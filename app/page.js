"use client";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="left">
            <img
              src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/63fcf43ca8cfc794df15c0f6_Instantly%20Logo.svg"
              alt="logo"
              className="logo"
            />
          </div>
          <div className="center">
            <ul>
              <li className="dropdown">
                Products <i className="fa-solid fa-chevron-down"></i>
              </li>
              <li>Pricing</li>
              <li>Reviews</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="#">Log In</a>
              </li>
              <li>
                <button>GET STARTED</button>
              </li>
              <li>
                <button>SEE DEMO</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="hero">
        <h1>
          Find, Contact & Close
          <br /> <span className="gradient-text">Your Ideal Clients.</span>
        </h1>
        <p>
          Instantly turns leads into clients with Automated Outreach,
          Deliverability
          <br /> Network, Sales Engagement, B2B Lead Database & AI-Powered CRM
        </p>

        <button>START FOR FREE</button>
        <div className="justify">
          <span>
            <i className="fa-solid fa-circle-check"></i> No credit card required
          </span>
          <span>
            <i className="fa-solid fa-circle-check"></i> Free leads included
          </span>
        </div>

        <div className="hero-image-container">
          <img
            src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/667827861392bc57575dc277_Mockup%20With%20Screen-p-800.png"
            alt=""
            className="hero-image"
          />
          <img
            src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a17cb242c0a1addd1076c_personnew-min-p-500.png"
            alt=""
            className="one"
          />
          <img
            src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/664fb3f01363efeeedb3c1c5_Group%2020.svg"
            alt=""
            className="two"
          />
          <img
            src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638f4242c51988a5d4bc8bbd_image%2060%20shadow-min-p-500.png"
            alt=""
            className="three"
          />
          <img
            src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638f413e7f1bd00e108779e1_image%2049%20shadow-min-p-500.png"
            alt=""
            className="four"
          />
        </div>
      </div>
      <div className="fade-container">
        <div className="fade-effect"></div>
      </div>
      <div className="customers">
        <div className="justify">
          <h2>
            20,000+ customers{" "}
            <span className="grey-text">
              who are
              <br /> getting more clients
            </span>
          </h2>

          <button>
            SEE MORE <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="cards moye">
          <div className="card">
            <div className="left">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/63f36b11c05007caa49ff085_channels4_profile-p-500.jpeg"
                alt="card-image"
              />
            </div>
            <div className="right">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a1e290e53ef1d8df1701b_quote-up.2%201.svg"
                alt=""
              />
              <p>
                <span className="grey-text">
                  Email outreach is one of the most effective
                  <br /> ways to expand your business and gain
                  <br /> new business. Instantly does this well;
                </span>{" "}
                you <br />
                can add unlimited email accounts and just
                <br /> does all the basics in the right way!
              </p>
              <div className="justify">
                <div className="details">
                  <h4>Alex Siderius</h4>
                  <p>CEO at Webaware</p>
                </div>
                <div className="arrows">
                  <div className="arrow">
                    <img
                      src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/6387092f1a49fbf44aefbdaa_arrow-right.svg"
                      alt=""
                    />
                    <img
                      className="white"
                      src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638709bdb0020a9b506d7f70_arrow-right%20white.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="left">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a1d59e54de90988d5d548_Mask%20group-min.png"
                alt="card-image"
              />
            </div>
            <div className="right">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a1e290e53ef1d8df1701b_quote-up.2%201.svg"
                alt=""
              />
              <p>
                <span className="grey-text">
                  Email outreach is one of the most effective
                  <br /> ways to expand your business and gain
                  <br /> new business. Instantly does this well;
                </span>{" "}
                you <br />
                can add unlimited email accounts and just
                <br /> does all the basics in the right way!
              </p>
              <div className="justify">
                <div className="details">
                  <h4>Alex Siderius</h4>
                  <p>CEO at Webaware</p>
                </div>
                <div className="arrows">
                  <div className="arrow">
                    <img
                      src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/6387092f1a49fbf44aefbdaa_arrow-right.svg"
                      alt=""
                    />
                    <img
                      className="white"
                      src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638709bdb0020a9b506d7f70_arrow-right%20white.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="left">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/63eb75f14ee4632dcd84d969_61fd8187b161ba3820af635c_Tony_compressed-p-500-p-500.jpeg"
                alt="card-image"
              />
            </div>
            <div className="right">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a1e290e53ef1d8df1701b_quote-up.2%201.svg"
                alt=""
              />
              <p>
                <span className="grey-text">
                  “Instantly is the exact email outreach solution
                  <br /> that I always wish existed.
                </span>{" "}
                We’ve tried almost
                <br /> every product that people in the outbound
                <br /> space talks about and none of them even
                <br /> comes close to this.”
              </p>
              <div className="justify">
                <div className="details">
                  <h4>Tony Liu</h4>
                  <p>CEO at Omnichannel</p>
                </div>
                <div className="arrows">
                  <div className="arrow">
                    <img
                      src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/6387092f1a49fbf44aefbdaa_arrow-right.svg"
                      alt=""
                    />
                    <img
                      className="white"
                      src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638709bdb0020a9b506d7f70_arrow-right%20white.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ratings">
        <div className="rate first">
          <img
            src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a2d5f977eb023629c939d_b1.svg"
            alt=""
          />
          <h2>
            Instantly User <br /> Ratings
          </h2>
        </div>
        <div className="rate">
          <img
            src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a2dc80e53eff3aef2602a_b2.svg"
            alt=""
          />
          <h4>Ease of Use</h4>
          <p>
            Email Marketing Average:
            <br /> 8.7
          </p>
        </div>
        <div className="rate">
          <img
            src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a2fe4ac476cb5f6519b76_b3.svg"
            alt=""
          />
          <h4>Quality of support</h4>
          <p>
            Email Marketing Average:
            <br /> 8.5
          </p>
        </div>
        <div className="rate">
          <img
            src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a2fe9338a149966476ec1_b4.svg"
            alt=""
          />
          <h4>Ease of setup</h4>
          <p>
            Email Marketing Average:
            <br /> 8.4
          </p>
        </div>
      </div>
      <div className="accounts">
        <div className="container">
          <div className="left">
            <img
              src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a347b1b34fc27cea3cf79_l1-min.png"
              alt=""
            />
          </div>
          <div className="right">
            <h2>
              Infinitely Scale Your
              <br /> Outreach with <br />{" "}
              <span className="gradient-text">Unlimited Accounts</span>{" "}
            </h2>

            <button>START FOR FREE</button>

            <div className="save-icon">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a36fb0e53ef7ff3f3151f_add-circle.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="right">
            <h2>
              Reach Your
              <br /> Prospects Inbox with
              <br />
              <span className="gradient-text">
                our Deliverability
                <br /> Network
              </span>{" "}
            </h2>

            <button>START FOR FREE</button>

            <div className="save-icon">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a36fb0e53ef7ff3f3151f_add-circle.svg"
                alt=""
              />
            </div>
          </div>
          <div className="left">
            <img
              src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a37bf41aa86e74f684d2e_l2-p-800.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="dropdowns-container">
        <div className="dropdown dropdown1 hiden">
          <div className="justify">
            <h4>
              <span className="grey-text">
                Protect Your Deliberibility With
              </span>{" "}
              Email Validation And Bulk <br /> Domain Testing
            </h4>
            <div className="dropdown-icon">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a659d8737db80c486392d_Glyph_%20undefined.svg"
                alt=""
              />
            </div>
          </div>
          <div className="line"></div>
          <div className="other-content">
            <div className="left">
              <p>
                Clean & verify your lead lists and ensure your
                <br /> domains are correctly set up for cold emailing.
                <br /> Our one-click bulk domain tester lets you know <br />
                if your domain is missing important records.
              </p>
              <button>START FOR FREE</button>
            </div>
            <div className="right">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/63d2e0a0e05b0800c3a6e08e_Mask%20group-min.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="dropdown dropdown2 hiden">
          <div className="justify">
            <h4>
              <span className="grey-text">
                Automate & Personalise Emails with
              </span>{" "}
              Campaign Builder &<br /> Integrations
            </h4>
            <div className="dropdown-icon">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a659d8737db80c486392d_Glyph_%20undefined.svg"
                alt=""
              />
            </div>
          </div>
          <div className="line"></div>
          <div className="other-content">
            <div className="left">
              <p>
                Clean & verify your lead lists and ensure your
                <br /> domains are correctly set up for cold emailing.
                <br /> Our one-click bulk domain tester lets you know <br />
                if your domain is missing important records.
              </p>

              <p className="gradient-text">
                Use our Zapier integration and webhooks for
                <br /> advanced automations.
              </p>
              <button>START FOR FREE</button>
            </div>
            <div className="right">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a6a8e679b6233d7031097_Mask%20group%20(1)-min.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="dropdown dropdown3 hiden">
          <div className="justify">
            <h4>
              <span className="grey-text">Save time with</span> Inbox Rotation
            </h4>
            <div className="dropdown-icon">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a659d8737db80c486392d_Glyph_%20undefined.svg"
                alt=""
              />
            </div>
          </div>
          <div className="line"></div>
          <div className="other-content">
            <div className="left">
              <p>
                Our Campaign Builder lets you use variables,
                <br /> sequences and smart scheduling to maximise
                <br /> your deliverability and response rates.
              </p>
              <p className="gradient-text">
                Instantly will then rotate sending emails
                <br /> between these accounts to make it more
                <br /> natural.
              </p>
              <button>START FOR FREE</button>
            </div>
            <div className="right">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/63d2e10bcf393e4e82a4d5f0_Mask%20group%20(1)-min.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="unibox-sections">
        <div className="main-container">
          <h2>
            Respond to Leads and Close
            <br /> Deals <span className="gradient-text">with Unibox</span>
          </h2>
          <p>
            Managing 1 inbox is easy - with Unibox you can manage tens or
            hundreds of
            <br /> inboxes simultaneously. Mark leads as positive or negative,
            forward or respond to
            <br /> them to book meetings and close deals from one simple inbox.
          </p>
          <button>START FOR FREE</button>
          <div className="image">
            <img
              src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a75c95fd2fdf281837483_Glyph_%20undefined.svg"
              alt=""
              className="small-image small1"
            />
            <img
              src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a74d69a1618352f92efc4_Group%2040727-min.png"
              alt=""
              className="small-image small2"
            />
            <img
              src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a6dde57859f7455bbc850_mmf.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="analytics-section">
        <div className="group">
          <div className="left">
            <h3>
              Optimize with <br />{" "}
              <span className="gradient-text">Campaign Analytics</span>
            </h3>
            <p>
              See exactly what’s working with our advanced
              <br /> analytics dashboard. Pause the campaigns that
              <br /> need work and scale the ones that are performing
              <br /> well.
            </p>
            <button>START FOR FREE</button>
          </div>
          <div className="right noice">
            <img
              src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a7bd15fd2fdd98483e81f_Group%2040737-min.png"
              className="small-image image1"
              alt=""
            />
            <img
              src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a7c8c4e98026dad1663ee_Group%2040737%20(1)-min.png"
              alt=""
              className="small-image image2"
            />
            <img
              src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a7adc2a2fb86063ea5d1e_Group%2040736-min.png"
              alt=""
            />
          </div>
        </div>
        <div className="group last">
          <div className="right double-images-section">
            <img
              src="
            https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a8147b9a23ca681b21f02_Group%20170.svg"
              alt=""
              className="small-image small1"
            />
            <img
              src="
            https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a809f44a03f4edb8e983d_Group%2040715.svg"
              alt=""
              className="small-image small2"
            />
            <div className="image">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a7f74698caa6ab23657a8_Group%2040710-min.png"
                alt=""
              />
            </div>
            <div className="image">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a802c44a03f584a8e8c7e_Group%2040714-min-p-500.png"
                alt=""
              />
            </div>
          </div>
          <div className="left">
            <h3>
              Eliminate Guesswork
              <br /> with{" "}
              <span className="gradient-text">
                Instantly Sales
                <br /> Accelerator
              </span>
            </h3>
            <p>
              Get access to 50+ docs and SOPs, 600+ email
              <br /> outreach templates, all our set-up guides and step-
              <br />
              by-step instructions on exactly how we set up
              <br /> campaigns + our Sales Vault which includes 200+
              <br /> Email outreach strategies and Tools we’re using.
            </p>
            <button>START FOR FREE</button>
          </div>
        </div>
      </div>
      <div className="private-commiunity">
        <div className="container">
          <div className="left">
            <h2>
              Learn From The Best in {""}
              <br />
              <span className="gradient-text">Our Private Community</span>
            </h2>
            <p>
              Get access to our Private Facebook Community where you can
              <br /> learn from other similar entrepreneurs. See what’s working
              and
              <br /> not working for them. Ask questions and get answers from
              our
              <br /> experts.
            </p>
            <button>START FOR FREE</button>
          </div>
          <div className="right">
            <img
              src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a8702698caa47443702ed_Group%2040778-min.png"
              alt=""
              className="small1 small-image"
            />
            <img
              src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a86b177d1c7307f8bba08_Group%2040777%20(3)-p-500.png"
              alt=""
              className="small2 small-image"
            />
            <img
              src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a84d7c239deca32a89cfb_Mask%20group%20(5)-min.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="cards-section">
        <h2>
          <span className="grey-text">
            See why thousands of agencies,
            <br /> recruiters, and
          </span>{" "}
          entrepreneurs love
          <br /> Instantly.
        </h2>

        <div className="review-cards">
          <div className="column">
            <div className="card">
              <p>
                <span className="grey-text">
                  “I’ve specialised in email marketing
                  <br /> since 2018 and in this time I've used
                  <br /> almost every popular email <br />
                  outreach tool available on the
                  <br />
                  market today -{" "}
                </span>
                <span className="gradient-text">
                  Instantly is hands
                  <br /> down my favourite of them all
                </span>
                .”
              </p>
              <div className="details">
                <img
                  src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a1d59e54de90988d5d548_Mask%20group-min.png"
                  alt=""
                />
                <div className="info">
                  <h4>SAM WILSON</h4>
                  <p>Managing Director @ Canbury Partners</p>
                </div>
              </div>
            </div>
            <div className="card">
              <p>
                <span className="grey-text">
                  "I've tried a few other email
                  <br /> automation tools but Instantly
                  <br />
                  beats all of them in terms of ease of
                  <br /> use, deliverability optimization
                  <br />
                  settings, unlimited email account <br />
                  additions. One top of the amazing
                  <br /> features,{" "}
                  <span className="gradient-text">
                    their support team is <br />
                    world class and very helpful when
                    <br /> needed
                  </span>
                  "
                </span>
              </p>
              <div className="details">
                <img
                  src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/63f366af344db29298dcdc24_unnamed%20(2).png"
                  alt=""
                />
                <div className="info">
                  <h4>SANJAY JOHN EAPEN</h4>
                  <p>CEO @ Thincture</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p>
                <span className="grey-text">
                  “Instantly is the exact email
                  <br /> outreach solution that{" "}
                  <span className="gradient-text">
                    I always wish
                    <br /> existed
                  </span>
                  . We’ve tried almost every
                  <br /> product that people in the
                  <br /> outbound space talks about and
                  <br /> none of them even comes close to
                  <br /> this.”
                </span>
                .”
              </p>
              <div className="details">
                <img
                  src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638b15d3b9a23c14d3bab843_image%2016%20(1)-min.png"
                  alt=""
                />
                <div className="info">
                  <h4>TONY LIU</h4>
                  <p>CEO @ Omnichannel</p>
                </div>
              </div>
            </div>
            <div className="card">
              <p>
                <span className="grey-text">
                  "It's super easy to use. I've used a lot
                  <br /> of softwares, but{" "}
                  <span className="gradient-text">
                    Instantly comes
                    <br /> with easiest and most user friendly
                    <br /> interface
                  </span>
                  ."
                </span>
                .”
              </p>
              <div className="details">
                <img
                  src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/63f37ccb43a17b944322acb4_thumb_square_43212d0585ab6381bc0e1a4823370653.webp"
                  alt=""
                />
                <div className="info">
                  <h4>SHIVANG SINGH</h4>
                  <p>CEO @ Emaily Zone</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p>
                <span className="grey-text">
                  The two best things about Instantly
                  <br /> is that it allows you to send at scale,
                  <br /> and the team teaches you how to
                  <br /> do it.{" "}
                  <span className="gradient-text">
                    If you are on a normal email
                    <br /> outreach program then you have
                    <br /> no clue what you are missing out
                    <br /> on.
                  </span>
                </span>
                .”
              </p>
              <div className="details">
                <img
                  src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/63eb94b5d8c4c160867a2759_david.png"
                  alt=""
                />
                <div className="info">
                  <h4>DAVID TAGGART</h4>
                  <p>Founder @ PDMacro</p>
                </div>
              </div>
            </div>
            <div className="card">
              <p>
                <span className="grey-text">
                  The overall{" "}
                  <span className="gradient-text">
                    UI is very clean and
                    <br /> they have been adding new
                    <br />
                    features frequently
                  </span>{" "}
                  based on
                  <br />
                  customer feedback which is great.
                  <br /> Love Instantly!
                </span>
                .”
              </p>
              <div className="details">
                <img
                  src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/63eb996305e98670e534cb78_tasha.png"
                  alt=""
                />
                <div className="info">
                  <h4>TASHA ROACHFORD</h4>
                  <p>CEO @ Brand Digitizer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button>
          SEE MORE <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="footer">
        <div className="container">
          <div className="top-footer">
            <h2>Get started for free</h2>
            <p>Send your first outreach campaign today.</p>
            <button>START FOR FREE</button>
            <div className="images">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638b1ffb698caa4b9b3e80ea_green.svg"
                alt=""
                className="alada image1"
              />
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638b20198563257f83df0a78_red.svg"
                alt=""
                className="alada image2"
              />
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638b2039b9a23c8b33bb7d61_Group%20244.svg"
                alt=""
                className="alada image3"
              />
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638b202bc239def125b03735_Group%2040762.svg"
                alt=""
                className="alada image4"
              />
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638b1b38346ec7f26b78a7f0_Group%20179-min.png"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638b1bc10787c72670cc95bc_Group%20165-min-p-500.png"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638b1e1f95fb43f7542b8475_Group%20243-min.png"
                alt=""
              />
            </div>
          </div>
          <div className="bottom-footer">
            <div className="column column-1st">
              <img
                src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/63fcf482121cf17194a56a8e_Instantly%20Logo%20Footer.svg"
                alt=""
              />

              <div className="bottom">
                <div className="icons">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-linkedin"></i>
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <p>
                  Copyright @ Instantly 2024
                  <br /> - Sales Engagement & Lead
                  <br />
                  Intelligence
                </p>
              </div>
            </div>
            <div className="right">
              <div className="column 2nd-column">
                <ul>
                  <li className="heading">Quick Links</li>
                  <li>Warmup</li>
                  <li>Pricing</li>
                  <li>CRM</li>
                  <li>About</li>
                  <li>Wall Of Love</li>
                  <li>Experts</li>
                  <li>Affiliate</li>
                </ul>
              </div>
              <div className="column 3rd-column">
                <ul>
                  <li className="heading">Support</li>
                  <li>Help Desk</li>
                  <li>Roadmap</li>
                  <li>Facebook Group</li>
                </ul>
              </div>
              <div className="column 4th-column">
                <ul>
                  <li className="heading">Company</li>
                  <li>Terms</li>
                  <li>Privacy</li>
                  <li>Don't Sell My Info</li>
                  <li>Privacy Center</li>
                  <li>Cookie Declaration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="/script.js"></Script>
    </>
  );
}
