import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Reservations.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGetReservationQuery } from "./ReservationApiSlice";

const EditReservations = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const {
    data: getReservation = [],
    error,
    isLoading,
  } = useGetReservationQuery(props.id, {
    skip: props.id === null,
  });
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [guestName, setGuestName] = React.useState();

  // console.log("from edit reservations", getReservation);

  useEffect(() => {
    if (getReservation) {
      const start = moment(getReservation.checkInDate, "YYYY-MM-DD").isValid()
        ? moment(getReservation.checkInDate, "YYYY-MM-DD").toDate()
        : null;

      const end = moment(getReservation.checkOutDate, "YYYY-MM-DD").isValid()
        ? moment(getReservation.checkOutDate, "YYYY-MM-DD").toDate()
        : null;

      setStartDate(start);
      setEndDate(end);
      setValue("guestName", getReservation.guestName);
      setValue("guestEmail", getReservation.guestEmail);
      setValue("passportNumber", getReservation.passportNumber);
      setValue("agentName", getReservation.agentName);
      setValue("rate", getReservation.rate);
      setValue("notes", getReservation.notes);
      setValue("roomPlan", getReservation.roomPlan);
      setValue("extraService", getReservation.extraService);
      setValue("roomNumber", getReservation.roomNumber);
      setValue("payment", getReservation.payment);
    }
  }, [getReservation]);

  const onSubmit = (data) => {
    console.log("update submission", data);
    toast.success("Reservation Updated Successfully!")
  };

  const roomPlanOption = [
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

  const [roomPlan, setRoomPlan] = React.useState();
  const [serviceOption, setServiceOption] = React.useState();
  const [roomNumberOption, setRoomNumberOption] = React.useState();
  const [paymentOption, setPaymentOption] = React.useState();

  const handleSelectChange = (selectedOption, name) => {
    switch (name) {
      case "roomPlan":
        setRoomPlan(selectedOption.value);
        setValue("roomPlan", selectedOption.value);
        break;
      case "extraService":
        setServiceOption(selectedOption.value);
        setValue("extraService", selectedOption.value);
        break;
      case "roomNumber":
        setRoomNumberOption(selectedOption.value);
        setValue("roomNumber", selectedOption.value);
        break;
      case "payment":
        setPaymentOption(selectedOption.value);
        setValue("payment", selectedOption.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <ToastContainer />
      <div>
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
                    defaultValue={guestName}
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
                  {getReservation && (
                    <Select
                      className="h-full mt-3 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent border-gray-300"
                      placeholder="Room Plan"
                      options={roomPlanOption}
                      name="roomPlan"
                      defaultValue={{ value: getReservation.roomPlan }}
                      onChange={handleSelectChange}
                    />
                  )}
                </div>

                <div className="md:w-1/2 w-full">
                  <Select
                    className="h-full mt-3 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent border-gray-300"
                    placeholder="Extra Service"
                    options={service}
                    name="extraService"
                    value={service.find(
                      (option) => option.value === serviceOption
                    )}
                    onChange={(selectedOption) =>
                      handleSelectChange(selectedOption, "extraService")
                    }
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="md:w-1/2 w-full">
                  <Select
                    className="h-full mt-3 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent border-gray-300"
                    placeholder="Room No"
                    options={room}
                    name="roomNumber"
                    value={room.find(
                      (option) => option.value === roomNumberOption
                    )}
                    onChange={(selectedOption) =>
                      handleSelectChange(selectedOption, "roomNumber")
                    }
                  />
                </div>
                <div className="md:w-1/2 w-full">
                  <div className="flex flex-col">
                    <Select
                      className="h-full mt-3 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent border-gray-300"
                      placeholder="Payment"
                      name="payment"
                      options={payment}
                      value={payment.find(
                        (option) => option.value === paymentOption
                      )}
                      onChange={(selectedOption) =>
                        handleSelectChange(selectedOption, "payment")
                      }
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
            Update Reservation
          </button>
        </form>
      </div>
    </>
  );
};
export default EditReservations;
