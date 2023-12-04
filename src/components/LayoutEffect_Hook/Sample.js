import React, { useLayoutEffect, useState } from "react";
const Sample = () => {
    const [value, setValue] = useState("GFG");

    useLayoutEffect(() => {
        console.log("UseLayoutEffect is called with the value of ", value);
        setTimeout(() => {
            console.log('value', value)
            setValue("GeeksForGeeks");
        }, 2000);
    }, [value]);
    // setTimeout(() => {
    //     setValue("GeeksForGeeks");
    // }, 2000);

    return (
        <div
            style={{
                textAlign: "center",
                margin: "auto",
            }}
        >
            <h1 style={{ color: "green" }}>{value}</h1> is
            the greatest portal for geeks!
        </div>
    );
};

export default Sample;