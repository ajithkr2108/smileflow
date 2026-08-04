const todaysAppointments = [
  { id: 1, patient: "Anjali Nair", time: "9:00 AM", service: "Cleaning", dentist: "Dr. Menon" },
  { id: 2, patient: "Rahul Pillai", time: "10:30 AM", service: "Checkup", dentist: "Dr. Rao" },
  { id: 3, patient: "Sara Thomas", time: "1:00 PM", service: "Filling", dentist: "Dr. Menon" },
];

export default function ReceptionPage() {
  return (
    <main className="px-6 py-10">
      <h1 className="text-2xl font-bold text-[#172033] mb-6">
        Today's Appointments
      </h1>
      <div className="space-y-3">
        {todaysAppointments.map((appt) => (
          <div
            key={appt.id}
            className="flex justify-between items-center bg-white rounded-lg shadow-sm px-4 py-3"
          >
            <div>
              <p className="font-medium text-[#172033]">{appt.patient}</p>
              <p className="text-sm text-[#64748B]">{appt.service} with {appt.dentist}</p>
            </div>
            <span className="text-sm font-medium text-[#0EA5A0]">{appt.time}</span>
          </div>
        ))}
      </div>
    </main>
  );
}