import React from "react";
import ResetPassword from "./ResetPassword";

export default (storiesOf, mod, action) => {
    storiesOf('ResetPassword', mod)
        .add('basic', () => (
            <ResetPassword />
        ));
}
