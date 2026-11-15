
import { useState, useEffect } from "react";
import {
  Heart,
  Flower2,
  Sparkles,
  CalendarDays,
  MapPin,
  Clock,
  Music2,
  Camera,
  ArrowDown,
  X,
  ChevronRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const weddingDate = new Date("2027-01-02T18:00:00");

const gallery = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900",
];

function Petals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="absolute -top-10 animate-petal-fall opacity-70"
          style={{
            left: `${(i * 41) % 100}%`,
            animationDelay: `${-(i % 12)}s`,
            animationDuration: `${9 + (i % 7)}s`,
          }}
        >
          {i % 2 === 0 ? "🌹" : "🌸"}
        </span>
      ))}
    </div>
  );
}

function OrnamentalCorner({ position }) {
  return (
    <div
      className={`pointer-events-none absolute ${position} text-[#b5a27e]/40`}
    >
      <Flower2 size={75} strokeWidth={0.7} />
      <Flower2
        size={45}
        strokeWidth={0.7}
        className="absolute left-8 top-10 rotate-45"
      />
    </div>
  );
}

function App() {
  const [opened, setOpened] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});
  const [activeImage, setActiveImage] = useState(null);
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("2");
  const [attendance, setAttendance] = useState("Yes, I will attend");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
    });
  }, []);

  useEffect(() => {
    const update = () => {
      const diff = Math.max(weddingDate.getTime() - Date.now(), 0);

      setTimeLeft({
        Days: Math.floor(diff / 86400000),
        Hours: Math.floor((diff / 3600000) % 24),
        Minutes: Math.floor((diff / 60000) % 60),
        Seconds: Math.floor((diff / 1000) % 60),
      });
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const submitRSVP = (e) => {
    e.preventDefault();

    const text = `Wedding Invitation RSVP ❤️
Name: ${name}
Guests: ${guests}
Attendance: ${attendance}
Message: ${message}`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const revealInvitation = () => {
    setOpened(true);
    setTimeout(() => {
      document.getElementById("invitation")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 400);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#3b0719] text-[#563c2b]">
      <Petals />

      {/* ENVELOPE OPENING SCREEN */}
      <section
        className={`relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12 transition-all duration-1000 ${
          opened ? "min-h-[450px]" : ""
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#7b2037_0%,_#3b0719_75%)]" />

        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/black-scales.png')",
          }}
        />

        <div className="relative z-10 w-full max-w-[390px]">
          <div
            className={`relative mx-auto transition-all duration-1000 ${
              opened ? "scale-90 opacity-0 -translate-y-16 pointer-events-none" : ""
            }`}
          >
            {/* CARD */}
            <div className="relative aspect-[0.62] overflow-hidden rounded-[12px] border-[7px] border-[#d9ceb6] bg-[#f4efe2] shadow-[0_20px_70px_rgba(0,0,0,0.65)]">

              {/* Paper texture */}
              <div className="absolute inset-0 bg-[radial-gradient(#c6b99e_0.5px,transparent_0.5px)] [background-size:5px_5px] opacity-20" />

              {/* Inner border */}
              <div className="absolute inset-2 rounded-[5px] border border-[#c5b58e]/50" />

              {/* Floral corners */}
              <OrnamentalCorner position="left-3 top-3" />
              <div className="absolute right-3 top-3 rotate-90">
                <OrnamentalCorner position="left-0 top-0" />
              </div>
              <div className="absolute bottom-3 left-3 -rotate-90">
                <OrnamentalCorner position="left-0 top-0" />
              </div>
              <div className="absolute bottom-3 right-3 rotate-180">
                <OrnamentalCorner position="left-0 top-0" />
              </div>

              {/* Top heading */}
              <div className="absolute left-0 right-0 top-[26%] z-10 text-center">
                <p className="font-serif text-[10px] uppercase tracking-[0.3em] text-[#968466]">
                  Tap to reveal
                </p>
                <Sparkles className="mx-auto mt-2 text-[#b39b6a]" size={15} />
              </div>

              {/* Envelope flap */}
              <div
                className="absolute inset-x-0 top-0 z-20 h-[57%] origin-top bg-gradient-to-b from-[#fffdf5] to-[#e8dfcb] shadow-[0_9px_12px_rgba(91,65,40,0.18)]"
                style={{
                  clipPath: "polygon(0 0,100% 0,100% 0%,50% 100%,0 0%)",
                }}
              >
                <div className="absolute inset-3 border-t border-[#c9b994]/50" />
              </div>

              {/* Wax seal */}
              <button
                onClick={revealInvitation}
                aria-label="Open wedding invitation"
                className="absolute left-1/2 top-[53%] z-30 flex h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-[#7b1b29] bg-gradient-to-br from-[#a52d3c] via-[#650c20] to-[#3f0613] shadow-[0_8px_15px_rgba(0,0,0,0.45)] transition duration-500 hover:scale-110 active:scale-95"
              >
                <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full border border-[#d3a77c] text-5xl shadow-inner">
                  🕉️
                </div>
                <span className="absolute -bottom-7 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.3em] text-[#806d4c]">
                  Click to open
                </span>
              </button>

              {/* Bottom invitation title */}
              <div className="absolute bottom-[10%] left-0 right-0 z-10 px-5 text-center">
                <div className="mb-3 flex items-center justify-center gap-3 text-[#b09a70]">
                  <span className="h-px w-8 bg-[#b09a70]" />
                  <Flower2 size={16} />
                  <span className="h-px w-8 bg-[#b09a70]" />
                </div>

                <h1 className="font-serif text-3xl font-semibold text-[#8d744d]">
                  शुभ विवाह
                </h1>

                <p className="mt-3 text-[10px] leading-5 text-[#89785b]">
                  सपरिवार शुभ विवाह समारोह में
                  <br />
                  पधारकर हमें अनुग्रहित करें।
                </p>

                <Sparkles className="mx-auto mt-3 text-[#b09a70]" size={14} />
              </div>

              {/* Decorative envelope lines */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[45%]">
                <div className="absolute inset-0 border-b border-[#c2b28d]/40"
                  style={{
                    clipPath: "polygon(0 0,50% 55%,100% 0,100% 100%,0 100%)",
                  }}
                />
              </div>
            </div>

            <p className="mt-9 text-center font-serif text-sm italic tracking-widest text-[#e8c99c]">
              A little surprise awaits you...
            </p>
          </div>
        </div>

        {/* Revealed card transition */}
        {opened && (
          <div className="absolute inset-0 z-20 flex items-center justify-center px-5">
            <div className="text-center text-[#f5dfb8]" data-aos="zoom-in">
              <Sparkles className="mx-auto mb-5" size={35} />
              <p className="font-serif text-xl italic">
                A beautiful beginning...
              </p>
              <h2 className="mt-3 font-serif text-4xl">
                You Are Invited
              </h2>
              <p className="mt-4 text-xs uppercase tracking-[0.4em]">
                Ashdeep & Dilmeet
              </p>
              <a
                href="#invitation"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#e6c99c] px-7 py-3 text-xs uppercase tracking-widest transition hover:bg-[#e6c99c] hover:text-[#3b0719]"
              >
                View Invitation <ChevronRight size={16} />
              </a>
            </div>
          </div>
        )}
      </section>

      {/* MAIN INVITATION */}
      <div
        className={`transition-all duration-1000 ${
          opened
            ? "translate-y-0 opacity-100"
            : "pointer-events-none h-0 translate-y-16 overflow-hidden opacity-0"
        }`}
      >
        {/* WELCOME */}
        <section
          id="invitation"
          className="relative bg-[#f6efe1] px-5 py-24 text-center"
        >
          <div className="absolute inset-3 border border-[#c6ad7d]/50" />

          <Flower2 className="mx-auto mb-6 text-[#aa8b58]" size={35} />

          <p className="text-xs uppercase tracking-[0.4em] text-[#a18556]">
            With the blessings of our families
          </p>

          <h2 className="mt-7 font-serif text-4xl text-[#775532] md:text-6xl">
            शुभ विवाह
          </h2>

          <p className="mx-auto mt-7 max-w-xl font-serif text-lg leading-9 text-[#806c51]">
            ईश्वर एवं अपने परिवार के आशीर्वाद से
            <br />
            हम अपने जीवन की नई शुरुआत करने जा रहे हैं।
            <br />
            इस शुभ अवसर पर आपकी उपस्थिति
            <br />
            हमारे लिए अत्यंत सौभाग्य की बात होगी।
          </p>

          <div className="my-10 flex items-center justify-center gap-4 text-[#b08e5a]">
            <span className="h-px w-16 bg-[#b08e5a]" />
            <Heart size={20} />
            <span className="h-px w-16 bg-[#b08e5a]" />
          </div>

          <h3 className="font-wedding text-5xl text-[#8b3a48] md:text-7xl">
            Ashdeep & Dilmeet
          </h3>

          <p className="mt-5 text-xs uppercase tracking-[0.4em] text-[#a18556]">
            02 January 2027
          </p>
        </section>

        {/* HERO PHOTO */}
        <section
          className="relative flex min-h-[75vh] items-center justify-center bg-cover bg-center px-5 py-24 text-center text-white"
          style={{
            backgroundImage:
              "linear-gradient(#350c1d88,#350c1dcc),url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1800')",
          }}
        >
          <div data-aos="zoom-in">
            <Flower2 className="mx-auto mb-7 text-[#e8c99c]" size={35} />
            <p className="font-serif text-2xl italic text-[#f0d9b6]">
              Together Forever
            </p>
            <h2 className="mt-6 font-wedding text-6xl md:text-8xl">
              Ashdeep
            </h2>
            <Heart className="mx-auto my-4 fill-rose-400 text-rose-400" />
            <h2 className="font-wedding text-6xl md:text-8xl">
              Dilmeet
            </h2>
            <p className="mt-8 text-xs uppercase tracking-[0.4em] text-[#e8c99c]">
              02 January 2027
            </p>
          </div>
        </section>

        {/* COUPLE */}
        <section className="bg-[#f6efe1] px-5 py-24">
          <div className="mb-14 text-center" data-aos="fade-up">
            <p className="text-xs uppercase tracking-[0.4em] text-[#aa8b58]">
              Made for each other
            </p>
            <h2 className="mt-4 font-serif text-4xl text-[#775532] md:text-6xl">
              The Happy Couple
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-14 md:grid-cols-2">
            {[
              {
                name: "Dilmeet",
                role: "The Bride",
                image:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700",
              },
              {
                name: "Ashdeep",
                role: "The Groom",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700",
              },
            ].map((person, i) => (
              <div
                key={person.name}
                className="text-center"
                data-aos={i === 0 ? "fade-right" : "fade-left"}
              >
                <div className="mx-auto mb-7 h-64 w-64 rounded-full border-[7px] border-[#d6c49e] p-2 shadow-xl">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="font-wedding text-5xl text-[#8b3a48]">
                  {person.name}
                </h3>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#a18556]">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* COUNTDOWN */}
        <section className="bg-[#420d24] px-5 py-24 text-center text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-[#e8c99c]">
            Save the date
          </p>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl">
            Counting Every Moment
          </h2>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-[#d6b783]/40 bg-white/5 p-7"
              >
                <p className="font-serif text-5xl text-[#e8c99c]">
                  {String(value ?? 0).padStart(2, "0")}
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-white/70">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EVENTS */}
        <section className="bg-[#f6efe1] px-5 py-24">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#aa8b58]">
              Join our celebration
            </p>
            <h2 className="mt-4 font-serif text-4xl text-[#775532] md:text-6xl">
              Wedding Events
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-7 md:grid-cols-2">
            {[
              { name: "Wedding Ceremony", icon: Flower2 },
              { name: "Wedding Celebration", icon: Music2 },
            ].map((event) => {
              const Icon = event.icon;
              return (
                <div
                  key={event.name}
                  className="border border-[#cbb78e] bg-[#fffaf1] p-9 text-center shadow-lg"
                >
                  <Icon className="mx-auto mb-5 text-[#a18556]" size={35} />
                  <h3 className="font-serif text-3xl text-[#775532]">
                    {event.name}
                  </h3>
                  <p className="mt-5 text-sm text-[#9b7951]">
                    Saturday, 02 January 2027
                  </p>
                  <p className="mt-5 flex items-center justify-center gap-2 text-sm text-[#806c51]">
                    <Clock size={16} /> Time to be announced
                  </p>
                  <p className="mt-3 flex items-center justify-center gap-2 text-sm text-[#806c51]">
                    <MapPin size={16} /> Venue to be announced
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* GALLERY */}
        <section className="bg-[#eee3d2] px-5 py-24">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#aa8b58]">
              Beautiful Memories
            </p>
            <h2 className="mt-4 font-serif text-4xl text-[#775532] md:text-6xl">
              Wedding Gallery
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((image, i) => (
              <button
                key={image}
                onClick={() => setActiveImage(image)}
                className="aspect-[4/5] overflow-hidden border-4 border-[#fffaf1] shadow-lg"
                data-aos="zoom-in"
              >
                <img
                  src={image}
                  alt={`Wedding ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-110"
                />
              </button>
            ))}
          </div>
        </section>

        {/* RSVP */}
        <section className="bg-[#f6efe1] px-5 py-24">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#aa8b58]">
              We would love to see you
            </p>
            <h2 className="mt-4 font-serif text-5xl text-[#775532]">
              RSVP
            </h2>
          </div>

          <form
            onSubmit={submitRSVP}
            className="mx-auto max-w-xl border border-[#cbb78e] bg-[#fffaf1] p-7 shadow-xl md:p-10"
          >
            <label className="mb-2 block text-sm">Your Name *</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mb-6 w-full border border-[#d6c49e] bg-white px-4 py-3 outline-none focus:border-[#8b3a48]"
            />

            <label className="mb-2 block text-sm">Number of Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="mb-6 w-full border border-[#d6c49e] bg-white px-4 py-3 outline-none"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>

            <label className="mb-2 block text-sm">Will you attend?</label>
            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="mb-6 w-full border border-[#d6c49e] bg-white px-4 py-3 outline-none"
            >
              <option>Yes, I will attend</option>
              <option>Sorry, I cannot attend</option>
            </select>

            <label className="mb-2 block text-sm">Your Message</label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your lovely wishes..."
              className="mb-7 w-full resize-none border border-[#d6c49e] bg-white px-4 py-3 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-[#651b32] px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#9a4051]"
            >
              Send RSVP ❤️
            </button>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#36091d] px-5 py-20 text-center text-white">
          <Flower2 className="mx-auto mb-6 text-[#e8c99c]" size={35} />
          <p className="text-xs uppercase tracking-[0.4em] text-[#e8c99c]">
            Forever Begins Here
          </p>
          <h2 className="mt-7 font-wedding text-6xl md:text-8xl">
            Ashdeep & Dilmeet
          </h2>
          <p className="mt-7 text-sm tracking-[0.3em] text-[#e8c99c]">
            02 · 01 · 2027
          </p>
          <Heart className="mx-auto mt-8 fill-rose-400 text-rose-400" />
          <p className="mt-8 text-xs text-white/50">
            Made with love for a beautiful beginning ❤️
          </p>
        </footer>
      </div>

      {/* IMAGE PREVIEW */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-5"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="absolute right-5 top-5 text-white"
            onClick={() => setActiveImage(null)}
          >
            <X size={30} />
          </button>
          <img
            src={activeImage}
            alt="Wedding"
            className="max-h-[85vh] max-w-full rounded-xl object-contain"
          />
        </div>
      )}
    </main>
  );
}

export default App;
