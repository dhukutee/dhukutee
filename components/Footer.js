export default () => (
  <footer className="footer-wrapper">
    <div className="footer-menu">
      <ul>
        Home Loan
        <li>NIBL Home Loan</li>
        <li>Nepal SBI Home Loan</li>
        <li>Himalayan Bank Home Loan</li>
        <li>Nepal Bank Home Loan</li>
      </ul>
      <ul>
        Personal Loan
        <li>Standard Chartered Personal Loan</li>
        <li>Mega Bank Personal Loan</li>
        <li>NIC Asia Personal Loan</li>
        <li>Nepal SBI Personal Loan</li>
      </ul>
      <ul>
        Car Loan
        <li>NIBL Vehicle Loan</li>
        <li>Mega Auto Loan</li>
        <li>NMB Auto Loan</li>
        <li>Standard Chartered Auto Loans</li>
      </ul>
      <ul>
        Credit Card
        <li>NIBL Credit Card</li>
        <li>NMB Credit Card</li>
        <li>Standard Chartered Credit Card</li>
        <li>Himalayan Credit Card</li>
      </ul>
      <ul>
        Fixed Deposit
        <li>Nepal SBI Fixed Deposit</li>
        <li>Standard Chartered Fixed Deposit</li>
        <li>Sanima Fixed Deposit</li>
        <li>Prabhu Bank Fixed Deposit</li>
      </ul>
      <ul>
        Insurance
        <li>Life Insurance</li>
        <li>Car Insurance</li>
        <li>Health Insurance</li>
        <li>Two Wheeler Insurance</li>
      </ul>
    </div>

    <ul className="about-contact">
      <li>About</li> <li>Careers</li> <li>Contact Us</li>{" "}
      <li>
        {" "}
        <a href={"/admin"}>Admin Panel</a>
      </li>{" "}
      <li>Terms</li> <li>Notice to Customer</li>
    </ul>

    <div className="copyright">
      Copyright © 2018 Dhukutee.com Privacy Policy
    </div>
  </footer>
);
