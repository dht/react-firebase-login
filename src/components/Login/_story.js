import React from "react";
import Login from "./Login";

export default (storiesOf, mod, action) => {
    storiesOf('Login', mod)
        .add('basic', () => (
            <Login />
        ));

}
