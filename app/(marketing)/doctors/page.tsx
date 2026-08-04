const doctors = [
    { id: 1, name: "Dr. Menon", specialty: "General Dentistry" },
    { id: 2, name: "Dr. Rao", specialty: "Orthodontics" },
    { id: 3, name: "Dr. Fernandes", specialty: "Root Canal Specialist" },
    { id: 4, name: "Dr. Iyer", specialty: "Pediatric Dentistry" },
    { id: 5, name: "Dr. Kutty", specialty: "Cosmetic Dentistry" },
];

export default function DoctorsPage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA] px-6 py-16">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-[#172033]">Our Dentists</h1>
                <p className="mt-4 text-lg text-[#64748B]">
                    Meet the team taking care of your smile.
                </p>
            </div>

            <div className="max-w-3xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {doctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className="bg-white rounded-lg shadow-sm px-5 py-4"
                    >
                        <p className="font-semibold text-[#172033]">{doctor.name}</p>
                        <p className="text-sm text-[#64748B]">{doctor.specialty}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}