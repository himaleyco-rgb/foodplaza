"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#f6f1e8] text-[#2B1F1A] overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#f6f1e8]/80 backdrop-blur-2xl border-b border-[#eadfce]">

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">

          <div>

            <h1 className="text-2xl md:text-3xl font-black tracking-[4px]">
              FOOD PLAZA
            </h1>

            <p className="text-xs uppercase tracking-[3px] text-[#7b6d5f] mt-1">
              Shoghi • Shimla • Himachal Pradesh
            </p>

          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 font-semibold">

            <a href="#about" className="hover:text-[#C6923D] transition">
              About
            </a>

            <a href="#speciality" className="hover:text-[#C6923D] transition">
              Food
            </a>

            <a href="#why" className="hover:text-[#C6923D] transition">
              Why Us
            </a>

            <a href="#menu" className="hover:text-[#C6923D] transition">
              Menu
            </a>

            <a href="#reviews" className="hover:text-[#C6923D] transition">
              Reviews
            </a>

            <a href="#gallery" className="hover:text-[#C6923D] transition">
              Gallery
            </a>

            <a href="#booking" className="hover:text-[#C6923D] transition">
              Booking
            </a>

            <a href="#contact" className="hover:text-[#C6923D] transition">
              Contact
            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>

        </div>

      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#f6f1e8]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-3xl font-black">

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#speciality" onClick={() => setMenuOpen(false)}>
            Food
          </a>

          <a href="#why" onClick={() => setMenuOpen(false)}>
            Why Us
          </a>

          <a href="#menu" onClick={() => setMenuOpen(false)}>
            Menu
          </a>

          <a href="#reviews" onClick={() => setMenuOpen(false)}>
            Reviews
          </a>

          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>

          <a href="#booking" onClick={() => setMenuOpen(false)}>
            Booking
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
          alt="Food Plaza"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 px-6 max-w-5xl pt-20">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[6px] text-[#e7d5b7] text-sm"
          >
            Premium Pure Veg Himalayan Restaurant
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-6 text-6xl md:text-8xl font-black leading-[0.95] text-white"
          >
            FOOD PLAZA
            <br />
            SHOGHI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Authentic Himachali vegetarian cuisine,
            luxury mountain café vibes,
            and unforgettable Himalayan hospitality.
          </motion.p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">

            <button className="bg-[#C6923D] hover:bg-[#b98530] transition text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl">
              Explore Menu
            </button>

            <button className="border border-white hover:bg-white hover:text-black transition text-white px-10 py-5 rounded-full text-lg font-bold">
              Book Table
            </button>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="py-24 px-6 md:px-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop"
            alt="Restaurant Interior"
            className="rounded-[35px] shadow-2xl h-[650px] object-cover w-full"
          />

          <div>

            <p className="uppercase tracking-[5px] text-[#C6923D] text-sm">
              About FOOD PLAZA
            </p>

            <h2 className="mt-5 text-5xl md:text-6xl font-black leading-tight">
              Luxury Vegetarian Dining In The Himalayas
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-[#5e5146]">
              FOOD PLAZA SHOGHI blends premium interiors,
              authentic Himachali cuisine,
              mountain café vibes,
              and warm hospitality into one unforgettable dining experience.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-white rounded-[25px] p-6 shadow-xl">

                <h3 className="text-3xl font-black">
                  100%
                </h3>

                <p className="mt-2 text-[#5e5146]">
                  Pure Vegetarian
                </p>

              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-xl">

                <h3 className="text-3xl font-black">
                  Luxury
                </h3>

                <p className="mt-2 text-[#5e5146]">
                  Himalayan Experience
                </p>

              </div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* SPECIALITY */}
      <motion.section
        id="speciality"
        className="py-24 px-6 md:px-20 bg-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-[#C6923D] text-sm">
            Signature Food
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-black">
            Himachali Pure Veg Specialities
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {[
              {
                image: "/images/siddu.png",
                title: "Traditional Pahadi Siddu",
              },
              {
                image: "/images/momos.png",
                title: "Veg Steam Momos",
              },
              {
                image: "/images/dham-thali.png",
                title: "Himachali Dham Thali",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="overflow-hidden rounded-[35px] shadow-2xl bg-[#f6f1e8]"
              >

                <div className="overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[450px] w-full object-cover hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-3xl font-black">
                    {item.title}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </motion.section>

      {/* WHY US */}
      <motion.section
        id="why"
        className="py-24 px-6 md:px-20 bg-[#2B1F1A] text-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-[#C6923D] text-sm">
            Why Choose Us
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-black">
            Premium Himalayan Experience
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            {[
              "Fresh Ingredients",
              "Luxury Dining",
              "Pure Veg Kitchen",
              "Traditional Taste",
            ].map((item) => (

              <div
                key={item}
                className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-10"
              >

                <h3 className="text-2xl font-black">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </motion.section>

      {/* MENU */}
      <motion.section
        id="menu"
        className="py-24 px-6 md:px-20 bg-[#f3ece2]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-[#C6923D] text-sm">
            Our Menu
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-black">
            Himalayan Pure Veg Delights
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {[
              {
                name: "Traditional Pahadi Siddu",
                price: "₹180",
              },
              {
                name: "Veg Steam Momos",
                price: "₹160",
              },
              {
                name: "Himachali Dham Thali",
                price: "₹350",
              },
              {
                name: "Paneer Butter Masala",
                price: "₹280",
              },
              {
                name: "Veg Fried Rice",
                price: "₹220",
              },
              {
                name: "Masala Chai",
                price: "₹80",
              },
            ].map((item) => (

              <div
                key={item.name}
                className="bg-white rounded-[30px] p-8 shadow-xl flex items-center justify-between"
              >

                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <span className="text-2xl font-black text-[#C6923D]">
                  {item.price}
                </span>

              </div>

            ))}

          </div>

        </div>

      </motion.section>

      {/* REVIEWS */}
      <motion.section
        id="reviews"
        className="py-24 px-6 md:px-20 bg-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-[#C6923D] text-sm">
            Customer Reviews
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-black">
            What Guests Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {[
              "Best vegetarian restaurant in Shimla with amazing Siddu.",
              "Luxury atmosphere and authentic Himachali taste.",
              "Beautiful mountain vibes and excellent hospitality.",
            ].map((review, index) => (

              <div
                key={index}
                className="bg-[#f6f1e8] rounded-[35px] p-10 shadow-xl"
              >

                <p className="text-3xl">
                  ⭐⭐⭐⭐⭐
                </p>

                <p className="mt-6 text-lg leading-relaxed text-[#5e5146]">
                  {review}
                </p>

              </div>

            ))}

          </div>

        </div>

      </motion.section>

      {/* GALLERY */}
      <motion.section
        id="gallery"
        className="py-24 px-6 md:px-20 bg-[#f6f1e8]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-[#C6923D] text-sm">
            Restaurant Gallery
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-black">
            Luxury Mountain Dining
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {[
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
            ].map((image, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-[35px] shadow-2xl"
              >

                <img
                  src={image}
                  alt="Gallery"
                  className="h-[450px] w-full object-cover hover:scale-110 transition duration-700"
                />

              </div>

            ))}

          </div>

        </div>

      </motion.section>

      {/* BOOKING */}
      <motion.section
        id="booking"
        className="py-24 px-6 md:px-20 bg-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <div className="max-w-3xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-[#C6923D] text-sm">
            Reserve Table
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-black">
            Book Your Dining Experience
          </h2>

          <div className="bg-[#f6f1e8] rounded-[35px] p-10 shadow-2xl mt-16 space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-5 rounded-2xl bg-white outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-5 rounded-2xl bg-white outline-none"
            />

            <input
              type="date"
              className="w-full p-5 rounded-2xl bg-white outline-none"
            />

            <button className="w-full bg-[#C6923D] hover:bg-[#b98530] transition text-white py-5 rounded-2xl text-lg font-bold">
              Reserve Table
            </button>

          </div>

        </div>

      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="relative py-24 px-6 md:px-20 text-white overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <img
          src="https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop"
          alt="Shimla"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-[#C6923D] text-sm">
            Visit FOOD PLAZA
          </p>

          <h2 className="mt-5 text-5xl md:text-7xl font-black">
            FOOD PLAZA SHOGHI
          </h2>

          <p className="mt-8 text-xl text-white/80 leading-relaxed">
            Alpine House Ashiana NH, Shoghi, Shimla, Himachal Pradesh
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">

            <button className="bg-[#C6923D] hover:bg-[#b98530] transition px-10 py-5 rounded-full text-lg font-bold">
              Call Now
            </button>

            <button className="border border-white hover:bg-white hover:text-black transition px-10 py-5 rounded-full text-lg font-bold">
              Get Directions
            </button>

          </div>

        </div>

      </motion.section>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl hover:scale-110 transition"
      >
        💬
      </a>

      {/* CALL BUTTON */}
      <a
        href="tel:+919999999999"
        className="fixed bottom-24 right-5 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#C6923D] text-3xl text-white shadow-2xl hover:scale-110 transition"
      >
        📞
      </a>

      {/* FOOTER */}
      <footer className="bg-[#2B1F1A] text-white py-10 px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="text-2xl font-black tracking-[4px]">
              FOOD PLAZA
            </h3>

            <p className="text-white/60 mt-2">
              Premium Pure Veg Himalayan Restaurant
            </p>

          </div>

          <p className="text-white/50 text-sm text-center">
            © 2026 FOOD PLAZA SHOGHI • All Rights Reserved
          </p>

        </div>

      </footer>

    </main>
  );
}