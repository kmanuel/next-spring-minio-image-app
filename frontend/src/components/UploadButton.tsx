import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from "@material-ui/core/IconButton/IconButton";
import CameraIcon from '@material-ui/icons/Camera';

import Link from 'next/link';

type Props = any;
type State = any;

class UploadButton extends Component<Props, State> {
    render() {
        return (
            <Link href="/new">
                <IconButton>
                    <CameraIcon/>
                </IconButton>
            </Link>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(UploadButton);