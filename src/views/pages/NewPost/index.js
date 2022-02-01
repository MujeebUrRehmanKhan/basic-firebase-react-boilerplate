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

const NewPost = () => {
	const [postSubject, setPostSubject] = useState("")
	const [postBody, setPostBody] = useState("")


	return (
		<AppAnimate animation='transition.slideUpIn' delay={200} >
			<>

				<div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
					New Post
					<TextField
						label="Post Subject"
						variant="outlined"
						onChange={(event) => setPostSubject(event.target.value)}
						id="post-subject"
						name="post-subject"
						type="text"
						value={postSubject}
						style={{ marginTop: '20px', width: '500px' }}
					/>
					<TextField
						label="Post Body"
						variant="outlined"
						onChange={(event) => setPostBody(event.target.value)}
						id="post-body"
						multiline
						maxRows={4}
						name="post-body"
						type="text"
						value={postBody}
						style={{ marginTop: '20px', width: '500px' }}

					/>
					<StyledButton style={{ margin: '20px' }} color='primary' variant='contained' disabled={false} >
						Post
				</StyledButton>
				</div>
			</>
		</AppAnimate >
	)
}

export default React.memo(NewPost)