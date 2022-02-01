import React from 'react';
import clsx from 'clsx';
//MUI Components
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ChevronLeft } from '@material-ui/icons';

//Styled-components
import { ThemeProvider, styled } from '@material-ui/core/styles';
import { themeLight } from '../../theme';
import {
	ContainerComponent,
	ToolbarComponent,
	MainContainerComponent,
} from './AuthLayout';
import { useStyles } from './style.js';
//Tools & utilities
import { AppBar } from '@material-ui/core';
import {
	TheContent,
} from '../index'
import user from '../../assets/user.png'
import restaurant from '../../assets/restaurant.png'
import HeaderMenu from '../../components/HeaderMenu'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import confActions from "../../actions/Conf"




const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

export default function Auth() {
	const dispatch = useDispatch()
	const history = useHistory();
	const classes = useStyles();
	const sidebarOpen =
		localStorage.getItem('sidebarOpen') === 'open' ? true : false;
	const [open, setOpen] = React.useState(sidebarOpen);
	let state = localStorage.getItem('state')

	const handleDrawerOpen = () => {
		localStorage.setItem('sidebarOpen', 'open');
		dispatch(confActions.setSideBarStatusOpen(true))
		setOpen(true);
	};

	const handleDrawerClose = () => {
		localStorage.setItem('sidebarOpen', 'close');
		dispatch(confActions.setSideBarStatusClose(false))
		setOpen(false);
	};
	return (
		<ThemeProvider theme={themeLight}>
			<ContainerComponent className={classes.root}>
				<CssBaseline />
				<AppBar
					position='fixed'
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}>
					<ToolbarComponent theme={themeLight} className={classes.displaySpaceBetween}>
						<div>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={open ? handleDrawerClose : handleDrawerOpen}
								edge="start"
								className={clsx(classes.menuButton)}
							>
								<MenuIcon />
							</IconButton>
						</div>
						<div>
							<HeaderMenu />
						</div>
					</ToolbarComponent>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<DrawerHeader>
						<IconButton onClick={handleDrawerClose}>
							<ChevronLeft color={'primary'} />
						</IconButton>
					</DrawerHeader>

					<div>

						<div className={`${classes.userSection}`}>
							<img src={user} height={60} alt={'user img'} />
							<span className={`${classes.userNameHeading}`}>{JSON.parse(state)?.user?.name}</span>
						</div>
						<List>
							<ListItem
								button
								onClick={() => history.push(`/post`)}
								style={{ marginTop: '5px', paddingLeft: '5px', backgroundColor: '#c1c9d2a8', borderLeft: '5px solid #455a64' }}>
								<img style={{ margin: '0px 15px' }} src={restaurant} height={30} alt={'restaurant img'} />
								<ListItemText style={{ marginTop: '10px' }} primary={'Post'} />
							</ListItem>


						</List>
					</div>
				</Drawer>

				<MainContainerComponent className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}>
					{/* Main content  */}
					<TheContent />
				</MainContainerComponent>
			</ContainerComponent>
		</ThemeProvider>
	);
}
