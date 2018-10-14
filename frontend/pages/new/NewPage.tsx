import * as React from "react";
import Layout from '../../src/components/Layout';
import ImageUpload from "../../src/components/ImageUpload";

type Props = {recordings: any[], uploadImage: any}

class New extends React.Component<Props, {}> {
    render() {
        return (
            <Layout>
                <ImageUpload />
            </Layout>
        );
    }

}

export default New;