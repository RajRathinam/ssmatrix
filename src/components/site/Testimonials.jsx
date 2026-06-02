"use client";
import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "HR Director, TechCorp India",
    rating: 5,
    text: "SS MATRIX has consistently delivered top-tier talent for our engineering teams. Their process is fast, rigorous and refreshingly transparent.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Talent Lead, FinEdge",
    rating: 5,
    text: "From mid-level hiring to executive search, SS MATRIX has become an extension of our HR team. Exceptional quality and follow-through.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Arun Venkatesh",
    role: "CEO, NovaSoft",
    rating: 5,
    text: "Their IT services team delivered a beautiful, fast website on time and within budget. Highly recommended consultancy partner.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "Meera Iyer",
    role: "Founder, BrightPath HR",
    rating: 5,
    text: "Professional, responsive and genuinely invested in outcomes. SS MATRIX raised our hiring success rate significantly.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    name: "Suresh Nair",
    role: "CTO, DataVelocity",
    rating: 5,
    text: "The technical talent they placed with us hit the ground running. Zero ramp-up issues and exactly the skill profile we needed.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Deepa Krishnan",
    role: "VP People, FinServ Co.",
    rating: 5,
    text: "Remarkably thorough screening process. Every candidate SS MATRIX sent was interview-ready and culturally aligned.",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    name: "Vikram Joshi",
    role: "Director, CloudOps Ltd",
    rating: 5,
    text: "Quick turnaround, strong communication, and a genuine understanding of our technical requirements. Excellent partner.",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    name: "Ananya Reddy",
    role: "CHRO, MediTech",
    rating: 5,
    text: "We've worked with many recruitment firms. SS MATRIX stands out for their follow-through and quality of shortlisted candidates.",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    name: "Kiran Bose",
    role: "Head of Engineering, Finova",
    rating: 5,
    text: "From requirement gathering to onboarding, the entire process was smooth. SS MATRIX truly understands the IT hiring landscape.",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: rating }).map((_, i) => (
      <svg
        key={i}
        className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const TestimonialsColumn = ({
  testimonials,
  duration = 15,
  className,
}) => (
  <div className={`overflow-hidden ${className ?? ""}`}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-4 pb-4"
    >
      {[...Array(2)].map((_, idx) => (
        <React.Fragment key={idx}>
          {testimonials.map(({ text, image, name, role, rating }, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 max-w-[360px] w-full"
            >
              <StarRating rating={rating} />
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={image}
                  alt={name}
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-blue-100 dark:ring-blue-900"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                    {name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight mt-0.5">
                    {role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/40 dark:from-gray-900 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-[540px] mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm mb-5">
            <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
              Testimonials
            </span>
          </div>

          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
            Trusted by HR leaders and technology companies across India.
          </p>
        </motion.div>

        {/* Scrolling columns */}
        <div className="flex justify-center gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[680px] overflow-hidden">
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={22}
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={28}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={25}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}