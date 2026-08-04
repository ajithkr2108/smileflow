import { myPatientsToday } from "@/lib/data";

export default function DentistPage() {
  return (
    <main className="px-6 py-10">
      <h1 className="text-2xl font-bold text-[#172033] mb-6">
        Today's Patients
      </h1>

      {myPatientsToday.length === 0 ? (
        <p className="text-[#64748B]">No appointments scheduled today.</p>
      ) : (
        <div className="space-y-3">
          {myPatientsToday.map((appt) => (
            <div
              key={appt.id}
              className="flex justify-between items-center bg-white rounded-lg shadow-sm px-4 py-3"
            >
              <div>
                <p className="font-medium text-[#172033]">{appt.patient}</p>
                <p className="text-sm text-[#64748B]">{appt.service}</p>
              </div>
              <span className="text-sm font-medium text-[#0EA5A0]">{appt.time}</span>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}