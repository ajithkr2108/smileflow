const services = [
    { id: 1, name: "Dental Cleaning", duration: "30 min" },
    { id: 2, name: "Checkup", duration: "15 min" },
    { id: 3, name: "Filling", duration: "45 min" },
    { id: 4, name: "Root Canal", duration: "60 min" },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA] px-6 py-16">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-[#172033]">Our Services</h1>
                <p className="mt-4 text-lg text-[#64748B]">
                    Cleanings, checkups, and treatments tailored to your smile.
                </p>
            </div>

            <div className="max-w-md mx-auto mt-10 space-y-3">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="flex justify-between items-center bg-white rounded-lg shadow-sm px-4 py-3"
                    >
                        <span className="font-medium text-[#172033]">{service.name}</span>
                        <span className="text-sm text-[#64748B]">{service.duration}</span>
                    </div>
                ))}
            </div>
        </main>
    );
}