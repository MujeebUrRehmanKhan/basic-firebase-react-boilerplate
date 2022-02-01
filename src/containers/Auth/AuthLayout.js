import { styled } from '@material-ui/core/styles';
import styledComponent from 'styled-components';
import { Toolbar } from '@material-ui/core';
import { themeLight } from '../../theme';

const theme = themeLight;

export const Logo = styledComponent.img`
   width:85%;
   height: auto;
   margin: 5;
`;

export const ContainerComponent = styledComponent.div`
  display:"flex";
`;

export const ToolbarComponent = styled(Toolbar)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 2),
  ...theme.mixins.toolbar,
});

export const MainContainerComponent = styledComponent.div`
  flexGrow: 1,
  padding: ${theme.spacing(1)},
`;
