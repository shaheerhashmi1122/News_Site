import React from "react";
import "../../../css/User/Content.css";
import Tech from "../../Images/tech-2.jpg";
import Sports from "../../Images/sports.jpg";
import Travel from "../../Images/Traveling-the-travel.jpg";
import Business from "../../Images/business.jpg";
import Dot from "../../Images/dot.png"; // Assuming you have the correct path to the dot image

export default function Content() {
    return (
        <div>
            <div className="blog-hero">
                <div className="container">
                    <div className="sortable-gallery">
                        <div className="gallery-filters"></div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog-grids gallery-container clearfix">
                                    <div className="grid">
                                        <div className="img-holder">
                                            <img
                                                src={Tech}
                                                className="img img-responsive"
                                            />
                                            <div className="blog-content">
                                                <div className="thumb">
                                                    Technology
                                                </div>
                                                <h2>
                                                    <a
                                                        href={route(
                                                            "user.technology"
                                                        )}
                                                    >
                                                        What’s In Trend In
                                                        World's Technology?
                                                    </a>
                                                </h2>
                                                <p>
                                                    You can customize the view
                                                    Blog posts with a simple
                                                    mouse click and immediately
                                                    see the result of your
                                                    changes.
                                                </p>
                                                <ul>
                                                    <li>
                                                        <img
                                                            src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMdaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUxNDhCRUFDQTFGQjExRUJBQTJERUZCMzNFMURDOUI5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUxNDhCRUFCQTFGQjExRUJBQTJERUZCMzNFMURDOUI5IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iRDA5QzZFQkZGREJEQjRGOTM1RTUwNTk3MkZGRUE0NDkiIHN0UmVmOmRvY3VtZW50SUQ9IkQwOUM2RUJGRkRCREI0RjkzNUU1MDU5NzJGRkVBNDQ5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB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"
                                                            alt=""
                                                        />
                                                    </li>
                                                    <li className="auth-name">
                                                        By{" "}
                                                        <a
                                                            href={route(
                                                                "user.technology"
                                                            )}
                                                        >
                                                            Marilou Kelleher
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <img src={Dot} alt="" />
                                                    </li>
                                                    <li
                                                      className="date"
                                                    >
                                                        25 Dec, 2023
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <div className="img-holder ">
                                            <img
                                                src={Sports}
                                                className="img img-responsive"
                                            />
                                            <div className="blog-content blg-2">
                                                <div className="thumb">
                                                    Sports
                                                </div>
                                                <h2>
                                                    <a
                                                        href={route(
                                                            "user.sports"
                                                        )}
                                                    >
                                                       Sports Makes You More
                                                        Interesting
                                                    </a>
                                                </h2>
                                                <p></p>
                                                <ul>
                                                    <li>
                                                        <img
                                                            src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMdaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIzMDZEQzdEQTFGQzExRUJBQUQyODNEN0NBN0Q3NEIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIzMDZEQzdDQTFGQzExRUJBQUQyODNEN0NBN0Q3NEIzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQjlFMzk3NzU5QzE2Qzc4QjBDNzg1MEU2RDhDRDVDQ0MiIHN0UmVmOmRvY3VtZW50SUQ9IkI5RTM5Nzc1OUMxNkM3OEIwQzc4NTBFNkQ4Q0Q1Q0NDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgALQAtAwERAAIRAQMRAf/EAJkAAAIDAQEBAAAAAAAAAAAAAAcJBggKBAULAQADAQEBAAMAAAAAAAAAAAADBAUHBgABAggQAAEEAQIEBQEGBQUAAAAAAAMBAgQFBhEHEhMUCAAhMRUJQfBRYSIWF3GBkSMkocHxMgoRAAEDAgQDBQYHAQAAAAAAAAERAgMABCExEgVBURRhcSITBoGxweEyYvCRodHxUjNE/9oADAMBAAIRAxEAPwDVEIeiIv2/4RfDrnH2UGqAfJR3/wCH/Hf2+M3VuaP9W5tmF87CdrMPfIfDgXOVLWyraTYZBOC0kiDjGP1sVx5bxNUpHOGFnC4nG0E1x08WpFdkB20xbwdRJpJRgxJ+A7TWXqL/AOhX5D8jzyigVVJtWFliTibhmO4C7oVcQ6Ag1xsgubG0s5U+0Uo+nGJ2pEIzRq8SJ4mu3GZjDM9zBGBkn74gDnVVm2xSSC3iY8yO4qqflgp5AVoZ+Nz5T7/uq3Fl7Lb8Yzje0G7MHAYmQRsQl199idtkc0VzLjzLelrssJz5NfKqnhd00ch3BIJ70co3aD++27qy+doGjAZtKgns/ah7rtMm3NDiHqTiHBCBw/mnkiD5p/t5p/Vfr4sj3VAeQRiMa9LkJyvTy+/+S+Pmg0HWs0amnonl9vPXz8AAJypxRlXzuvns3F3dnfJluRg26ua2t9geERMbqNm6CAcL6fGKvM6/GMjZAh1wBujDvLFs9RzCFYkojmIjnozhd4lXet7pGAjzG5chgvzq3Z6GNie8JC4IUzLtSHvwyphfYDjfaHt9lgIGRbH37u4GDGJNw61FaV24QUFWsEltwFjXCY3htpWRyCESbJao4aGQbZDfNq5tuMe5blAGPuQLR2KJoX9FfkUHHlW0bNDtO2zl8Vo43reKiQjJMiRGihSmC58KOvyWd12D124nxzdyVLsnlFDIw2/3OS0dCs4C5HbYSKrphj9pu4AIMgcqou157GnQQwHcxdSMKREqbHa29pI/p3oxgjwKgk4kEA/bxB5ApXOeqnXUzI+oaskjpPE1HNAwCEj7hke0ha0zdhPcrE7u+2nB96Y0C6hrcOn1ko1xj03HknS606NIaAOYIQrMAQmGI0qJzIL5bCtAQjWcS6NZSumt2yOwJzrItwhbb3DoRiBl7auxyE5fDp/L+vhukKCAh6tTVNU+qefmn8fXx4ADKm8qwb/+iftCru2juQwbu3stxZ+dh7hs9nXd/iB6aHBv6K8xieSzAsdYIIdNNwcVUtZVjNJISwRIzkfxfkcsS/tZHF4jc3VI04HPHA5dmXbVrbruJjozM13lxPaVCcCoVebs+ztq+nZ5llTm++Gx24uy2G7f0eKWGGWtBDttw5V3Z1lvZWdX7fcYqSBjkKdLg2oZk9qIGQjQzWs1b+Vy6Y7GycSmC4edbJMGqB3OKkfzX6Utpbe8thNZRxMj8g6nEtCgIXNGotxGBzJIxArh+ZDK6jOn9ofbZe4PTYHmkvdzc39xIVK2NksnGsay11di2LElz6l7GMZEiz2WBVGYbYiEENXIRXInQ+m45ZrmXWGgxqC5VB1OUDvCcsq4T1pdQRQxlp1MeAQ0BPpYhcOKFePFa139vO0mO7G7JbT7P4lZybvG9t8CxrEqe7mNiMk3cSsrQC96MyAEEJhbgyvlOQbeHUyqquXVztYhjEUTYxiGisKmLp5XTOwc4rRz4P7f09E+/wDHVfT7/BKDodlQMjs4tEamq6eifRNNVX+Hj1Fe4twGdK0+TVnajvXsZebTbx7a/v8AJQ39NkUKpo7i1oRYNlELnpGuiZxRPbKDNi1hj8+qiuM6wjPUB2jYRHtaj299y1ZARCEx78k76VN06JysKvpI/aR2UbpYXvHQs2v33kba4bl9isqQAWKCzzEqKwksbP8AfsXjivqV9FHtILWOYwpCOjDIoXaIPRuOb5tk1pePsb2IdW1yNflqjd9L8iuGKhMRzWt72Dc2zWLb/bZj0jo1dGigPb9TMwmKhCDgeSU9DYbtX7P91ZFwO6x2F3L3G0uY2lRlW8ebzjjt82ze9ppRN15E2uo54q+dg2MVUCmq2Q5DJMAti94GuIYByL23ov0+JbKW6lYW2xIbE4go9zSjgMlCuxIXI1wHrre5ReQ2rHjqw0ukY0jwMcmleRwJGWY405CofXNGyvhIEDK4YII4Q2tEyMGOAbYwI426M6ccZG8vg1bwaaeXjqpbaWAeIeHmMvlXEwzNkwJ8S1JOX/b9P9E+34eAUek9Zruhd7jbt5Vt0OykQNv8TsomNnhVxHRXZBeEE5pjW8wLmGlQm2Y3gHF42hVrE4kc5yqlnbLWOQGWQKQfflUu6kcCG/2x/KpHI20xi0p4UAkAD6yIWSdwUYN/UT5LUZImTlYicySq/VdEa1ERqI1EROibpTSRhU4hwKhageO9sGL2WX1WL1Uu6x/by5LcXWaVdFMJXsmAx6FJtQ0tScSpLx6Zk81WQ5UyE4ROg5uiIVBEbN3jZtu3iGNt3GskcgIc0oUJ8TScVaRwwQ4gg1U2ffNy2SWR9lIkckZBa4amqnhcBwcDxxUYFRTEdq9vMJ2rxf8ATW3+I0eM1kpRsdFqIUaDFdGGpXxoK8pnNJCEWWR7UI8pCEe4hHve5zvBX6GRMtogI7SEIxgwDRxQczmTmTSofJNK+5nJkupXK97vqce08hwHCjHS0rhjAY+n+AWKFhEbo53N1csZqu1f04GIuiLqiI1UTTyTwnK9Sg4g0wxiBTwopKyAkZttwt6J9e+WjdV5fOGg2u1/DllQn3eIvlHqPK+5Kf1DydfDStZjahdwm1uVLSDhlzb906xb9LIxwP6/3R3WNVwASSqFbPg4VROJFV/Cnl539t8vpnpngnfwqXdr5saZY/P8d1XkwB2SqkpZAgNEpy9UzqJDwjdw/nSOUkZjit4/RXsYvDpr9fFMIvb2UoESj/t/we/RNE/yusl8Gqu4Vb7HZaoVdNECrfJy+eieen08Ecuk8vmKGeHJfhVj8b5/t9J7hw8zhH5tVFb/ANi8tDJojETTTRUXXXTTxNnTW7TlTkK6WrRDy1b5uAZCuGsilyrppHtDZhVBE906WR0akeIMgnLQvro3zbxenhS28rr2dR/ilMz6+nd5P+q/pXWiP/a9zVdL6P8ATLGjLwM915f6LehjdPx9N7r1HA7l83ldT+Xj4fzeFcOu4eZq9i6/d8OFF/5ft0+36ff8a//Z"
                                                            alt=""
                                                        />
                                                    </li>
                                                    <li className="auth-name">
                                                        By{" "}
                                                        <a
                                                            href={route(
                                                                "user.sports"
                                                            )}
                                                        >
                                                            Konal Biry
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <img src={Dot} alt="" />
                                                    </li>

                                                    <li
                                                      className="date"
                                                    >
                                                        13 Dec,2022
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid s2"
                                        
                                    >
                                        <div className="img-holder">
                                            <img
                                                src={Travel}
                                                className="img img-responsive"
                                            />
                                            <div className="blog-content">
                                                <div className="thumb">
                                                    Travel
                                                </div>
                                                <h2>
                                                    <a
                                                        href={route(
                                                            "user.general"
                                                        )}
                                                    >
                                                       Traveling The World
                                                    </a>
                                                </h2>
                                                <ul>
                                                    <li className="auth-name">
                                                        By{" "}
                                                        <a
                                                            href={route(
                                                                "user.general"
                                                            )}
                                                        >
                                                            Aliza
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <img src={Dot} alt="" />
                                                    </li>

                                                    <li
                                                      className="date"
                                                    >
                                                        22 Dec,2022
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="img-holder">
                                            <img
                                                src={Business}
                                                className="img img-responsive"
                                            />
                                            <div className="blog-content">
                                                <div className="thumb">
                                                    Business
                                                </div>
                                                <h2>
                                                    <a href="/hero-blog-single/What-Makes">
                                                        What Makes a Leader?
                                                    </a>
                                                </h2>
                                                <ul>
                                                    <li className="auth-name">
                                                        By <a>Anny</a>
                                                    </li>
                                                    <li>
                                                        <img src={Dot} alt="" />
                                                    </li>

                                                    <li 
                                                      className="date"
                                                    >
                                                        22 Dec,2022
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
