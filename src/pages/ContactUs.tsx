import { motion } from "framer-motion";


export function ContactUs() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h1 className="mt-10">Contact Us</h1>
            <div className="mt-8">
                <p>Please use the contact form below, if you have any general questions or requests about our services.</p>
                <p>We will try our best to respond back to you within 24 hours.</p>
                <div className=" flex justify-center items-center">
                    <form
                        action="https://getform.io/f/199dd14a-a683-4fd4-936d-9dc061db2efd"
                        method="POST"
                        className=" flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-gray-600 focus:outline-none"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-gray-600 focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows={10}
                            className="p-2 bg-transparent border-2 rounded-md text-gray-600 focus:outline-none"
                        ></textarea>

                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Let's talk
                        </button>
                    </form>
                </div>
                <h2 className="mt-8"><span>&copy;</span> Victorious store has been created in 2022, By Majed El-Naser.</h2>
            </div>
        </motion.div>
    )
}