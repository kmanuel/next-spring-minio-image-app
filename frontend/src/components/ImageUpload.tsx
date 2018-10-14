import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Input } from "@material-ui/core";
import { uploadImage } from "../../redux/actions/actions";

class ImageUpload extends Component<any, any> {

    constructor(props) {
        super(props);
        this.onUploadFile = this.onUploadFile.bind(this);
    }


    private onUploadFile(event) {
        this.props.uploadImage(event.target.files[0]);
    }

    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <Input type="file" accept="image/*" capture onChange={this.onUploadFile}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default connect(
    null,
    { uploadImage }
)(ImageUpload);