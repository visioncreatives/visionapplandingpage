import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoLockup } from "./Logo";
import "./homepage.css";

// Existing repository destination. No verified role-specific links were supplied.
// Both signup journeys begin in the web app.
const WEB_APP_URL = "https://live.joinvision.app";
const IOS_APP_URL = "https://apps.apple.com/us/app/vision-creator-marketplace/id6788151682";

function Icon({ name = "arrow", ...props }) {
  const paths = {
    arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
    diagonal: <path d="M6 18 18 6M6 6h12v12" />,
    folder: <path d="M3 7V5h6l3 3h9v12H3V7Z" />,
    service: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5ZM3 8v9l9 5 9-5V8M12 13v9" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    ),
    comment: <path d="M3 4h18v14H7l-4 3V4Z" />,
    send: <path d="m3 11 18-8-6 18-3.5-7L3 11Zm8.5 3L21 3" />,
    bookmark: <path d="M6 3h12v18l-6-4-6 4V3Z" />,
    phone: (
      <>
        <rect x="6" y="2.5" width="12" height="19" rx="2" />
        <path d="M11 18.5h2" />
      </>
    ),
    menu: <path d="M4 8h16M4 16h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

function CTA({ children, secondary = false, className = "" }) {
  return (
    <a
      href={WEB_APP_URL}
      className={`v-button ${secondary ? "v-button-secondary" : ""} ${className}`}
    >
      {children}
    </a>
  );
}

function PlatformLinks() {
  return (
    <div className="v-platform-links">
      <a className="v-ios-download" href={IOS_APP_URL}>
        <Icon name="phone" /> Download for iOS <Icon name="diagonal" />
      </a>
      <a className="v-web-link" href={WEB_APP_URL}>
        Use the web app <Icon name="arrow" />
      </a>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="v-header">
      <div className="v-container v-nav">
        <a href="#top" aria-label="Vision home">
          <LogoLockup size={22} />
        </a>
        <nav aria-label="Main navigation" className="v-desktop-nav">
          <a href="#profile">For creatives</a>
          <a href="#for-clients">For clients</a>
          <Link to="/faq">FAQ</Link>
        </nav>
        <div className="v-nav-actions">
          <a className="v-nav-login" href={WEB_APP_URL}>Log in on web</a>
          <a className="v-button" href={IOS_APP_URL}>Download for iOS</a>
        </div>
        <button
          className="v-menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="v-mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document.querySelector(".v-menu-toggle")?.focus();
            }
          }}
        >
          <a href="#profile" onClick={() => setOpen(false)}>
            For creatives
          </a>
          <a href="#for-clients" onClick={() => setOpen(false)}>
            For clients
          </a>
          <Link to="/faq">FAQ</Link>
          <CTA>Join as a Creative</CTA>
          <CTA secondary>Post a Job Listing</CTA>
          <a className="v-button" href={IOS_APP_URL}>Download for iOS</a>
          <a href={WEB_APP_URL}>Use the web app</a>
        </nav>
      )}
    </header>
  );
}

function PostExample() {
  return (
    <div className="v-post">
      <div className="v-post-header">
        <img src="/homepage/emi-portrait.jpeg" alt="" width="34" height="34" />
        <div><strong>picsbyemi</strong><span>Emi · Wedding Shoots</span></div>
        <span className="v-post-dots" aria-hidden="true">···</span>
      </div>
      <div className="v-post-work">
        <img className="v-post-image" src="/homepage/wedding.jpeg"
          alt="A wedding couple laughing in a warmly lit hallway"
          width="1152" height="1536" fetchpriority="high" />
        <a className="v-post-service-tag" href={WEB_APP_URL}
          aria-label="Book Engagement Shoot — open Vision web app">
          <span><strong>Engagement Shoot</strong><small>From $200/hr</small></span>
          <span className="v-post-service-button">Book <Icon name="diagonal" /></span>
        </a>
      </div>
      <div className="v-post-icons" aria-hidden="true">
        <Icon name="heart" /><Icon name="comment" /><Icon name="send" />
        <Icon name="bookmark" className="v-post-save" />
      </div>
      <p className="v-post-caption"><strong>picsbyemi</strong> Wedding Shoots</p>
    </div>
  );
}

