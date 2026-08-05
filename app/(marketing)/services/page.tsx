const services = [
    { id: 1, name: "Teeth Whitening", duration: "45 min" },
    { id: 2, name: "Check-up", duration: "15 min" },
    { id: 3, name: "Teeth Cleaning", duration: "30 min" },
    { id: 4, name: "Root Canal", duration: "60 min" },
    { id: 5, name: "Extractions", duration: "30 min" },
    { id: 6, name: "Dental Implants", duration: "90 min" },
    { id: 7, name: "Dentures & Bridges", duration: "60 min" },
    { id: 8, name: "Veneers & Crowns", duration: "60 min" },
    { id: 9, name: "Oral Surgery", duration: "90 min" },
    { id: 10, name: "Paediatric Dentistry", duration: "30 min" },
    { id: 11, name: "X-Ray", duration: "15 min" },
    { id: 12, name: "Emergency Care", duration: "30 min" },
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