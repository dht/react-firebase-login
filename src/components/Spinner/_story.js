import React from "react";
import Spinner from "./Spinner";

export default (storiesOf, mod, action) => {
    storiesOf('Spinner', mod)
        .add('basic', () => (
            <Spinner />
        ));
}
