import React, { useEffect, useState } from 'react';
import AppAnimate from '../../../components/AppAnimate';
import { $get, $put, $delete } from '../../../services/FirestoreService'
import { isEmpty } from 'lodash'
import TablePost from '../../../components/Tables/TablePost';
import { Button, TextField } from '@material-ui/core';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
const StyledButton = withStyles((theme) => ({
	root: {
		padding: '10px 60px',
		borderRadius: '30px',
	},
}))(Button);

const PostDetail = () => {
	const [postMessage, setPostMessage] = useState("")
	return (
		<AppAnimate animation='transition.slideUpIn' delay={200} >
			<>
				<div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
					My Post


					<div style={{ margin: '50px' }}>
						<div>Sam : post body is here</div>
						<div>Mike : Response to post</div>
					</div>
					<TextField
						label="Your Message"
						variant="outlined"
						onChange={(event) => setPostMessage(event.target.value)}
						id="your-message"
						multiline
						maxRows={4}
						name="your-message"
						type="text"
						value={postMessage}
						style={{ marginTop: '20px', width: '500px' }}
					/>
					<StyledButton style={{ margin: '20px' }} color='primary' variant='contained' disabled={false} >
						Reply
				</StyledButton>
				</div>
			</>
		</AppAnimate >
	)
}

export default React.memo(PostDetail)