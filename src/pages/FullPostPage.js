//components
import React from 'react';
import Navbar from '../components/Navbar';
import FullPost from '../components/FullPost';

//styling
import '../scss/pages/_fullPostPage.scss';

//imgs
import Placeholder from '../components/assets/imgs/placeholder.jpg';

function FullPostPage() {
	return (
		<div>
			<Navbar />
			<FullPost
				url='URL for the post'
				type='Post type goes here'
				title='Title of the post goes here'
				summary='A quick summary of the post, or a longer one if you want. You dont need to go to a new page to read more.'
				src={Placeholder}
				alt='Alt for the image'
			/>
			<FullPost
				url='URL for the post'
				type='Post type goes here'
				title='Title of the post goes here'
				summary='A quick summary of the post, or a longer one if you want. You dont need to go to a new page to read more.'
				src={Placeholder}
				alt='Alt for the image'
			/>
			<FullPost
				url='URL for the post'
				type='Post type goes here'
				title='Title of the post goes here'
				summary='A quick summary of the post, or a longer one if you want. You dont need to go to a new page to read more.'
				src={Placeholder}
				alt='Alt for the image'
			/>
		</div>
	);
}

export default FullPostPage;
