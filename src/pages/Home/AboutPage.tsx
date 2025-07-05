import React from "react";

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Main content with bgdot.jpg background */}

        <div className="w-full max-w-lg mx-auto  font-bookmania">
          {/* Main content area with sky background */}
          <div className="px-[4%] py-[8%] bg-[#DAD5D2]">
            {/* Title */}
            <div className="text-center mb-10 font-bookmania">
              <h1 className="text-[21px] font-semibold text-black mb-8">
                What is this about
              </h1>
            </div>

            {/* Main text content */}
            <div className="text-[16px] text-black space-x-[7%] leading-relaxed space-y-4 font-bookmania">
              <p>
                Let This Book Be Your Public Space is not meant to be finished —
                it’s meant to be entered, wandered, and gently abandoned. It’s a
                book that doesn’t want to be read — it wants to be used.
              </p>
              <p>
                Part game, part toolkit, part poetic ritual, this book invites
                you to interact with the forgotten parts of your city: a park
                bench, a patch of light, a too-loud hallway, or the inside of a
                library shelf.
              </p>
              <p>
                Inside, you’ll find characters who each offer their own lens on
                public space. Paired with them are quests — small actions,
                creative instructions, and soft disruptions — that invite you to
                reclaim your surroundings through presence, play, and invention.
              </p>
              <p>
                {" "}
                It’s made for cities like Jakarta, where public space is rare —
                but imagination is not.
              </p>
            </div>
          </div>

          {/* Support section */}
          <div className="text-center">
            {/* Author photo and info */}
            <div className="mt-8 text-center">
              <div className="inline-block bg-white p-2 rounded-lg shadow-md">
                <img
                  src="/author-photo.jpg"
                  alt="Author"
                  className="w-20 h-20 rounded-lg mx-auto mb-2"
                  style={{ objectFit: "cover" }}
                />
                <p className="text-xs font-semibold text-black">Author Name</p>
              </div>
            </div>

            {/* Bottom text */}
            <div className="mt-8 text-center">
              <p className="text-xs text-black italic">
                "Let This Book Be Your Public Space"
              </p>
              <p className="text-xs text-black mt-2">
                A collaborative journey through stories, thoughts, and shared
                experiences.
              </p>
            </div>
            <p
              className="text-[16px] text-black mb-4"
              style={{
                textShadow:
                  "0.3px 0.3px 0 #999, -0.3px -0.3px 0 #999, 0.3px -0.3px 0 #999, -0.3px 0.3px 0 #999",
              }}
            >
              This project is supported by
            </p>
            <div className="flex justify-center items-center space-x-4">
              <img src="/loco.png" alt="Loco" className="w-[82px] h-[22px]" />
              <img
                src="/basecamp.png"
                alt="Basecamp"
                className="w-[118px] h-[22px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
