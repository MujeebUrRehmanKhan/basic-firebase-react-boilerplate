import { makeStyles } from '@material-ui/core/styles';

//Styles MUI

export const useStyles = makeStyles((theme) => ({
	root: {
		width: '100hv'
	},
	inlineDisplay: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	justifyEvenly: {
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	flexColumn: {
		flexDirection: 'column'
	},
	fullHeight: {
		minHeight: '100vh'
	},
	loginCard: {
		padding: '30px',
		backgroundColor: '#f5f6f7',
		width: '35%'
	},
	fullWidth: {
		width: '100%'
	},
	mt20: {
		marginTop: '20px'
	},
	spaceBetween: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	pictureSection: {
		width: '45%',
	},
	formSection: {
		width: '55%',
		flexDirection: 'column'
	},
	loginForm: {
		width: '60%',
		marginLeft: '20%'
	},
	mb0: {
		marginBottom: '0px'
	}
}));
