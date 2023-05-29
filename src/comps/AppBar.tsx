import React from "react";
import "./AppBar.scss";
import UserView from "./UserView";

interface AppBarProps {
    logo_url: string | undefined,
    appbar_name: string | undefined,
    user_name: string | undefined,
}

export default function AppBar(props: AppBarProps) {
    
    return (
        <div className="appbar">
            <div className="appbar-flex">
                <img className="appbar-logo" src={props.logo_url} alt="comp logo" />
                <h2>{props.appbar_name}</h2>
                <UserView user_name={props.user_name} dep_name="Planlama ve Lojistik Müdürlüğü"/>
            </div>
        </div>
    );
}