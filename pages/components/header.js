import Head from "next/head";
import "../styles/style.css";

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Dhukutee.com</title>
      <link rel="stylesheet" href="/_next/static/style.css" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.12/css/all.css"
        integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9"
        crossOrigin="anonymous"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Nunito"
        rel="stylesheet"
      />
      <script src="../scripts/script.js" />
    </Head>
    <header>
      <i className="menu material-icons">menu</i>
      <h1 className="logo">
        <a href="/">DHUKUTEE</a>
      </h1>
    </header>

    <nav>
      <ul>
        <li>
          <i className="material-icons">monetization_on</i>
          <span>LOANS</span>
          <ul>
            <li>Personal Loan</li>
            <li>Home Loan</li>
            <li>Car Loan</li>
            <li>Two Wheeler Loan</li>
            <li>Used Car Loan</li>
            <li>Education Loan</li>
          </ul>
        </li>
        <li>
          <i className="material-icons">credit_card</i>
          <span>CARDS</span>
          <ul>
            <li>Credit Cards</li>
            <li>Debit Cards</li>
          </ul>
        </li>
        <li>
          <i className="fas fa-umbrella fa-fw" />
          INSURANCE
          <ul>
            <li>Life Insurance</li>
            <li>Car Insurance</li>
            <li>Health Insurance</li>
            <li>Two Wheeler Insurance</li>
            <li>Travel Insurance</li>
            <li>Home Insurance</li>
          </ul>
        </li>
        <li>
          <i className="material-icons">show_chart</i>
          INVESTMENTS
          <ul>
            <li>Mutual Funds</li>
            <li>Fixed Deposit</li>
            <li>Savings Account</li>
            <li>Gold Rate</li>
            <li>Silver Rate</li>
            <li>Best RD Interest Rates</li>
            <li>Saving Schemes</li>
          </ul>
        </li>
        <li>
          <i className="material-icons">settings_applications</i>
          FINANCE TOOLS
          <ul>
            <li>EMI Calculator</li>
            <li>FD Calculator</li>
            <li>Finance Calculator</li>
          </ul>
        </li>
        <li>
          <i className="material-icons">slow_motion_video</i>
          Credit Score FREE
        </li>
        <li>
          <i className="material-icons">insert_drive_file</i>
          UTILITY DOCUMENTS
          <ul>
            <li>
              <a href="pan-card">Pan Card</a>
            </li>
            <li>Voter ID</li>
            <li>Driving Licence</li>
            <li>Passport</li>
          </ul>
        </li>
        <li>
          <i className="fas fa-mobile-alt fa-fw" />
          DOWNLOAD MOBILE APP
        </li>
        <li>
          <i className="material-icons">add_circle</i>
          MORE
          <ul>
            <li>Blog</li>
            <li>Forum</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </li>
      </ul>
    </nav>

    <div className="menu-overlay" />
  </div>
);
