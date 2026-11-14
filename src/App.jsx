
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Heart,
  CalendarDays,
  MapPin,
  Clock,
  Flower2,
  Camera,
  Music2,
  Instagram,
  CheckCircle2,
  Send,
  Sparkles,
} from "lucide-react";

const weddingDate = new Date("2027-01-02T18:00:00");

const gallery = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900",
];

const petals = [
  "left-[2%] [animation-delay:-2s]",
  "left-[7%] [animation-delay:-8s]",
  "left-[12%] [animation-delay:-4s]",
  "left-[17%] [animation-delay:-10s]",
  "left-[22%] [animation-delay:-1s]",
  "left-[27%] [animation-delay:-6s]",
  "left-[32%] [animation-delay:-3s]",
  "left-[37%] [animation-delay:-9s]",
  "left-[42%] [animation-delay:-5s]",
  "left-[47%] [animation-delay:-11s]",
  "left-[52%] [animation-delay:-2s]",
  "left-[57%] [animation-delay:-7s]",
  "left-[62%] [animation-delay:-4s]",
  "left-[67%] [animation-delay:-10s]",
  "left-[72%] [animation-delay:-1s]",
  "left-[77%] [animation-delay:-6s]",
  "left-[82%] [animation-delay:-3s]",
  "left-[87%] [animation-delay:-9s]",
  "left-[92%] [animation-delay:-5s]",
  "left-[97%] [animation-delay:-11s]",
  "left-[15%] [animation-delay:-7s]",
  "left-[45%] [animation-delay:-3s]",
  "left-[75%] [animation-delay:-8s]",
  "left-[88%] [animation-delay:-1s]",
];

function Petals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {petals.map((position, index) => (
        <span
          key={index}
          className={`absolute top-[-10%] ${position} animate-petal-fall text-xl text-rose-400 opacity-80`}
        >
          🌹
        </span>
      ))}
    </div>
  );
}

function Heading({ subtitle, title }) {
  return (
    <div className="mb-12 text-center" data-aos="fade-up">
      <p className="mb-3 font-serif text-sm uppercase tracking-[0.35em] text-rose-500">
        {subtitle}
      </p>
      <h2 className="font-wedding text-4xl text-rose-950 md:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 flex items-center justify-center gap-3 text-rose-400">
        <span className="h-px w-12 bg-rose-300" />
        <Flower2 size={20} />
        <span className="h-px w-12 bg-rose-300" />
      </div>
    </div>
  );
}

