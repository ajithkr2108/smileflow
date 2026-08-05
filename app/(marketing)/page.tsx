export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <section className="px-6 pt-24 pb-20 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight text-[#172033]">
          Dental care, without the paperwork.
        </h1>
        <svg
          width="120"
          height="20"
          viewBox="0 0 120 20"
          className="mx-auto mt-4 mb-6"
        >
          <path
            d="M5 5 Q60 25 115 5"
            stroke="#0EA5A0"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <p className="text-lg text-[#64748B] max-w-xl mx-auto">
          Modern Dent Care lets patients book appointments online and helps
          our staff manage the day — no more paper schedules.
        </p>
        <button className="mt-8 px-6 py-3 rounded-full bg-[#0EA5A0] text-white font-medium hover:bg-[#0c8a86] transition">
          Book an Appointment
        </button>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="font-semibold text-[#172033] mb-2">Book Online</h3>
            <p className="text-sm text-[#64748B]">
              Choose a service, pick a time, done — no phone calls needed.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#172033] mb-2">Pick Your Dentist</h3>
            <p className="text-sm text-[#64748B]">
              Request a specific dentist, or just the service you need.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#172033] mb-2">Instant Confirmation</h3>
            <p className="text-sm text-[#64748B]">
              Get an SMS confirmation the moment you book.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center bg-[#0EA5A0]">
        <h2 className="text-2xl font-semibold text-white">
          Ready to book your visit?
        </h2>
        <button className="mt-6 px-6 py-3 rounded-full bg-white text-[#0EA5A0] font-medium hover:bg-gray-100 transition">
          Book an Appointment
        </button>
      </section>
    </main>
  );
}