const stats = [
  { id: 1, label: "Dentists", value: 5 },
  { id: 2, label: "Receptionists", value: 2 },
  { id: 3, label: "Appointments Today", value: 8 },
];

export default function AdminPage() {
  return (
    <main className="px-6 py-10">
      <h1 className="text-2xl font-bold text-[#172033] mb-6">
        Clinic Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-lg shadow-sm px-6 py-8 text-center"
          >
            <p className="text-3xl font-bold text-[#0EA5A0]">{stat.value}</p>
            <p className="text-sm text-[#64748B] mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </main>
  );
}