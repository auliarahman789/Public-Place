import React from "react";

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
  return (
    <>
      <div className="relative ">
        {/* Main content with bgdot.jpg background */}

        <div className="w-full max-w-lg mx-auto font-bookmania">
          {/* SECTION 1: About Content */}
          <div className="px-[4%] py-[8%] bg-[#DAD5D2] min-h-screen flex flex-col ">
            {/* Title */}
            <div className="text-center mb-8 font-bookmania">
              <h1 className="text-[28px] font-semibold text-black mb-6">
                What is this about
              </h1>
            </div>

            {/* Main text content */}
            <div className="text-[18px] text-black space-x-[7%] leading-relaxed space-y-6 font-bookmania">
              <p>
                Let This Book Be Your Public Space is not meant to be finished —
                it's meant to be entered, wandered, and gently abandoned. It's a
                book that doesn't want to be read — it wants to be used.
              </p>
              <p>
                Part game, part toolkit, part poetic ritual, this book invites
                you to interact with the forgotten parts of your city: a park
                bench, a patch of light, a too-loud hallway, or the inside of a
                library shelf.
              </p>
              <p>
                Inside, you'll find characters who each offer their own lens on
                public space. Paired with them are quests — small actions,
                creative instructions, and soft disruptions — that invite you to
                reclaim your surroundings through presence, play, and invention.
              </p>
              <p>
                It's made for cities like Jakarta, where public space is rare —
                but imagination is not.
              </p>
            </div>
          </div>

          {/* SECTION 2: Author Section */}
          <div
            className="px-[4%] pt-8 pb-20 bg-cover bg-center bg-no-repeat min-h-screen flex flex-col "
            style={{
              backgroundImage: `url('/image 1.png')`,
              backgroundColor: "#87CEEB", // Sky blue fallback
            }}
          >
            {/* Author photo and info */}
            <div className="text-center mb-3">
              <img
                src="/jody agus.png"
                alt="Jody Agus"
                className="w-[170px] h-[190px] rounded-lg mx-auto mb-4"
                style={{ objectFit: "cover" }}
              />

              <h2 className="text-[20px] font-semibold text-black ">
                Jody Agus
              </h2>
              <p className="text-[20px] text-black ">Author</p>

              <a
                href="https://www.instagram.com/jodyyyagus/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="/igExport.png"
                  alt="Instagram"
                  className="w-24 mx-auto cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ objectFit: "contain" }}
                />
              </a>
            </div>

            {/* Support and description text */}
            <div className="text-left space-y-6 max-w-sm mx-auto font-bookmania">
              <div>
                <p className="text-[18px] text-black leading-relaxed">
                  Supported by: Locarno Film Festival's BaseCamp program. 2025
                </p>
                <p className="text-[18px] text-black leading-relaxed">
                  This book is a quiet invitation to reconnect with public life
                  — to reclaim space through play, presence, and imagination.
                </p>
              </div>
              <p className="text-[18px] text-black leading-relaxed">
                Created by Jody Agus
              </p>
              <p className="text-[18px] text-black leading-relaxed">
                With gratitude to: Selarashita Lufingga, Ayah, Bunda, Audie
                Agus, Anik, Justine Stella Knuchel, Francesco De Biasi, Stefano
                Knuchel, David, Micky, Timo, Yusra, Valerie, Aprille, Axel
                Putra, Giovanni Rahmadeva, Denys Prayoga, Iskandar Agung, Siera
                Tamihardja, Shahriza Rijadi, Dhiwangkara Seta, Michelle Natania,
                Adhitya Fei, Andhika Dwivanara, Nadira Syafiqa, Izzi Husaini,
                and the BaseCamp team — for believing in gentle things. And to
                the streets of Jakarta, for their noise, chaos, beauty, and
                contradiction. To the benches, the shadows, the strangers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
