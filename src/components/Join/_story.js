import React from "react";
import Join from "./Join";

export default (storiesOf, mod, action) => {
    storiesOf('Join', mod)
        .add('basic', () => (
            <Join />
        ));

}
