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

const NewChannel = () => {
	const [channel, setChannel] = useState("")


	return (
		<AppAnimate animation='transition.slideUpIn' delay={200} >
			<>
				<div>
					<TextField
						label="Channel Name"
						variant="outlined"
						onChange={(event) => setChannel(event.target.value)}
						id="new-channel"
						name="new-channel"
						type="text"
						autoComplete="current-password"
						value={channel}
					/>
					<StyledButton style={{ marginLeft: '10px' }} color='primary' variant='contained' disabled={false} >
						Add Channel
				</StyledButton>
				</div>
			</>
		</AppAnimate >
	)
}

export default React.memo(NewChannel)