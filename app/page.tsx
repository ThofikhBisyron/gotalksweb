import Image from "next/image";
import { title } from "process";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#0f0f1a] to-[#05050c] text-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            GoTalks <br />
            <span className="text-violet-400">
              Connect Instantly. Communicate Seamlessly.
            </span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl">
            GoTalks is a scalable real-time chat application supporting private messaging, group conversations, voice & video calls, and push notifications.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/ThofikhBisyron/gotalksweb/releases/download/Gotalks/gotalks.preview.apk"
              download
              className="bg-violet-600 hover:bg-violet-700 transition px-6 py-3 rounded-xl font-semibold"
            >
              Download APK
            </a>

            <a
              href="https://github.com/ThofikhBisyron/native-gotalks"
              target="_blank"
              className="border border-white/20 hover:bg-white/10 transition px-6 py-3 rounded-xl"
            >
              Source Code
            </a>
          </div>
        </div>

        {/* Mockup / Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/preview_1.jpeg"
            alt="GoTalks App Preview"
            width={320}
            height={640}
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Architecture
        </h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto">
          The backend is built with Node.js and Express, using PostgreSQL as the database.
          Authentication is implemented using custom Email OTP (via Nodemailer) and Google OAuth,
          secured with JWT-based session management.
          Real-time communication is handled via WebSocket, and push notifications
          are powered by Firebase Cloud Messaging (FCM).
        </p>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Real-time Chat",
              desc: "WebSocket-based real-time messaging for instant communication.",
            },
            {
              title: "Group & Private Chat",
              desc: "Supports both private and group conversations with admin role management.",
            },
            {
              title: "Real-time Voice & Video Call",
              desc: "Real-time voice and video calls powered by WebRTC."
            },
            {
              title: "Secure Authentication",
              desc: "Email & Google Sign-In using OAuth 2.0 with JWT-based authentication.",
            },
            {
              title: "Secure Email OTP Authentication",
              desc: "Custom email-based OTP authentication using Nodemailer with JWT session management.",
            }
            // {
            //   title: "Read Receipts",
            //   desc: "Mengetahui pesan sudah dibaca oleh siapa.",
            // },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-black/30 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Tech Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Node Express.js",
              "PostgreSQL",
              "WebSocket",
              "WebRTC",
              "React Native",
              "Expo",
              "Firebase FCM",
              "Google OAuth 2.0",
              "JWT Authentication",
              "Nodemailer",
              "Email OTP Authentication",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} GoTalks — Built by Thofikh
      </footer>
    </main>
  );
}
