import React from 'react'

// we'll need InteractiveBrowserCredential here to force a user to sign-in through the browser
import { InteractiveBrowserCredential } from "@azure/identity";
// we're using these objects from the storage sdk - there are others for different needs
import { BlobServiceClient, BlobItem } from "@azure/storage-blob";

import gcxLogo from '../assets/gcx-gce.png'


class Resources extends React.Component {

    constructor() {
        //super(state);
        super(props, state);
        this.state = { blobsWeFound: [], containerUrl: "" }
    }

    // here's our azure identity config
    async componentDidMount() {
        const signInOptions = {
            // the client id is the application id, from your earlier app registration
            clientId: "791d965f-9b93-406e-b26b-937f4067c725",
            // this is your tenant id - the id of your azure ad tenant. available from your app registration overview
            tenantId: "00f76f5a-3d2f-4b6d-ab21-7289659046fd"
        }

        const blobStorageClient = new BlobServiceClient(
            // this is the blob endpoint of your storage acccount. Available from the portal 
            // they follow this format: <accountname>.blob.core.windows.net for Azure global
            // the endpoints may be slightly different from national clouds like US Gov or Azure China
            "https://stscmafiles.blob.core.windows.net/",
            new InteractiveBrowserCredential(signInOptions)
        )

        var containerClient = blobStorageClient.getContainerClient("gcxchange");
        var localBlobList = [];
        // now let's query our container for some blobs!
        for await (const blob of containerClient.listBlobsFlat()) {
            // and plunk them in a local array...
            localBlobList.push(blob);
        }
        // ...that we push into our state
        this.setState({ blobsWeFound: localBlobList, containerUrl: containerClient.url });
    }


    render() {
        return (
            <main className="text-center">
                <div className="content">
                <img className="gcx-logo" src={gcxLogo} alt="gcxchange | gcéchange" />
                <h1 className="pb-3 sr-only">gcxchange resources</h1>
                <ul>
                    <li> resource test link: <img src={this.state.containerUrl + "Black_hole_-_Messier_87.jpg"} /></li>
                </ul>
                </div>
            </main>
        )
    };
}

export default Resources;
