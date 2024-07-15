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
                <div className="another-one">
                  <div className="left">
                    <ul>
                      <li>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.91016 10.9092C12.1193 10.9092 13.9102 9.11832 13.9102 6.90918C13.9102 4.70004 12.1193 2.90918 9.91016 2.90918C7.70102 2.90918 5.91016 4.70004 5.91016 6.90918C5.91016 9.11832 7.70102 10.9092 9.91016 10.9092ZM1.91016 15.4092C1.91016 14.0285 3.02944 12.9092 4.41016 12.9092H10.7851C10.543 13.529 10.4102 14.2036 10.4102 14.9092C10.4102 16.7693 11.3336 18.4138 12.7471 19.4092H10.4102C8.8686 19.4092 7.53071 20.2812 6.8629 21.5589C4.94757 21.0666 3.72112 20.1073 2.96425 19.0193C1.91015 17.504 1.91016 15.9348 1.91016 15.66V15.4092ZM24.9574 21.5589C26.8727 21.0666 28.0992 20.1073 28.8561 19.0193C29.9102 17.504 29.9102 15.934 29.9102 15.6592V15.4092C29.9102 14.0285 28.7909 12.9092 27.4102 12.9092H21.0352C21.2773 13.529 21.4102 14.2036 21.4102 14.9092C21.4102 16.7693 20.4867 18.4138 19.0732 19.4092H21.4102C22.9517 19.4092 24.2896 20.2812 24.9574 21.5589ZM25.9102 6.90918C25.9102 9.11832 24.1193 10.9092 21.9102 10.9092C19.701 10.9092 17.9102 9.11832 17.9102 6.90918C17.9102 4.70004 19.701 2.90918 21.9102 2.90918C24.1193 2.90918 25.9102 4.70004 25.9102 6.90918ZM7.91016 23.4092C7.91016 22.0285 9.02945 20.9092 10.4102 20.9092H21.4102C22.7909 20.9092 23.9102 22.0285 23.9102 23.4092V23.6592C23.9102 23.934 23.9102 25.504 22.8561 27.0193C21.7564 28.6001 19.6653 29.9092 15.9102 29.9092C12.1551 29.9092 10.064 28.6001 8.96425 27.0193C7.91015 25.504 7.91016 23.9348 7.91016 23.66V23.4092ZM15.9102 18.9092C18.1193 18.9092 19.9102 17.1183 19.9102 14.9092C19.9102 12.7 18.1193 10.9092 15.9102 10.9092C13.701 10.9092 11.9102 12.7 11.9102 14.9092C11.9102 17.1183 13.701 18.9092 15.9102 18.9092Z"
                            fill="#1179FC"
                          ></path>
                        </svg>
                        Outreach
                      </li>
                      <li>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.4128 16.082C27.4628 16.082 30.7461 19.3653 30.7461 23.4154C30.7461 27.4655 27.4628 30.7487 23.4128 30.7487C19.3627 30.7487 16.0794 27.4655 16.0794 23.4154C16.0794 19.3653 19.3627 16.082 23.4128 16.082ZM23.4128 18.7477L23.2929 18.7584C23.0208 18.8078 22.8062 19.0224 22.7568 19.2945L22.7461 19.4143L22.7456 22.7477L19.4096 22.7487L19.2898 22.7594C19.0177 22.8088 18.8031 23.0234 18.7537 23.2955L18.743 23.4154L18.7537 23.5352C18.8031 23.8073 19.0177 24.0219 19.2898 24.0713L19.4096 24.082L22.747 24.081L22.7476 27.42L22.7583 27.5398C22.8077 27.812 23.0223 28.0265 23.2944 28.0759L23.4142 28.0867L23.5341 28.0759C23.8062 28.0265 24.0208 27.812 24.0702 27.5398L24.0809 27.42L24.0803 24.081L27.4188 24.082L27.5387 24.0713C27.8108 24.0219 28.0254 23.8073 28.0748 23.5352L28.0855 23.4154L28.0748 23.2955C28.0254 23.0234 27.8108 22.8088 27.5387 22.7594L27.4188 22.7487L24.079 22.7477L24.0794 19.4143L24.0687 19.2945C24.0193 19.0224 23.8047 18.8078 23.5326 18.7584L23.4128 18.7477ZM19.0848 13.4154C20.1975 13.4154 21.1687 14.0212 21.6867 14.9209C17.7265 15.7216 14.7461 19.2204 14.7461 23.4154C14.7461 25.1342 15.2465 26.7362 16.1095 28.0836L16.0834 28.082C12.7689 28.082 10.082 25.3951 10.082 22.0806V16.4154C10.082 14.7585 11.4251 13.4154 13.082 13.4154H19.0848ZM9.9547 13.4157C9.26997 14.1294 8.82717 15.077 8.75813 16.1267L8.74866 16.4154V22.0806C8.74866 23.2095 9.00368 24.2788 9.45925 25.2341C9.02046 25.3528 8.55808 25.4154 8.08108 25.4154C5.13465 25.4154 2.74609 23.0268 2.74609 20.0804V16.4154C2.74609 14.8275 3.97964 13.5278 5.54069 13.4223L5.74609 13.4154L9.9547 13.4157ZM26.4128 13.4154C28.0696 13.4154 29.4128 14.7585 29.4128 16.4154L29.4139 17.1625C27.8566 15.6675 25.742 14.7487 23.4128 14.7487L23.0885 14.7547C22.8812 14.2549 22.5819 13.8012 22.2121 13.4157L26.4128 13.4154ZM24.7461 5.41536C26.587 5.41536 28.0794 6.90775 28.0794 8.7487C28.0794 10.5896 26.587 12.082 24.7461 12.082C22.9051 12.082 21.4128 10.5896 21.4128 8.7487C21.4128 6.90775 22.9051 5.41536 24.7461 5.41536ZM16.0794 4.08203C18.2886 4.08203 20.0794 5.87289 20.0794 8.08203C20.0794 10.2912 18.2886 12.082 16.0794 12.082C13.8703 12.082 12.0794 10.2912 12.0794 8.08203C12.0794 5.87289 13.8703 4.08203 16.0794 4.08203ZM7.41276 5.41536C9.25371 5.41536 10.7461 6.90775 10.7461 8.7487C10.7461 10.5896 9.25371 12.082 7.41276 12.082C5.57181 12.082 4.07943 10.5896 4.07943 8.7487C4.07943 6.90775 5.57181 5.41536 7.41276 5.41536Z"
                            fill="#02BD6E"
                          ></path>
                        </svg>
                        Lead Database
                      </li>
                      <li>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30.75 8.74837C30.75 12.7985 27.4668 16.0817 23.4167 16.0817C19.3666 16.0817 16.0833 12.7985 16.0833 8.74837C16.0833 4.69828 19.3666 1.41504 23.4167 1.41504C27.4668 1.41504 30.75 4.69828 30.75 8.74837ZM27.8881 5.6103C27.6277 5.34995 27.2056 5.34995 26.9453 5.6103L22.0833 10.4722L19.8881 8.27697C19.6277 8.01662 19.2056 8.01662 18.9453 8.27697C18.6849 8.53732 18.6849 8.95943 18.9453 9.21978L21.6119 11.8864C21.8723 12.1468 22.2944 12.1468 22.5547 11.8864L27.8881 6.55311C28.1484 6.29276 28.1484 5.87065 27.8881 5.6103ZM23.4167 17.415C25.7453 17.415 27.8595 16.4966 29.4167 15.0023V22.415C29.4167 24.7257 27.6081 26.614 25.3292 26.7415L25.0833 26.7484H7.08333C4.77262 26.7484 2.88434 24.9398 2.75686 22.6609L2.75 22.415V11.559L15.6193 18.3009C15.9099 18.4531 16.2567 18.4531 16.5473 18.3009L19.7698 16.6127C20.8783 17.1276 22.1139 17.415 23.4167 17.415ZM7.08333 5.41504H15.4142C14.9863 6.44116 14.75 7.56717 14.75 8.74837C14.75 11.4051 15.9454 13.7826 17.8277 15.3724L16.0833 16.2862L2.77159 9.3131C2.98182 7.20532 4.70242 5.5423 6.83545 5.42201L7.08333 5.41504Z"
                            fill="#EB5757"
                          ></path>
                        </svg>
                        Deliverability
                      </li>
                      <li>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.75 14.7487C13.6955 14.7487 16.0833 12.3609 16.0833 9.41536C16.0833 6.46985 13.6955 4.08203 10.75 4.08203C7.80448 4.08203 5.41667 6.46985 5.41667 9.41536C5.41667 12.3609 7.80448 14.7487 10.75 14.7487ZM22.75 14.7487C24.9591 14.7487 26.75 12.9578 26.75 10.7487C26.75 8.53956 24.9591 6.7487 22.75 6.7487C20.5409 6.7487 18.75 8.53956 18.75 10.7487C18.75 12.9578 20.5409 14.7487 22.75 14.7487ZM5.75 17.4154C4.09315 17.4154 2.75 18.7585 2.75 20.4154V20.7487C2.75 20.7487 2.75 26.7487 10.75 26.7487C12.6031 26.7487 14.027 26.4267 15.121 25.932C14.8797 25.1356 14.75 24.2906 14.75 23.4154C14.75 21.2062 15.5766 19.1901 16.9373 17.6595C16.5732 17.5024 16.1717 17.4154 15.75 17.4154H5.75ZM19.1196 18.7165C19.5393 20.1702 18.6668 21.6814 17.198 22.0448L16.4191 22.2375C16.3592 22.6211 16.3281 23.0147 16.3281 23.4158C16.3281 23.8353 16.3622 24.2467 16.4276 24.647L17.1469 24.8202C18.6302 25.1774 19.512 26.7041 19.0802 28.1675L18.8318 29.0092C19.4173 29.5234 20.0846 29.9409 20.8106 30.238L21.4683 29.5463C22.5198 28.4406 24.2828 28.4409 25.3338 29.547L25.9988 30.2467C26.7235 29.953 27.3902 29.5394 27.9758 29.0295L27.7118 28.1149C27.2921 26.6612 28.1646 25.15 29.6334 24.7866L30.4117 24.5941C30.4716 24.2105 30.5027 23.8169 30.5027 23.4158C30.5027 22.9961 30.4686 22.5847 30.4032 22.1843L29.6846 22.0112C28.2012 21.654 27.3195 20.1273 27.7513 18.6639L27.9995 17.8228C27.414 17.3085 26.7467 16.8908 26.0206 16.5937L25.3631 17.2851C24.3117 18.3908 22.5487 18.3905 21.4976 17.2845L20.8326 16.5846C20.1078 16.8782 19.4412 17.2918 18.8555 17.8016L19.1196 18.7165ZM23.4154 25.4158C22.3479 25.4158 21.4825 24.5203 21.4825 23.4158C21.4825 22.3112 22.3479 21.4158 23.4154 21.4158C24.4829 21.4158 25.3483 22.3112 25.3483 23.4158C25.3483 24.5203 24.4829 25.4158 23.4154 25.4158Z"
                            fill="#DD83FC"
                          ></path>
                        </svg>
                        CRM
                      </li>
                    </ul>
                  </div>
                  <div className="right">
                    <div className="left">
                      <h2>
                        Find & Close Your
                        <br /> Ideal Clients
                      </h2>
                      <p>
                        Instantly turns leads into clients with
                        <br /> Automated Outreach, Deliverability
                        <br /> Network, Lead Database & CRM
                      </p>
                      <button>BOOK A DEMO</button>
                    </div>
                    <div className="right">
                      <img
                        src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/666ba2823007e468dfc32451_image.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
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
