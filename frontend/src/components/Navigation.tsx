import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/Inbox';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Link from 'next/link';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 250
    }
};


class ButtonAppBar extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            left: false,
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer = () => {
        this.setState(prevState => { return {left: !prevState.left} });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <List component="nav">
                <Link href="/list">
                    <ListItem
                        button
                        selected={this.state.selectedIndex === 0}
                    >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="List" />
                    </ListItem>
                </Link>
                <Link href="/new">
                    <ListItem
                        button
                        selected={this.state.selectedIndex === 1}
                    >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="New" />
                    </ListItem>
                </Link>
            </List>
        );


        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.toggleDrawer}
                            className={classNames(classes.menuButton)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            News
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.left} onClose={this.toggleDrawer} className={classes.drawer}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer}
                        onKeyDown={this.toggleDrawer}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ButtonAppBar);
