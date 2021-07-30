import React, { useEffect, useState } from "react";

const UserProfile = (props) => {

    const [user, setUser] = useState({
        profile: {},
        error: ""
    });

    useEffect(() => {
        props.auth.getProfile((profile, error) =>
            setUser({ profile, error })
        );
    }, [props.auth]);

    return (
        <>
            <h1>User Profile</h1>
            <img
                style={{ maxWidth: 50, maxHeight: 50 }}
                src={user[`profile`][`picture`]}
                alt="profile pic"
            />
            <pre>{JSON.stringify(user.profile, null, 2)}</pre>
        </>
    );
}
export default UserProfile;