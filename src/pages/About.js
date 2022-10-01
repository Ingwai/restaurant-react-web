import React from 'react';
import './About.css';
import AboutImage from '../assets/masala.jpg';

const About = () => {
	return (
		<div className='about'>
			<div className='aboutTop' style={{ backgroundImage: `url(${AboutImage})` }}></div>
			<div className='aboutBottom'>
				<h1>About Us</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ut magnam porro. Mollitia autem beatae
					consequuntur exercitationem quaerat suscipit pariatur praesentium eos molestias voluptas, distinctio illo
					magni eius ullam molestiae! Veritatis atque quam expedita deserunt odio quos harum explicabo exercitationem
					dolore? Suscipit deleniti delectus praesentium est quidem. Ducimus, nulla quaerat expedita animi temporibus
					quae blanditiis cupiditate. Expedita debitis ipsa a! Laborum asperiores, quos tenetur exercitationem quasi sit
					quaerat ab voluptatem quisquam quis accusantium enim! Esse vero voluptatem commodi amet tenetur iste beatae
					impedit. Quas, assumenda fugit sint soluta nisi veritatis! Ad, aspernatur rem harum mollitia quos iure
					veritatis voluptatem iusto soluta nemo consequuntur animi cupiditate! Commodi dignissimos eveniet voluptas
					sint modi cupiditate, vitae distinctio unde voluptates, tenetur, corporis enim ducimus. Praesentium,
					reiciendis obcaecati, excepturi iste error animi voluptatem harum laborum voluptatibus nam et! At, provident
					iusto nostrum, quae saepe ratione doloremque omnis assumenda magnam pariatur laudantium veniam, sunt neque in.
				</p>
			</div>
		</div>
	);
};

export default About;
