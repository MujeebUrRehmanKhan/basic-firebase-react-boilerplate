import React, { useEffect, useState } from 'react';
import AppAnimate from '../../../components/AppAnimate';
import { $get, $put, $delete } from '../../../services/FirestoreService'
import { isEmpty } from 'lodash'
import TablePost from '../../../components/Tables/TablePost';
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.common.black,
		fontSize: 18
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));
function createData(id, subject, body) {
	return { id, subject, body };
}

const rows = [
	createData(1, 'Frozen yoghurt', 'This is body'),
	createData(2, 'Frozen yoghurt', 'This is body'),
	createData(3, 'Frozen yoghurt', 'This is body'),
	createData(4, 'Frozen yoghurt', 'This is body'),
	createData(5, 'Frozen yoghurt', 'This is body'),
	createData(6, 'Frozen yoghurt', 'This is body'),

];
const StyledButton = withStyles((theme) => ({
	root: {
		padding: '10px 60px',
		borderRadius: '30px',
	},
}))(Button);

const Post = (props) => {


	return (
		<AppAnimate animation='transition.slideUpIn' delay={200} >
			<>
				<div style={{ margin: '20px 0px' }}>
					<StyledButton color='primary' variant='contained' disabled={false} onClick={() => props.history.push('/new-post')}>
						New Post
				</StyledButton>
					<StyledButton style={{ marginLeft: '10px' }} color='primary' variant='contained' disabled={false} onClick={() => props.history.push('/new-channel')}>
						New Channel
				</StyledButton>
				</div>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>Post Subject</StyledTableCell>
								<StyledTableCell align="left">Post Body</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<StyledTableRow style={{ cursor: 'pointer' }} key={row.id} onClick={() => props.history.push(`/post-detail/${row.id}`)}>
									<StyledTableCell component="th" scope="row">
										{row.subject}
									</StyledTableCell>
									<StyledTableCell align="left">{row.body}</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</>
		</AppAnimate >
	)
}

export default React.memo(Post)