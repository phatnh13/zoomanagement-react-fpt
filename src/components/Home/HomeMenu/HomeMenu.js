import React from "react";
import { Nav } from "react-bootstrap";

function HomeMenu() {
    return (
        <>
            <div className="page-header__navigation vh-75">
                <Nav>
                    <div className="navigation__top p-pattern-primary">

                    </div>
                    <div className="navigation__wrapper">
                        <div className="navigation__list">
                            <li className="navigation__item js-navigation-item">
                                <div className="navigation__item-head">
                                    <div className="navigation__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.04 85.04"><g id="Menüpunkt:_Service">
                                            <path id="Tagestickets_x5F_V2"
                                             d="M23.73 37.82c.09-.67-.55-1.2-1.19-1l-7.66 2.43c-.09.03-.17.04-.26.04-.39 0-.75-.27-.84-.68-.09-.44.2-.87.63-1.01l20.14-6.39c.51-.16 1.07.18 1.12.76.03.4-.26.76-.64.89l-3.45 1.09c-.93.29-.82 1.64.14 1.79l14.48 2.2c.53.08 1.01-.31 1.06-.85.03-.32.15-.7.42-1.16.05-.09.12-.17.2-.24 1.17-.96 2.73-.37 3.11.89.11.36.1.73.01 1.07-.15.52.22 1.05.75 1.14l10.01 1.52c.14.02.28.01.41-.03l2.11-.65c.49-.15.76-.66.61-1.15l-1.66-5.43c-.16-.52-.73-.78-1.23-.58-.13.05-.26.1-.4.14-3.41 1.04-7.03-1.05-7.74-4.64-.18-.9-.6-6.2 4.62-7.08.52-.09.82-.67.66-1.17l-1.66-5.42c-.15-.49-.66-.76-1.15-.61l-11.17 3.43c.03.07.06.15.09.23.3 1.01-.27 2.08-1.28 2.38-.15.04-.3.07-.45.08-.86.05-1.67-.5-1.93-1.36-.02-.07-.04-.14-.05-.21l-36 11.04c-.49.15-.76.66-.61 1.15l7.42 24.18c.15.49.66.76 1.15.61l7.75-2.38c.34-.11.6-.4.64-.76l1.84-14.26zm24.56-8.75c1.45 1.17.89 3.06-.51 3.48-.15.04-.3.07-.45.08-.86.05-1.67-.5-1.93-1.36-.42-1.4.84-2.9 2.61-2.34.1.02.2.07.28.14zm-4.62-5.84c1.17-1.45 3.06-.88 3.47.52.3 1.01-.27 2.07-1.28 2.38-.15.05-.3.07-.45.08-1.25.07-2.4-1.12-1.89-2.7.03-.1.08-.19.15-.28zM13.02 34.56c-.39 0-.75-.27-.84-.69-.09-.44.21-.87.64-1.01l8.55-2.66c.52-.16 1.07.19 1.11.77.03.4-.26.76-.65.88l-8.56 2.66c-.08.04-.17.05-.25.05zm66.27 9.93l-11.33-1.67c0 .1 0 .2-.02.3-.13.93-.9 1.6-1.8 1.65-.12.01-.24 0-.37-.01-1.05-.15-1.78-1.12-1.63-2.17.02-.11.04-.21.07-.31l-37.54-5.55c-.54-.08-1.05.3-1.13.84l-3.69 24.97c-.08.54.3 1.05.84 1.13l37.69 5.57v-.04c.15-1.05 1.12-1.78 2.17-1.63 1.05.15 1.78 1.12 1.63 2.17 0 .02-.01.04-.02.06l11.14 1.65c.54.08 1.05-.3 1.13-.84l.81-5.49c.08-.57-.34-1.09-.92-1.14-.12-.01-.24-.02-.36-.04-3.33-.49-5.63-3.59-5.14-6.92.49-3.33 3.59-5.63 6.92-5.14l.36.06c.57.12 1.12-.25 1.2-.82l.81-5.49c.09-.55-.28-1.06-.82-1.14zm-48.39-.1l9.52 1.45c.46.07.78.5.71.97-.06.42-.43.72-.84.72-.04 0-.09 0-.13-.01l-9.52-1.45c-.46-.07-.78-.5-.71-.97s.5-.78.97-.71zm19.99 9.82c-.04 0-.09 0-.13-.01l-20.99-3.22c-.46-.07-.78-.51-.71-.97.07-.46.51-.78.97-.71l20.99 3.22c.46.07.78.51.71.97-.06.42-.42.72-.84.72zm14.23 8.86c-.13.93-.9 1.6-1.8 1.65-.12.01-.24 0-.37-.02-1.05-.15-1.78-1.12-1.63-2.17.15-1.05 1.12-1.78 2.17-1.63 1.05.14 1.78 1.12 1.63 2.17zm.94-6.66c-.13.93-.9 1.6-1.8 1.65-.12.01-.25 0-.37-.01-1.05-.15-1.78-1.12-1.63-2.17.15-1.05 1.12-1.78 2.17-1.63 1.05.14 1.78 1.12 1.63 2.16zm.94-6.65c-.13.93-.9 1.6-1.8 1.65-.12.01-.25 0-.37-.02-1.05-.15-1.78-1.12-1.63-2.17.15-1.05 1.12-1.78 2.17-1.63 1.05.15 1.78 1.12 1.63 2.17z">
                                            </path></g>
                                        </svg>
                                    </div>
                                    <div className="js-navigation-root-item navigation__link navigation__link--root has-subpages">
                                        Tickets
                                    </div>
                                </div>
                                <div className="js-subnav navigation__sub">
                                    <ul className="navigation__sub-list">
                                        <li className="navigation__sub-item">
                                            <a tabindex="-1" className="navigation__link navigation__link--sub " title="Day tickets" href="/en/tickets/day-tickets">
                                                <span>Day tickets</span></a></li>
                                        <li class="navigation__sub-item">
                                            <a tabindex="-1" className="navigation__link navigation__link--sub " title="Annual passes" href="/en/tickets/annual-passes">
                                                <span>Annual passes</span>
                                            </a>
                                        </li>
                                        <li class="navigation__sub-item">
                                            <a tabindex="-1" className="navigation__link navigation__link--sub " title="Group tickets" href="/en/tickets/group-tickets">
                                                <span>Group tickets</span>
                                            </a>
                                        </li>
                                        <li class="navigation__sub-item">
                                            <a tabindex="-1" className="navigation__link navigation__link--sub " title="Vouchers" href="https://shop.zoo-berlin.de/en/categories/10">
                                                <span>Vouchers</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <button class="js-navigation-submenu-button navigation__submenu-button"></button
                                ></li>
                        </div>
                    </div>
                </Nav>
            </div>
        </>
    )
}
export default HomeMenu