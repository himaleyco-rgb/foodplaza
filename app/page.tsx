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

            <a href="#gallery" className="hover:text-[#C6923D] transition">
              Gallery
            </a>

            <a href="#instagram" className="hover:text-[#C6923D] transition">
              Instagram
            </a>

            <a href="#contact" className="hover:text-[#C6923D] transition">
              Contact
            </a>

          </div>

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

          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>

          <a href="#instagram" onClick={() => setMenuOpen(false)}>
            Instagram
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
          alt="Restaurant"
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

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6 md:px-20"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop"
            alt="Restaurant"
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

          </div>

        </div>

      </section>

      {/* SPECIALITY */}
      <section
        id="speciality"
        className="py-24 px-6 md:px-20 bg-white"
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

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[450px] w-full object-cover hover:scale-110 transition duration-700"
                />

                <div className="p-8">

                  <h3 className="text-3xl font-black">
                    {item.title}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY US */}
      <section
        id="why"
        className="py-24 px-6 md:px-20 bg-[#2B1F1A] text-white"
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
                className="bg-white/10 rounded-[30px] p-10"
              >

                <h3 className="text-2xl font-black">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="py-24 px-6 md:px-20 bg-[#f6f1e8]"
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

      </section>
      {/* REVIEWS */}
<section
  id="reviews"
  className="py-24 px-6 md:px-20 bg-white"
>

  <div className="max-w-7xl mx-auto text-center">

    <p className="uppercase tracking-[5px] text-[#C6923D] text-sm">
      Customer Reviews
    </p>

    <h2 className="mt-5 text-5xl md:text-6xl font-black">
      What Our Guests Say
    </h2>

    <p className="mt-6 text-[#5e5146] text-lg max-w-2xl mx-auto">
      Loved by travellers, food lovers,
      and families visiting Shimla & Shoghi.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      {[
        {
          name: "Rahul Sharma",
          review:
            "Amazing Himachali food and beautiful mountain atmosphere. Best Siddu in Shimla.",
        },

        {
          name: "Priya Verma",
          review:
            "Luxury interiors, pure veg food, and excellent hospitality. Highly recommended.",
        },

        {
          name: "Aman Thakur",
          review:
            "Authentic taste with premium café vibes. A must visit restaurant in Shoghi.",
        },
      ].map((item, index) => (

        <div
          key={index}
          className="bg-[#f6f1e8] rounded-[35px] p-10 shadow-xl text-left"
        >

          <div className="text-3xl">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="mt-6 text-lg leading-relaxed text-[#5e5146]">
            {item.review}
          </p>

          <h3 className="mt-8 text-2xl font-black">
            {item.name}
          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* INSTAGRAM */}
      <section
        id="instagram"
        className="py-24 px-6 md:px-20 bg-[#2B1F1A] text-white"
      >

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-[#C6923D] text-sm">
            Instagram
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-black">
            Follow Our Food Journey
          </h2>

          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Discover premium Himachali flavours,
            luxury dining vibes,
            and beautiful mountain moments.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {[
              "/images/siddu.png",
              "/images/momos.png",
              "/images/dham-thali.png",
            ].map((image, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-[35px] shadow-2xl"
              >

                <img
                  src={image}
                  alt="Instagram"
                  className="h-[420px] w-full object-cover hover:scale-110 transition duration-700"
                />

              </div>

            ))}

          </div>

          <a
            href="https://instagram.com/foodplazashoghi"
            target="_blank"
            className="inline-block mt-12 bg-[#C6923D] hover:bg-[#b98530] transition px-10 py-5 rounded-full text-lg font-bold"
          >
            Follow On Instagram
          </a>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative py-24 px-6 md:px-20 text-white overflow-hidden"
      >

        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
          alt="Restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-[#C6923D] text-sm">
              Contact Us
            </p>

            <h2 className="mt-5 text-5xl md:text-7xl font-black leading-tight">
              Visit FOOD PLAZA SHOGHI
            </h2>

            <p className="mt-8 text-lg text-white/80 leading-relaxed">
              Experience authentic Himachali vegetarian cuisine,
              luxury mountain dining,
              and unforgettable hospitality in the heart of Shoghi.
            </p>

            <div className="mt-10 space-y-6">

              <div>
                <h3 className="text-2xl font-bold">
                  📍 Address
                </h3>

                <p className="mt-2 text-white/70">
                  Alpine House Ashiana NH,
                  Shoghi, Shimla,
                  Himachal Pradesh
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  📞 Phone
                </h3>

                <p className="mt-2 text-white/70">
                  +91 9816055517
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  ✉️ Email
                </h3>

                <p className="mt-2 text-white/70">
                  foodplazashoghi@gmail.com
                </p>
              </div>

            </div>

          </div>

          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8 md:p-10">

            <h3 className="text-3xl font-black">
              Reserve A Table
            </h3>

            <div className="space-y-5 mt-8">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-5 rounded-2xl bg-white/10 border border-white/10 outline-none placeholder:text-white/60"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-5 rounded-2xl bg-white/10 border border-white/10 outline-none placeholder:text-white/60"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-5 rounded-2xl bg-white/10 border border-white/10 outline-none placeholder:text-white/60"
              ></textarea>

              <button className="w-full bg-[#C6923D] hover:bg-[#b98530] transition py-5 rounded-2xl text-lg font-bold">
                Book Now
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* MAP */}
<section className="py-24 px-6 md:px-20 bg-white">

  <div className="max-w-7xl mx-auto text-center">

    <p className="uppercase tracking-[5px] text-[#C6923D] text-sm">
      Find Us
    </p>

    <h2 className="mt-5 text-5xl md:text-6xl font-black">
      Visit FOOD PLAZA SHOGHI
    </h2>

    <div className="mt-16 overflow-hidden rounded-[35px] shadow-2xl">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.3275423041828!2d77.1301768!3d31.044980000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057eebc0e36033%3A0xe1b625fa3c16698f!2sFOOD%20PLAZA!5e0!3m2!1sen!2sin!4v1779793856135!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

    </div>

  </div>

</section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919816055517"
        target="_blank"
        className="fixed bottom-5 right-5 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl hover:scale-110 transition"
      >
        💬
      </a>

      {/* CALL */}
      <a
        href="tel:+919816055517"
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