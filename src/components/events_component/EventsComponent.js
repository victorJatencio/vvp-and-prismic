import React from "react";

import "./EventsComponent.scss";

const EventsComponent = props => {
  return (
    <div className="events">
      <div className="gridColumn">
        <div className="item-1">
          <div className="content">
            <h3 className="title">Events</h3>
            <p>
              When we are talking about any kind of a personal event, be it a
              private party, a bachelorette party, birthday or what not, it is
              never a bad idea to bring in experts who will capture the best
              moments of your special event.
            </p>
            <p>
              This is exactly what our creative video and photography craft is
              all about. With a range of skills up our sleeves.
            </p>
          </div>
        </div>
      </div>
      <div className="gridColumn gridItems">
        <div className="item-2">
          <div className="content">
            <h3 className="title">Birthdays</h3>
          </div>
        </div>
        <div className="item-3">
          <div className="content">
            <h3 className="title">Weddings</h3>
          </div>
        </div>
        <div className="item-4">
          <div className="content">
            <h3 className="title">Personal Events</h3>
          </div>
        </div>
        <div className="item-5">
          <div className="content">
            <h3 className="title">Bachelorette</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsComponent;
