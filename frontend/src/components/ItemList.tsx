import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import { connect } from "react-redux";
import { fetchImages } from "../../redux/actions";
import Link from 'next/link';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

type Props = {
    images: StorageData[],
    fetchImages: any,
    classes: any,
}

class ItemList extends Component<Props, any> {

    componentDidMount() {
        const { fetchImages } = this.props;
        fetchImages();
    }


    render() {
        const { classes, images } = this.props;
        return (
            <div className={classes.root}>
                <List>
                    {images.map(ItemList.toListItem)}
                </List>
            </div>
        );
    }

    static toListItem(item: StorageData) {
        return (
            <Link href={`/image?key=${item.id}`} as={`/image/${item.id}`}>
                <a href={`/image/${item.id}`}>
                    <ListItem key={item.name}>
                        <Avatar>
                            <ImageIcon/>
                        </Avatar>
                        <ListItemText primary={item.name}/>
                    </ListItem>
                </a>
            </Link>
        );
    }
}


const mapStateToProps = ({ images }) => {
    return { images }
};

export default withStyles(styles)(connect(mapStateToProps, { fetchImages })(ItemList));
