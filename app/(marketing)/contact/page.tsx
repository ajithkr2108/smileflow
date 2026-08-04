export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA] px-6 py-16">
            <div className="max-w-md mx-auto text-center">
                <h1 className="text-4xl font-bold text-[#172033]">Contact Us</h1>
                <p className="mt-4 text-lg text-[#64748B]">
                    Reach out to book an appointment or ask a question.
                </p>

                <div className="mt-10 bg-white rounded-lg shadow-sm px-6 py-6 text-left space-y-3">
                    <p className="text-[#172033]">
                        <span className="font-semibold">Phone:</span> +91 98765 43210
                    </p>
                    <p className="text-[#172033]">
                        <span className="font-semibold">Email:</span> hello@smileflow.clinic
                    </p>
                    <p className="text-[#172033]">
                        <span className="font-semibold">Hours:</span> 9 AM – 5 PM, Mon–Sat
                    </p>
                </div>
            </div>
        </main>
    );
}