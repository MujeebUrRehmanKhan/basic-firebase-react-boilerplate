import { makeStyles } from '@material-ui/core/styles';

//Styles MUI
const drawerWidth = 280;

export const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#32697e',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: 'linear-gradient(93deg, #385f8933, #fffefe0f)',
    border: '0px'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    backgroundImage: 'linear-gradient(160deg, #385f8933, #ee6d0d0f)',
    minHeight: window.innerHeight,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    overflowX: 'hidden'

  },
  headerHeight: {
    minHeight: '64px',
    backgroundColor: '#32697e'
  },
  headerTopMargin: {
    marginTop: '15px'
  },
  searchBar: {
    height: '35px!important',
    marginTop: '10px',
    border: '1px solid #e2e3f1',
    borderRadius: '20px',

  },
  searchbarWidthDefault: {
    width: '210px',
    backgroundColor: '#fff'
  },
  searchbarWithFocus: {
    width: '400px',
    backgroundColor: '#fff'
  },
  endpointSearchResultSection: {
    position: 'absolute',
    zIndex: 9,
    top: '85%',
    width: '400px'
  },
  withClose: {
    left: '66.8%',
  },
  withOpen: {
    left: '58.8%',
  },
  withAdminClose: {
    left: '62.8%',
  },
  withAdminOpen: {
    left: '53.8%',
  },
  endpointResultItem: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: '15px',
    marginTop: '2px',
    cursor: 'pointer',
    border: '1px solid #1e25447a',
    boxShadow: 'rgb(238 109 13 / 19%) 15px 15px 30px 2px'
  },
  inlineDisplay: {
    display: 'flex'
  },
  iconMargin: {
    margin: '10px'
  },
  iconControl: {
    margin: '10px',
    cursor: 'pointer'
  },
  ModalIconSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '35px 0 15px 0'
  },
  ModalIcon: {
    fontSize: '70px',
    color: '#ee6d0d'
  },
  ChangePasswordSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0 10px 0'
  },
  fieldMargin: {
    marginBottom: '15px',
    width: '100%'
  },
  PasswordActionButtonSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '25px'
  },
  buttonMargin: {
    marginLeft: '10px'
  },
  inlineDisplayCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIconSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    margin: '3px 5px 0 15px',
    cursor: 'pointer',

  },
  passwordModalContent: {
    margin: '0 45px'
  },
  userSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    flexDirection: 'column',
    marginBottom: '30px'
  },
  userNameHeading: {
    fontSize: '20px',
    fontWeight: '600',
    marginTop: '15px'
  },
  displaySpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));
