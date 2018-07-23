import React from "react";
import Input from "./Input";

export default (storiesOf, mod, action) => {
    storiesOf('Input', mod)
        .add('basic', () => (
            <Input placeholder="email" />
        ))
        .add('password', () => (
            <Input placeholder="password" type="password" />
        ))

}
