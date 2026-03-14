export default function StaySearchFields() {
  return (
    <>
      <fieldset className="flex-1 border border-gray-400 rounded-md pl-4 py-0.5">
        <legend className="px-2 text-sm text-gray-500">Destination</legend>
        <div className="flex items-center justify-between">
          <span className="text-[16px] h-10 flex items-center font-medium text-gray-800">
            Lahore - Karachi
          </span>
        </div>
      </fieldset>
      <fieldset className="hidden lg:flex flex-1 border border-gray-400 rounded-md pl-4 py-0.5">
        <legend className="px-2 text-sm text-gray-500">Check In</legend>
        <input
          type="date"
          name=""
          id=""
          className=" w-full text-[16px] h-10 pr-2 font-medium text-gray-800"
        />
      </fieldset>
      <fieldset className="hidden lg:flex flex-1 border border-gray-400 rounded-md pl-4 py-0.5">
        <legend className="px-2 text-sm text-gray-500">Check Out</legend>
        <input
          type="date"
          name=""
          id=""
          className=" w-full text-[16px] h-10 pr-2 font-medium text-gray-800"
        />
      </fieldset>
      <fieldset className="flex-1 border border-gray-400 rounded-md pl-4 py-0.5">
        <legend className="px-2 text-sm text-gray-500">Room & Guests</legend>
        <div className="flex items-center justify-between">
          <span className="text-[16px] h-10 flex items-center font-medium text-gray-800">
            1 Passenger, Economy
          </span>
        </div>
      </fieldset>
    </>
  );
}