function App() {
  const [timeLeft, setTimeLeft] = useState({});
  const [guestName, setGuestName] = useState("");
  const [guests, setGuests] = useState("2");
  const [attendance, setAttendance] = useState("Yes, I will attend");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 70,
    });

    const refreshAOS = () => AOS.refresh();
    window.addEventListener("load", refreshAOS);

    return () => window.removeEventListener("load", refreshAOS);
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const distance = weddingDate.getTime() - Date.now();
      const safeDistance = Math.max(distance, 0);

      setTimeLeft({
        days: Math.floor(safeDistance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((safeDistance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((safeDistance / (1000 * 60)) % 60),
        seconds: Math.floor((safeDistance / 1000) % 60),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const submitRSVP = (event) => {
    event.preventDefault();

    const text = `Wedding RSVP 💍
Name: ${guestName}
Guests: ${guests}
Attendance: ${attendance}
Message: ${message}`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const countdownItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf7] font-sans text-rose-950">
      <Petals />

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-5 py-24 text-center"
        style={{
          backgroundImage:
            "linear-gradient(#260b1b70,#260b1b80),url('https://images.unsplash.com/photo-1519741497674-611481863552?w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

        <div className="relative z-10 mx-auto max-w-4xl text-white">
          <p
            className="mb-8 text-sm uppercase tracking-[0.5em] text-rose-100"
            data-aos="fade-down"
          >
            Together with their families
          </p>

          <div data-aos="zoom-in">
            <p className="mb-3 font-serif text-3xl italic text-rose-200">
              We are getting married
            </p>
            <h1 className="font-wedding text-6xl leading-tight md:text-8xl">
              Ashdeep
            </h1>
            <div className="my-3 flex items-center justify-center gap-5">
              <span className="h-px w-16 bg-rose-200" />
              <Heart className="fill-rose-300 text-rose-300" size={30} />
              <span className="h-px w-16 bg-rose-200" />
            </div>
            <h1 className="font-wedding text-6xl leading-tight md:text-8xl">
              Dilmeet
            </h1>
          </div>

          <p
            className="mt-9 text-sm uppercase tracking-[0.35em] text-rose-100 md:text-base"
            data-aos="fade-up"
          >
            02 January 2027
          </p>

          <a
            href="#invitation"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/70 px-8 py-4 text-sm uppercase tracking-[0.2em] transition duration-300 hover:border-rose-300 hover:bg-rose-500 hover:text-white"
            data-aos="fade-up"
          >
            Explore Invitation <Heart size={17} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll down</span>
        </div>
      </section>

      {/* INVITATION */}
      <section
        id="invitation"
        className="relative px-5 py-24 md:py-32"
      >
        <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
          <Sparkles className="mx-auto mb-6 text-rose-400" size={34} />

          <p className="mb-5 font-serif text-sm uppercase tracking-[0.35em] text-rose-500">
            A beautiful beginning
          </p>

          <h2 className="font-wedding text-4xl leading-tight text-rose-950 md:text-6xl">
            Two Hearts, One Beautiful Journey
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-rose-900/70 md:text-lg">
            With the blessings of our families and the love of our dear ones,
            we invite you to celebrate the beginning of our forever.
            Your presence will make our special day even more memorable.
          </p>

          <div className="mt-12 flex justify-center">
            <Heart className="fill-rose-300 text-rose-300" size={30} />
          </div>
        </div>
      </section>

      {/* COUPLE */}
      <section className="bg-[#f9eeeb] px-5 py-24">
        <Heading subtitle="Made for each other" title="The Happy Couple" />

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div className="text-center" data-aos="fade-right">
            <div className="mx-auto mb-6 h-72 w-72 overflow-hidden rounded-full border-[10px] border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700"
                alt="Bride"
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>
            <h3 className="font-wedding text-4xl">Dilmeet</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-rose-500">
              The Bride
            </p>
          </div>

          <div className="text-center" data-aos="fade-left">
            <div className="mx-auto mb-6 h-72 w-72 overflow-hidden rounded-full border-[10px] border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700"
                alt="Groom"
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>
            <h3 className="font-wedding text-4xl">Ashdeep</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-rose-500">
              The Groom
            </p>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="relative overflow-hidden bg-rose-950 px-5 py-24 text-white">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-rose-700/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-rose-200">
            Save the date
          </p>
          <h2 className="mb-12 font-wedding text-4xl md:text-6xl">
            Counting Every Moment
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-7">
            {countdownItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/20"
                data-aos="zoom-in"
              >
                <p className="font-wedding text-5xl text-rose-200 md:text-6xl">
                  {String(item.value ?? 0).padStart(2, "0")}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="px-5 py-24">
        <Heading subtitle="Join our celebration" title="Wedding Events" />

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div
            className="group rounded-3xl border border-rose-100 bg-white p-9 text-center shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            data-aos="fade-right"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-600 transition group-hover:bg-rose-600 group-hover:text-white">
              <Flower2 size={30} />
            </div>
            <h3 className="font-wedding text-3xl">Wedding Ceremony</h3>
            <p className="mt-4 text-sm text-rose-700">Saturday, 02 January 2027</p>
            <div className="mt-7 space-y-4 text-sm text-rose-950/70">
              <p className="flex items-center justify-center gap-3">
                <Clock size={17} /> Time to be announced
              </p>
              <p className="flex items-center justify-center gap-3">
                <MapPin size={17} /> Venue details to be announced
              </p>
            </div>
          </div>

          <div
            className="group rounded-3xl border border-rose-100 bg-white p-9 text-center shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            data-aos="fade-left"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-600 transition group-hover:bg-rose-600 group-hover:text-white">
              <Music2 size={30} />
            </div>
            <h3 className="font-wedding text-3xl">Wedding Celebration</h3>
            <p className="mt-4 text-sm text-rose-700">Saturday, 02 January 2027</p>
            <div className="mt-7 space-y-4 text-sm text-rose-950/70">
              <p className="flex items-center justify-center gap-3">
                <Clock size={17} /> Time to be announced
              </p>
              <p className="flex items-center justify-center gap-3">
                <MapPin size={17} /> Venue details to be announced
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#f9eeeb] px-5 py-24">
        <Heading subtitle="Beautiful memories" title="Wedding Gallery" />

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {gallery.map((image, index) => (
            <div
              key={image}
              data-aos="zoom-in"
              data-aos-delay={index * 80}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={image}
                alt={`Wedding gallery ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-rose-950/0 transition duration-500 group-hover:bg-rose-950/30">
                <Camera
                  className="scale-0 text-white transition duration-500 group-hover:scale-100"
                  size={35}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="px-5 py-24">
        <Heading subtitle="We would love to see you" title="RSVP" />

        <form
          onSubmit={submitRSVP}
          className="mx-auto max-w-2xl rounded-3xl border border-rose-100 bg-white p-7 shadow-xl md:p-12"
          data-aos="fade-up"
        >
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-rose-950">
              Your Name
            </label>
            <input
              required
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-rose-200 bg-rose-50/50 px-5 py-4 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-rose-950">
              Number of Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full rounded-xl border border-rose-200 bg-rose-50/50 px-5 py-4 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-rose-950">
              Will you attend?
            </label>
            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="w-full rounded-xl border border-rose-200 bg-rose-50/50 px-5 py-4 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
            >
              <option>Yes, I will attend</option>
              <option>Sorry, I cannot attend</option>
            </select>
          </div>

          <div className="mb-8">
            <label className="mb-2 block text-sm font-semibold text-rose-950">
              Your Message
            </label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your wishes..."
              className="w-full resize-none rounded-xl border border-rose-200 bg-rose-50/50 px-5 py-4 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-rose-700 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-rose-800 hover:shadow-xl"
          >
            Send RSVP <Send size={18} />
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-rose-950 px-5 py-16 text-center text-white">
        <Heart className="mx-auto mb-5 fill-rose-300 text-rose-300" size={35} />
        <h2 className="font-wedding text-4xl md:text-5xl">
          Ashdeep & Dilmeet
        </h2>
        <p className="mt-5 text-sm tracking-[0.25em] text-rose-200">
          02 · 01 · 2027
        </p>
        <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-white/60">
          Thank you for being a part of our beautiful journey.
          We look forward to celebrating with you.
        </p>
        <div className="mt-8 flex justify-center gap-5 text-rose-200">
          <Instagram size={20} />
          <CalendarDays size={20} />
          <CheckCircle2 size={20} />
        </div>
        <p className="mt-10 text-xs text-white/40">
          Made with love ❤️
        </p>
      </footer>
    </main>
  );
}

export default App;
