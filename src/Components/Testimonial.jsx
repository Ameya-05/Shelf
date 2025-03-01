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
    <div id="blog" className="flex relative items-center justify-between gap-44 bg-gray-200 text-black py-10 m-12 px-6 rounded-2xl text-center">
      <div>
        <h1 className="text-5xl ml-10 font-bold mb-10">Testimonials</h1>
        <FaQuoteLeft className="absolute ml-10 top-40 text-sm text-black" /> <span className="text-2xl ml-14 font-semibold tracking-tighter">Feedbacks that helps us thrive! </span> <FaQuoteRight className="absolute ml-10 top-40 left-[340px] text-sm text-black" />
      </div>
      <div
        className="relative bg-zinc-700 text-white p-6 rounded-xl shadow-lg max-w-md mx-auto transition-opacity duration-500 ease-in-out opacity-100"
        key={index}
      >
        <div className="absolute top-0 left-2 w-full h-1 bg-gray-400 rounded-t-xl animate-border-move"></div>
        <FaQuoteLeft className="text-2xl text-gray-400" />
        <p className="mt-4 text-lg">{testimonials[index].text}</p>
        <div className="mt-4">
          <span className="font-bold text-white">{testimonials[index].name}</span>
          <span className="text-gray-400"> • {testimonials[index].role}</span>
        </div>
        <div className="mt-2 flex text-yellow-400">
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
