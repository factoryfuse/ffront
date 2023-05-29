import React from "react";
import "./UserView.scss";

interface UserViewProps {
    user_name: string | undefined;
    dep_name: string | undefined;
} 

export default function UserView(props: UserViewProps) {

    return (
        <div className="user-view">
            <h2 className="user-view-name">{props.user_name}</h2>
            <p className="user-view-dep">{props.dep_name}</p>
        </div>
    );
}