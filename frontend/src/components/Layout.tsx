import * as React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    heroContent: {
        [theme.breakpoints.up('md')]: {
            maxWidth: 600,
        },
        margin: '0 auto',
    },
});

class Layout extends React.Component<any, any> {
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>

                <div style={{ height: '100vh'}}>
                    <Navigation/>

                    <main>
                        <div className={classes.heroContent}>{this.props.children}</div>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Layout);