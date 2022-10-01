import React from 'react';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='socialMedia'>
				<InstagramIcon />
				<TwitterIcon />
				<FacebookIcon />
				<LinkedInIcon />
				<p>&copy; Indian Restaurant <b>Masala</b> from New Delhi</p>
			</div>
		</div>
	);
};

export default Footer;