function Hero() {
  return (
    <section className="v-container v-hero" aria-labelledby="hero-title">
      <div className="v-hero-copy">
        <h1 id="hero-title">
          Like Instagram,
          <br />
          but built for
          <br />
          <em>creative work.</em>
        </h1>
        <p className="v-hero-description">
          Post your work. Show what you offer.
          <br />
          <strong>Get booked.</strong>
        </p>
        <p className="v-hiring-line">
          Hiring? Post a paid job and let creators apply.
        </p>
        <div className="v-cta-pair">
          <CTA>Join as a Creative</CTA>
          <CTA secondary>Post a Job Listing</CTA>
        </div>
        <p className="v-app-note">Get started on the web. No download needed.</p>
        <a className="v-mobile-download" href={IOS_APP_URL}>Download for iOS ↗</a>
      </div>
      <figure className="v-hero-visual">
        <PostExample />
        <figcaption className="v-example-label">
          Illustrative post & service preview
        </figcaption>
      </figure>
    </section>
  );
}

const features = [
  ["01", "Profiles with purpose", "#profile"],
  ["02", "Posts with services", "#services"],
  ["03", "Work, organized", "#folders"],
  ["04", "Projects worth making", "#for-clients"],
];

function FeatureCopy({ title, children }) {
  return (
    <div className="v-feature-copy">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="v-container v-feature v-services"
      aria-labelledby="services-title"
    >
      <FeatureCopy
        title={
          <span id="services-title">
            From “love this”
            <br />
            to <em>“let’s book.”</em>
          </span>
        }
      >
        <p>
          Give every post a next step. Attach a service to your work so someone
          who loves what they see can explore what you offer and start a
          booking.
        </p>
        <a className="v-text-link" href={WEB_APP_URL}>
          Share your work on Vision <Icon name="arrow" />
        </a>
      </FeatureCopy>
      <figure className="v-service-visual">
        <img
          className="v-booking-reference"
          src="/homepage/booking-post.png"
          alt="Emi’s Vision post showing a wedding couple in the rain with an Engagement Shoot service from $200 per hour"
          loading="lazy"
          width="1320"
          height="2075"
        />
        <figcaption className="v-example-label">
          Inside Vision · services attached to a post
        </figcaption>
      </figure>
    </section>
  );
}

function Profile() {
  return (
    <section
      id="profile"
      className="v-profile-band"
      aria-labelledby="profile-title"
    >
      <div className="v-container v-feature v-feature-reverse">
        <figure className="v-profile-visual">
          <div className="v-profile-orbit" />
          <img
            src="/homepage/emi-profile.jpg"
            alt="Updated Vision profile for @picsbyemi showing portfolio folders, Work, Services, Reviews, Google rating and bookings"
            loading="lazy"
            width="1080"
            height="2000"
          />
          <figcaption className="v-example-label">
            Inside Vision · creator profile
          </figcaption>
        </figure>
        <FeatureCopy
          title={
            <span id="profile-title">
              Your work.
              <br />
              Your reputation.
              <br />
              <em>All in one place.</em>
            </span>
          }
        >
          <p>
            A portfolio gets you noticed. A Vision profile gives clients the
            full picture: your work, your services, your reviews, and ways to
            book you.
          </p>
          <ul className="v-profile-list">
            <li>
              <span>Work & services</span>
              <span>Show your style and what you offer.</span>
            </li>
            <li>
              <span>Reviews & bookings</span>
              <span>Help clients take the next step.</span>
            </li>
          </ul>
          <a className="v-text-link" href={WEB_APP_URL}>
            Create your profile <Icon name="arrow" />
          </a>
        </FeatureCopy>
      </div>
    </section>
  );
}

const folders = [
  {
    name: "Film Portraits",
    images: [
      ["portraits/p1.png", "Sunlit film portrait against the sky"],
      ["portraits/p2.png", "Film portrait beside a river"],
      ["portraits/p3.png", "Portrait under a cloudy sky"],
    ],
  },
  {
    name: "Wedding Shoots",
    images: [
      ["wedding.jpeg", "A wedding couple laughing in a hallway"],
      ["reception.jpeg", "A candlelit wedding reception"],
      ["details.jpeg", "Wedding photography details"],
    ],
  },
];

