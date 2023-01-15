import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import '../scss/components/_fullPost.scss';

const FullPost = (props) => {
	return (
		<div className={`post-piece`}>
			<div className='content'>
				<p className='post-type'>{props.type}</p>
				<h1 className='post-title'>{props.title}</h1>
				<p className='post-summary'>{props.summary}</p>

				{/* <a
					href={`post/${props.url}`}
					className='btn'
					aria-label='View Post Button'
				>
					View post <BsArrowRight />
				</a> */}
			</div>
			<div className='post-img'>
				<img src={props.src} alt={props.alt} />
			</div>
		</div>
	);
};

export default FullPost;
