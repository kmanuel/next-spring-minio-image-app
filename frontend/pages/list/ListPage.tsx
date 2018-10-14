import * as React from "react";
import Layout from '../../src/components/Layout';
import ItemList from "../../src/components/ItemList";

type Props = {images: any, fetchImages: any}

class List extends React.Component<Props, {}> {
    render() {
        return (
            <Layout>
                <ItemList/>
            </Layout>
        );
    }

}

export default List;