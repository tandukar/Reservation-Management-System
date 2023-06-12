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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  useCreateReservationMutation,
  useGetReservationsQuery,
  useDeleteReservationMutation,
} from "./ReservationApiSlice";
import EditReservations from "./EditReservations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const EditHandler = ({
  onCancel,
  id,
  name,
  roomNumber,
  startDate,
  endDate,
}) => {
  const [deleteReservation, { isLoading, error }] =
    useDeleteReservationMutation();
  const { refetch } = useGetReservationsQuery();

  const handleDelete = async () => {
    try {
      const response = await deleteReservation(id);
      console.log("THIS IS RESPONSE FROM DELETE", response);
      refetch();
    } catch (error) {
      console.log("THIS IS ERROR FROM DELETE", error);
    }
  };

  const [showUpdate, setShowUpdate] = useState(false);

  const showUpdateHandler = (event) => {
    setShowUpdate(true);
  };

  const hideUpdateHandler = () => {
    setShowUpdate(false);
  };

  const start = new Date(startDate).toLocaleDateString();
  const end = new Date(endDate).toLocaleDateString();

  return (
    <div className="fixed flex flex-col top-0 left-0 w-screen h-screen bg-black bg-opacity-25  justify-center items-center z-50 ">
      <div className="bg-white rounded-md md:w-128 w-30 ">
        <div className=" flex flex-row px-4 py-5 bg-slate-100 rounded-t-md rounded-r-md z-10">
          <div className="flex-grow-1 text-slate-600 text-xl">
            Reservation Details
          </div>
          <div className="ml-auto">
            <RxCrossCircled
              onClick={onCancel}
              className="text-2xl text-slate-600  hover:text-slate-700"
            />
          </div>
        </div>

        <div className="px-4 py-5 text-slate-600 ">
          <p>Guest Name: {name}</p>
          <p>Room Number: {roomNumber}</p>
          <p>Check-In Date: {start}</p>
          <p>Check-Out Date:{end}</p>
          <div className="flex flex-row justify-between">
            <div>
              <button
                type="submit"
                className="w-1/8 font-bold bg-gray-600 text-white px-4 py-2 mt-2 rounded-md"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="w-1/8 font-bold bg-teal-600 text-white px-4 py-2 mt-2 rounded-md"
                onClick={showUpdateHandler}
              >
                Edit
              </button>
              {showUpdate && (
                <UpdateHandler onCancel={hideUpdateHandler} id={id} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const UpdateHandler = ({ onCancel, id }) => {
  console.log("this is from update handler", id);

  return (
    <div className="fixed flex flex-col top-0 left-0 w-screen h-screen bg-black bg-opacity-25  justify-center items-center z-50 ">
      <div className="bg-white rounded-md md:w-150 w-30 ">
        <div className=" flex flex-row px-4 py-5 bg-slate-100 rounded-t-md rounded-r-md z-10">
          <div className="flex-grow-1 text-slate-600 text-xl">
            Update Reservation
          </div>
          <div className="ml-auto">
            <RxCrossCircled
              onClick={onCancel}
              className="text-2xl text-slate-600  hover:text-slate-700"
            />
          </div>
        </div>

        <div className="px-4 py-5 text-slate-600 ">
          <EditReservations id={id} />
        </div>
      </div>
    </div>
  );
};

const EventHandler = ({ onCancel, startDate }) => {
  console.log("from evenhandler", startDate);
  const [endDate, setEndDate] = useState(new Date());
  const [roomPlanOption, setRoomPlanOption] = useState("");
  const [roomOption, setRoomOption] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [serviceOption, setServiceOption] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [createReservation, { isLoading, error }] =
    useCreateReservationMutation();
  const { refetch } = useGetReservationsQuery();

  const roomPlan = [
    { value: "BB", label: "BB" },
    { value: "EP", label: "EP" },
    { value: "AP", label: "AP" },
    { value: "MAP", label: "MAP" },
  ];
  const service = [
    { value: "included", label: "Included" },
    { value: "notIncluded", label: "Not Included" },
  ];
  const room = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];
  const payment = [
    { value: "paid", label: "Paid" },
    { value: "unpaid", label: "Unpaid" },
  ];

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      roomPlan: roomPlanOption,
      roomNumber: roomOption,
      payment: paymentOption,
      extraService: serviceOption,
      checkInDate: startDate,
      checkOutDate: endDate,
    };
    console.log(payload);
    // console.log("room plan option",roomPlanOption);
    try {
      console.log(payload);
      const response = await createReservation(payload);
      console.log(response);
      refetch();
      if (response.data) {
        toast.success("Reservation Created");
         }
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
    <>
      <ToastContainer />

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
              <div className="relative text-gray-600">
                <div className="flex md:flex-row  flex-col gap-2">
                  <div className="md:w-1/2 w-full">
                    <input
                      id="guestName"
                      type="text"
                      name="guestName"
                      placeholder="Guest Name"
                      className={`w-full border rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                        errors.guestName ? "border-red-500" : "border-gray-300"
                      }`}
                      {...register("guestName", {
                        required: "*Guest Name is required",
                      })}
                    />
                    {errors.guestName && (
                      <span className="text-red-500 text-sm">
                        {errors.guestName.message}
                      </span>
                    )}
                  </div>
                  <div className="md:w-1/2 w-full ">
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
                <div className="flex md:flex-row  flex-col gap-2 text-gray-600">
                  <div className="md:w-1/2 w-full">
                    <DatePicker
                      selected={startDate}
                      className={`w-full border rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                        errors.endDate ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.endDate && (
                      <p className="text-red-500 text-sm">
                        {errors.endDate.message}
                      </p>
                    )}
                  </div>

                  <div className="md:w-1/2 w-full">
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      className={`w-full border rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                        errors.endDate ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.endDate && (
                      <p className="text-red-500 text-sm">
                        {errors.endDate.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex md:flex-row  flex-col gap-2">
                  <div className="md:w-1/2 w-full">
                    <input
                      id="passportNumber"
                      type="text"
                      name="passportNumber"
                      placeholder="Passport Number"
                      className={`w-full border rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                        errors.passportNumber
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      {...register("passportNumber", {
                        required: "*Passport Number is required",
                      })}
                    />
                    {errors.passportNumber && (
                      <p className="text-red-500 text-sm">
                        {errors.passportNumber.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/2 w-full">
                    <input
                      id="agentName"
                      type="text"
                      name="agentName"
                      placeholder="Agent Name"
                      className="w-full border rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent border-gray-300"
                      {...register("agentName", {})}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-2 ">
                  <div className="md:w-1/2 w-full">
                    <Select
                      className="h-full mt-3  focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent border-gray-300"
                      placeholder="Room Plan"
                      options={roomPlan}
                      name="roomPlan"
                      // defaultValue={{ value: getDoctor.sex }}
                      onChange={(e) => setRoomPlanOption(e.value)}
                    />
                  </div>
                  <div className="md:w-1/2 w-full">
                    <Select
                      className="h-full mt-3 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent border-gray-300"
                      placeholder="Extra Service"
                      options={service}
                      name="service"
                      // defaultValue={{ value: getDoctor.sex }}
                      onChange={(e) => setServiceOption(e.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="md:w-1/2 w-full">
                    <Select
                      className="h-full mt-3 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent border-gray-300"
                      placeholder="Room No"
                      options={room}
                      name="room"
                      // defaultValue={{ value: getDoctor.sex }}
                      onChange={(e) => setRoomOption(e.value)}
                    />
                  </div>
                  <div className="md:w-1/2 w-full">
                    <div className="flex flex-col">
                      <Select
                        className="h-full mt-3 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent border-gray-300"
                        placeholder="Payment"
                        styles={{}}
                        name="payment"
                        options={payment}
                        onChange={(e) => setPaymentOption(e.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-row  flex-col gap-2 mt-1 text-gray-600">
                  <div className="w-full">
                    <input
                      id="rate"
                      type="Number"
                      name="rate"
                      placeholder="Rate"
                      className={`w-full border rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                        errors.rate ? "border-red-500" : "border-gray-300"
                      }`}
                      {...register("rate", {
                        required: "*Rate Date is required",
                      })}
                    />
                    {errors.rate && (
                      <p className="text-red-500 text-sm">
                        {errors.rate.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex md:flex-row  flex-col gap-2 mt-1 text-gray-600">
                  <div className="md:w-full w-full">
                    <textarea
                      id="notes"
                      type="text"
                      name="notes"
                      placeholder="Note "
                      className={`w-full border rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                        errors.notes ? "border-red-500" : "border-gray-300"
                      }`}
                      {...register("notes", {
                        required: "*note  is required",
                      })}
                    />
                    {errors.notes && (
                      <p className="text-red-500 text-sm">
                        {errors.notes.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-teal-600 font-bold hover:bg-teal-600 text-white w-full px-4 py-2 mt-2 rounded-md focus:ring-2 focus:ring-teal-700 ring-offset-2 outline-none focus:bg-teal-700 focus:shadow-lg"
            >
              Create Reservation
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const Reservations = () => {
  const [showEvent, setShowEvent] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setend] = useState(null);
  const [roomNumber, setRoomNumber] = useState(null);

  //get all reservation
  const {
    data: getReservation = [],
    error,
    isLoading,
  } = useGetReservationsQuery();
  console.log("reservations", getReservation);

  const showEventHandler = (event) => {
    setShowEvent(true);
    setStartDate(event.start);
    console.log(event.start);
  };

  const showEditHandler = (event) => {
    setId(event.id);
    setName(event.guestname);
    setStart(event.start);
    setend(event.end);
    setRoomNumber(event.title);
    setShowEdit(true);
  };

  const hideEventHandler = () => {
    setShowEvent(false);
  };

  const hideEditHandler = () => {
    setShowEdit(false);
  };

  const events = getReservation.map((reservation) => ({
    id: reservation._id,
    guestname: reservation.guestName,
    title: "Room " + reservation.roomNumber,
    start: reservation.checkInDate,
    end: reservation.checkOutDate,
  }));

  const handleSelectSlot = (event) => {
    console.log(event.start);
  };

  return (
    <>
      <div>
        <h1 className="mb-3 text-2xl text-orange-600 font-bold">
          Reservations
        </h1>
        <Calendar
          views={["day", "agenda", "work_week", "month"]}
          selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "90vh" }}
          eventPropGetter={eventStyleGetter}
          //pass id to the show even handler and
          onSelectEvent={(event) => showEditHandler(event)}
          onSelectSlot={showEventHandler}
          components={{
            toolbar: CustomToolbar,
          }}
        />
        {showEvent && (
          <EventHandler onCancel={hideEventHandler} startDate={startDate} />
        )}

        {showEdit && (
          <EditHandler
            onCancel={hideEditHandler}
            id={id}
            name={name}
            roomNumber={roomNumber}
            startDate={start}
            endDate={end}
          />
        )}
      </div>
    </>
  );
};

export default Reservations;
