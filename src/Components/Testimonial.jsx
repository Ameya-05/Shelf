import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "These testimonial components have transformed how we showcase our customer stories.",
    name: "Sarah Johnson",
    role: "Product Manager at DevCorp",
  },
  {
    text: "Fantastic experience! The UI is sleek and the customization options are great.",
    name: "Michael Smith",
    role: "CEO at TechWorld",
  },
  {
    text: "This has greatly improved our workflow and presentation. Highly recommended!",
    name: "Emily Davis",
    role: "Designer at CreativeHub",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-5 md:mt-6 flex flex-col md:flex-row relative items-center justify-center md:justify-between gap-10 md:gap-20 bg-gray-200 text-black py-10 px-6 rounded-2xl text-center max-w-5xl mx-auto">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Testimonials</h1>
        <div className="flex items-center justify-center md:justify-start">
          <FaQuoteLeft className="text-sm md:text-lg text-black" />
          <span className="text-xl md:text-2xl font-semibold tracking-tighter mx-2">Feedbacks that help us thrive!</span>
          <FaQuoteRight className="text-sm md:text-lg text-black" />
        </div>
      </div>
      <div className="relative bg-zinc-700 text-white p-6 rounded-xl shadow-lg w-full max-w-md mx-auto transition-opacity duration-500 ease-in-out">
        <div className="absolute top-0 left-2 w-full h-1 bg-gray-400 rounded-t-xl animate-border-move"></div>
        <FaQuoteLeft className="text-2xl text-gray-400" />
        <p className="mt-4 text-lg">{testimonials[index].text}</p>
        <div className="mt-4">
          <span className="font-bold text-white">{testimonials[index].name}</span>
          <span className="text-gray-400"> • {testimonials[index].role}</span>
        </div>
        <div className="mt-2 flex justify-center md:justify-start text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-xl" />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes border-move {
          0% { width: 0%; }
          100% { width: 96%; }
        }
        .animate-border-move {
          animation: border-move 3s ease-in-out infinite;
          border-top-left-radius: 500px;
          border-top-right-radius: 500px;
        }
      `}</style>
    </div>
  );
}
