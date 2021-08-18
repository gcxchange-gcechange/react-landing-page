import React from 'react'

import gcxLogo from '../assets/gcx-gce.png'

const ToolkitEn = () => (
    <main className="text-center">
        <div className="content">
        <img className="gcx-logo" src={gcxLogo} alt="gcxchange | gcéchange" />
        <h1 className="pb-3 sr-only">gcxchange resources</h1>
        <ul>
            <li><a href="https://stscmafiles.blob.core.windows.net/gcxchange/PhysRevLett.116.061102.pdf?sp=r&st=2021-08-17T18:05:31Z&se=2021-09-21T02:05:31Z&spr=https&sv=2020-08-04&sr=c&sig=OUqyWxXGbzPov7WVGwhEiSwrnZvilc9PMrv9NqyUdew%3D">PDF test link</a></li>
            <li><a href="https://stscmafiles.blob.core.windows.net/gcxchange/Black_hole_-_Messier_87.jpg?sp=r&st=2021-08-17T18:05:31Z&se=2021-09-21T02:05:31Z&spr=https&sv=2020-08-04&sr=c&sig=OUqyWxXGbzPov7WVGwhEiSwrnZvilc9PMrv9NqyUdew%3D">resource test link</a></li>
            <li> resource test image: <img src={"https://stscmafiles.blob.core.windows.net/gcxchange/Black_hole_-_Messier_87.jpg?sp=r&st=2021-08-17T18:05:31Z&se=2021-09-21T02:05:31Z&spr=https&sv=2020-08-04&sr=c&sig=OUqyWxXGbzPov7WVGwhEiSwrnZvilc9PMrv9NqyUdew%3D"} title="test image" alt="test image"/></li>
        </ul>
        </div>
    </main>
)

export default ToolkitEn;
