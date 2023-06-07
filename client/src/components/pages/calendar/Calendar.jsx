import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
import { RxCrossCircled } from "react-icons/rx";
import Select from "react-select";

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
      <div className="rbc-toolbar-label text-orange-600 font-bold">
        {toolbar.label}
      </div>
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

const EventHandler = ({ onCancel }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = { ...data };
    console.log(payload);
    try {
      // const response = await login(payload);
      console.log(payload);
      //   if (response.error.originalStatus === 200) {
      //     toast.success("OTP Verified");
      //     setTimeout(() => {
      //       navigate("/resetPassword");
      //     }, 1000);
      // }
      //   else{
      //     toast.error("Invalid OTP");
      //   }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed flex flex-col top-0 left-0 w-screen h-screen bg-black bg-opacity-25  justify-center items-center z-50 ">
      <div className="bg-white rounded-md md:w-150 w-30 ">
        <div className=" flex flex-row px-4 py-5 bg-slate-100 rounded-t-md rounded-r-md z-10">
          <div className="flex-grow-1 text-slate-600 text-xl">
            Add Reservation
          </div>
          <div className="ml-auto">
            <RxCrossCircled
              onClick={onCancel}
              className="text-2xl text-slate-600  hover:text-slate-700"
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  justify-center items-center  p-5 mx-auto"
        >
          <div className="flex flex-col w-full">
            <div className="relative">
              <div className="flex md:flex-row  flex-col gap-2">
                <div className="md:w-1/2 w-full">
                  <input
                    id="guest"
                    type="text"
                    name="guest"
                    placeholder="Guest Name"
                    className={`w-full border rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                      errors.guest ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("guest", {
                      required: "*Guest Name is required",
                    })}
                  />
                  {errors.guest && (
                    <span className="text-red-500 text-sm">
                      {errors.guest.message}
                    </span>
                  )}
                </div>
                <div className="md:w-1/2 w-full">
                  <input
                    id="guestEmail"
                    type="email"
                    name="guestEmail"
                    placeholder="Guest Email"
                    className={`w-full border rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                      errors.guestEmail ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("guestEmail", {
                      required: "*Guest Email is required",
                    })}
                  />
                  {errors.guestEmail && (
                    <span className="text-red-500 text-sm">
                      {errors.guestEmail.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex md:flex-row  flex-col gap-2">
                <div className="md:w-1/2 w-full">
                  <input
                    id="checkIn"
                    type="text"
                    name="checkIn"
                    placeholder="Check-In Date"
                    className={`w-full border rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                      errors.checkIn ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("checkIn", {
                      required: "*CheckIn Date is required",
                    })}
                  />
                  {errors.checkIn && (
                    <p className="text-red-500 text-sm">
                      {errors.checkIn.message}
                    </p>
                  )}
                </div>
                <div className="md:w-1/2 w-full">
                  <input
                    id="checkOut"
                    type="text"
                    name="checkOut"
                    placeholder="Check-Out Date"
                    className={`w-full border rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                      errors.checkIn ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("checkOut", {
                      required: "*CheckOut Date is required",
                    })}
                  />
                  {errors.checkOut && (
                    <p className="text-red-500 text-sm">
                      {errors.checkOut.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex md:flex-row  flex-col gap-2">
                <div className="md:w-1/2 w-full">
                  <input
                    id="passport"
                    type="text"
                    name="passport"
                    placeholder="Passport Number"
                    className={`w-full border rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                      errors.passport ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("passport", {
                      required: "*Passport Number is required",
                    })}
                  />
                  {errors.passport && (
                    <p className="text-red-500 text-sm">
                      {errors.passport.message}
                    </p>
                  )}
                </div>
                <div className="md:w-1/2 w-full">
                  <input
                    id="agent"
                    type="text"
                    name="agent"
                    placeholder="Agent Name"
                    className="w-full border rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent border-gray-300"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="md:w-1/2 w-full">
                  <Select
                    className="h-full mt-3 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent border-gray-300"
                    placeholder="Room Plan"
                    // options={sex}
                    name="sex"
                    // defaultValue={{ value: getDoctor.sex }}
                    // onChange={handleSelectChange}
                  />
                </div>
                <div className="md:w-1/2 w-full">
                  <Select
                    className="h-full mt-3 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent border-gray-300"
                    placeholder="Extra Service"
                    // options={sex}
                    name="sex"
                    // defaultValue={{ value: getDoctor.sex }}
                    // onChange={handleSelectChange}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="md:w-1/2 w-full">
                  <Select
                    className="h-full mt-3 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent border-gray-300"
                    placeholder="Room No"
                    // options={sex}
                    name="sex"
                    // defaultValue={{ value: getDoctor.sex }}
                    // onChange={handleSelectChange}
                  />
                </div>
                <div className="md:w-1/2 w-full">
                  <div className="flex flex-col">
                    <Select
                      className="h-full mt-3 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent border-gray-300"
                      placeholder="Rate"
                      styles={{}}
                      name="rate"
                      {...register("rate", {
                        required: "*Rate is required",
                      })}
                    />
                  </div>
                  {errors.rate && (
                    <p className="text-red-500 text-sm">
                      {errors.rate.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="md:w-full w-full mt-2 ml-1 text-slate-500">
                <div className="font-md mb-1  ">Payment Status</div>
                <div className="flex flex-row items-center gap-2">
                  <input
                    id="paid"
                    type="radio"
                    name="payment"
                    value="paid"
                    className="w-5 h-5"
                  />
                  <label htmlFor="paid">Paid</label>
                  <input
                    id="unpaid"
                    type="radio"
                    name="payment"
                    value="unpaid"
                    className="w-5 h-5 ml-2"
                  />
                  <label htmlFor="unpaid">Unpaid</label>
                </div>
              </div>
              <div className="flex md:flex-row  flex-col gap-2 mt-1">
                <div className="md:w-full w-full">
                  <textarea
                    id="note"
                    type="text"
                    name="note"
                    placeholder="Note "
                    className={`w-full border rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                      errors.note ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("note", {
                      required: "*note  is required",
                    })}
                  />
                  {errors.note && (
                    <p className="text-red-500 text-sm">
                      {errors.note.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-teal-600 font-bold hover:bg-teal-600 text-white w-full px-4 py-2 mt-6 rounded-md focus:ring-2 focus:ring-teal-700 ring-offset-2 outline-none focus:bg-teal-700 focus:shadow-lg"
          >
            Create Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

const Reservations = () => {
  const [showEvent, setShowEvent] = useState(false);

  const showEventHandler = () => {
    setShowEvent(true);
  };

  const hideEventHandler = () => {
    setShowEvent(false);
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
        onSelectSlot={showEventHandler}
        components={{
          toolbar: CustomToolbar,
        }}
      />
      {showEvent && <EventHandler onCancel={hideEventHandler} />}
    </div>
  );
};

export default Reservations;