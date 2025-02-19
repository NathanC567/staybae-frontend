import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 px-32 py-14 bg-gray-100 text-gray-600 mt-32">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">StayBae</h5>
        <p>How StayBae works</p>
        <p>News</p>
        <p>Investors</p>
        <p>StayBae Membership</p>
        <div>
            <Link to="/about">About Us</Link>
        </div>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Support</h5>
        <p>Help Centre</p>
        <p>StayBae Cover</p>
        <p>Supporting people with disabilities</p>
        <p>Cancellation options</p>
        <p>Our COVID-19 response</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>How StayBae is helping the community</p>
        <p>Combating living crisis</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Hosting</h5>
        <p>StayBae your home</p>
        <p>StayBae cover for hosts</p>
        <p>Explore hosting resources</p>
        <p>Tips to be a host</p>
      </div>
    </div>
  );
};
export default Footer;
