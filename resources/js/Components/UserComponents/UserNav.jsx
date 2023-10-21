import React from "react";
import "../../../css/User/UserNav.css";
import Dropdown from "../AdminComponents/Dropdown";

export default function UserNav(user) {
    return (

<>
<div className="topbar">

        <div className="container">


            <div className="row">
                <div className="col-lg-7 col-md-9 col-sm-12 col-12">
                    <div className="contact-intro p-2">
                        <ul>
                            <li className="update">
                                <span>New Update</span>
                            </li>
                            <li className="news-line text-light">
                                Betting against meme stocks could get you
                                seriously burned
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-5 col-md-3 col-sm-12 col-12 text-right py-2 drop-down">
                   
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="rounded-md">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >
                                  User {user.name}
                                    <svg
                                        className="ml-2 -mr-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </span>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Link href={route("profile.edit")}>
                                Profile
                            </Dropdown.Link>
                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </div>
        </div>

</div>
</>
    );
}
