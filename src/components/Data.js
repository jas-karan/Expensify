import React from 'react'
import Main from "./Main";
import "./Data.css"
import Welcome from "./Welcome.js";

import { PushToTalkButton, PushToTalkButtonContainer } from "@speechly/react-ui";

function Data() {
    return (
        <div className="data">
            <Welcome where="data" />
            <Main />
            <PushToTalkButtonContainer>
                <PushToTalkButton />
            </PushToTalkButtonContainer>

        </div>
    )
}

export default Data
