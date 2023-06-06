import React from "react";
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCalendar2Line,
} from "react-icons/ri";
import moment from "moment";
//import reservation.css
import "./Reservations.css";
import { RxCross2 } from "react-icons/rx";

const localizer = momentLocalizer(moment);

const CustomToolbar = (toolbar) => {

  const goToBack = () => {
    toolbar.onNavigate("PREV");
  };

  const goToNext = () => {
    toolbar.onNavigate("NEXT");
  };

  const goToToday = () => {
    toolbar.onNavigate("TODAY");
  };

  const label = () => {
    const date = toolbar.date;
  };
  const agenda = () => {
    toolbar.onView("agenda");
  };
  const month = () => {
    toolbar.onView("month");
  };

  const week = () => {
    toolbar.onView("work_week");
  };

  const day = () => {
    toolbar.onView("day");
  };
 

  return (
     <div className="rbc-toolbar">
      <div className="rbc-btn-group">
        <button className="rbc-btn rbc-prev-btn" onClick={goToBack}>
          <RiArrowLeftSLine />
        </button>
        <button className="rbc-btn rbc-today-btn" onClick={goToToday}>
          <RiCalendar2Line />
        </button>
        <button className="rbc-btn rbc-next-btn" onClick={goToNext}>
          <RiArrowRightSLine />
        </button>
      </div>
      <div className="rbc-toolbar-label text-orange-600 font-bold">{toolbar.label}</div>
      <div className="rbc-btn-group ">
        <div className="text-white">
        <button className="rbc-btn rbc-agenda-btn   " onClick={agenda}>
          Agenda
        </button>
        <button className="rbc-btn rbc-month-btn" onClick={month}>
          Month
        </button>
        <button className="rbc-btn rbc-day-btn" onClick={day}>
          Day
        </button>
        <button className="rbc-btn rbc-week-btn" onClick={week}>
          Week
        </button>
        </div>
      </div>
    </div>
  );
};

const eventStyleGetter = (event, start, end, isSelected) => {
  const backgroundColor = "teal";
  const style = {
    backgroundColor,
    borderRadius: "10px",
    opacity: 0.8,
    color: "white",
    border: "none",
    display: "block",
  };
  return {
    
    style,

  };
};

const ProfileHandler = ({ onCancel }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-3 w-150">
        <div className="flex justify-end">
          <RxCross2
            onClick={onCancel}
            className="text-3xl  absoulte  text-red-400  hover:text-pink-600"
          />
        </div>
        <div className="px-6">
          {/* <Profile /> */}
          suiii
        </div>
      </div>
    </div>
  );
};

const Reservations = () => {
  const [showProfile, setShowProfile] = useState(false);

  const showProfileHandler = () => {
    setShowProfile(true);
  };

  const hideProfileHandler = () => {
    setShowProfile(false);
  };

  const events = [
    {
      title: "Room 1",
      start: new Date(2023, 5, 7, 10, 0),
      end: new Date(2023, 5, 9, 12, 0),
    },
    {
      title: "Event 2",
      start: new Date(2023, 5, 8, 14, 0),
      end: new Date(2023, 5, 8, 16, 0),
    },
    // Add more events as needed
  ];

  const handleSelectSlot = (event) => {
    console.log(event.start);
  };

  return (
    <div>
      <h1 className="mb-3 text-2xl text-orange-600 font-bold">Reservations</h1>
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "90vh" }}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={handleSelectSlot}
        onSelectSlot={showProfileHandler}
        components={{
          toolbar: CustomToolbar,
          
        }}
      />
      {showProfile && <ProfileHandler onCancel={hideProfileHandler} />}
    </div>
  );
};

export default Reservations;
