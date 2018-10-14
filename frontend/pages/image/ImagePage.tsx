import * as React from 'react';
import { withRouter } from 'next/router';
import Layout from "../../src/components/Layout";
import { connect } from "react-redux";
import { fetchImageData } from "../../redux/actions";
import moment from 'moment';
import { withStyles } from "@material-ui/core";

class Image extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.fetchImageData(this.props.router.query.key)
    }


    render() {
        const imageData = this.props.imageData;
        return (
            <Layout>
                <h1>{imageData.name || imageData.key}</h1>
                <p>
                    Uploaded: {imageData.uploaded && moment(imageData.uploaded).format('LL')}
                </p>
                {
                    imageData.url &&
                    <img src={imageData.url} alt={imageData.name} style={{width: '100%'}}/>
                }
            </Layout>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let key = ownProps.router.query.key;
    let imageData = state.imagedata.filter(i => i.key === key)[0] || { key };
    return {
        imageData
    }
};

const styles = {

};

export default withStyles(styles)(withRouter(connect(mapStateToProps, { fetchImageData })(Image)));