function Folders() {
  const [selected, setSelected] = useState(folders[0].name);
  const current = folders.find((folder) => folder.name === selected);
  return (
    <section id="folders" className="v-folders-band" aria-labelledby="folders-title">
      <div className="v-container v-feature v-feature-reverse v-folders">
        <figure className="v-folder-visual">
          <div className="v-folder-heading">
            <span>Work, curated by you.</span>
            <Icon name="folder" />
          </div>
          <div className="v-folder-options" role="group" aria-label="Preview portfolio folders">
            {folders.map((folder) => (
              <button
                key={folder.name}
                aria-pressed={selected === folder.name}
                aria-controls="folder-preview"
                onClick={() => setSelected(folder.name)}
              >
                <Icon name="folder" />
                {folder.name}
              </button>
            ))}
          </div>
          <div
            className="v-folder-grid"
            id="folder-preview"
            aria-live="polite"
            aria-label={`${selected} folder preview`}
          >
            {current.images.map(([file, alt]) => (
              <img
                key={file}
                src={`/homepage/${file}`}
                alt={alt}
                width="1152"
                height="1536"
                loading="lazy"
              />
            ))}
          </div>
          <div className="v-folder-bottom">
            <span>{selected}</span>
            <span>Portfolio folder</span>
          </div>
          <figcaption className="v-example-label">
            Example folder contents · choose a folder to explore
          </figcaption>
        </figure>
        <FeatureCopy
          title={
            <span id="folders-title">
              A place for
              <br />
              <em>every kind of work.</em>
            </span>
          }
        >
          <p>
            Group your portfolio into folders, like Film Portraits and Wedding Shoots.
            Make it easy for clients to browse the work that matters to their
            project.
          </p>
          <p className="v-small-copy">Your style, with a little structure.</p>
        </FeatureCopy>
      </div>
    </section>
  );
}

function Discovery() {
  return (
    <section
      id="for-clients"
      className="v-discovery-band"
      aria-labelledby="discovery-title"
    >
      <div className="v-container v-discovery">
        <div className="v-discovery-head">
          <h2 id="discovery-title">
            Know what you need?
            <br />
            <em>Start here.</em>
          </h2>
          <p>
            Search for a creative or a paid project. If you’re hiring, you can
            also post a listing and let the right people come to you.
          </p>
        </div>
        <div className="v-discovery-paths">
          <article className="v-discovery-path">
            <figure className="v-discovery-visual">
              <img
                src="/homepage/search.png"
                alt="Vision's Detailed search screen with category, location, and price range filters"
                loading="lazy"
                width="1320"
                height="2192"
              />
              <figcaption className="v-example-label">Inside Vision · detailed search</figcaption>
            </figure>
            <div className="v-discovery-copy">
              <h3>Search for<br /><em>your match.</em></h3>
              <p>
                Explore creatives or paid listings, then refine by category,
                location, and price.
              </p>
              <a className="v-text-link" href={WEB_APP_URL}>
                Search on Vision <Icon name="arrow" />
              </a>
            </div>
          </article>
          <article className="v-discovery-path">
            <figure className="v-discovery-visual">
              <img
                className="v-discovery-application"
                src="/homepage/application.png"
                alt="Vision’s Apply to listing screen with an introduction, a proposed price, and a Send application button"
                loading="lazy"
                width="632"
                height="1316"
              />
              <figcaption className="v-example-label">Inside Vision · applying to a project</figcaption>
            </figure>
            <div className="v-discovery-copy">
              <h3>Post the brief.<br /><em>Meet the talent.</em></h3>
              <p>
                Share a paid project and review applications from creators who
                want to work with you.
              </p>
              <CTA>Post a Job Listing</CTA>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="v-container v-footer">
      <div className="v-footer-top">
        <a href="#top" aria-label="Vision home">
          <LogoLockup size={24} />
        </a>
        <p>
          A place for creative work.
          <br />
          And the people who make it happen.
        </p>
        <a href={WEB_APP_URL} className="v-text-link">
          Open web app <Icon name="diagonal" />
        </a>
      </div>
      <div className="v-footer-bottom">
        <span>© {new Date().getFullYear()} Vision</span>
        <nav aria-label="Footer navigation">
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </nav>
        <span>Made for creative work.</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="vision-home" id="top">
      <a href="#main" className="v-skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <div
          id="for-creatives"
          className="v-container v-feature-index"
          aria-label="Explore Vision’s features"
        >
          {features.map(([number, label, href]) => (
            <a key={number} href={href}>
              <span>{number}</span>
              {label}
              <Icon name="diagonal" />
            </a>
          ))}
        </div>
        <Profile />
        <Services />
        <Folders />
        <Discovery />
        <section className="v-final-band" aria-labelledby="final-title">
          <div className="v-container v-final">
            <p className="v-eyebrow">Your next chapter starts here</p>
            <h2 id="final-title">
              Good work deserves
              <br />
              <em>more than a like.</em>
            </h2>
            <p>Show what you do. Find who you need. Make it happen.</p>
            <div className="v-cta-pair">
              <CTA>Join as a Creative</CTA>
              <CTA secondary>Post a Job Listing</CTA>
            </div>
            <PlatformLinks />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
