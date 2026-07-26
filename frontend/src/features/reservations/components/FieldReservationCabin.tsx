function FieldReservationCabin({ field, value }) {
  return (
    <div className="flex justify-between">
      <p className="text-gray-300">{field}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
}

export default FieldReservationCabin;
