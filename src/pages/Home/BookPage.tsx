import React from "react";

interface BookPageProps {
  onBack: () => void;
}

const BookPage: React.FC<BookPageProps> = ({}) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main content with bgdot.jpg background */}
      <div className="py-8 bg-[#DAD5D2] min-h-screen flex flex-col">
        <div className="w-full mx-auto  pt-4 font-bookmania space-y-[6%]">
          {/* Title */}
          <div className="text-center mb-8 px-[20%]">
            <h1 className="text-[42px] font-bold text-black">
              Closer Look of the Book
            </h1>
          </div>

          {/* Book Images - Magazine Style Layout */}
          <div className="">
            {/* First image - full width */}
            <div className="w-full">
              <img
                src="/book1.png"
                alt="Book Page 1"
                className="w-full h-auto object-cover "
              />
            </div>

            {/* Second and third images - side by side */}
            <div className="flex ">
              <div className="w-1/2">
                <img
                  src="/book2.png"
                  alt="Book Page 2"
                  className="w-full h-auto object-cover "
                />
              </div>
              <div className="w-1/2">
                <img
                  src="/book3.png"
                  alt="Book Page 3"
                  className="w-full h-auto object-cover "
                />
              </div>
            </div>

            {/* Fourth image - full width */}
            <div className="w-full">
              <img
                src="/book4.png"
                alt="Book Page 4"
                className="w-full h-auto object-cover "
              />
            </div>

            {/* Second and third images - side by side */}
            <div className="flex ">
              <div className="w-1/2">
                <img
                  src="/book5.png"
                  alt="Book Page 2"
                  className="w-full h-auto object-cover "
                />
              </div>
              <div className="w-1/2">
                <img
                  src="/book6.png"
                  alt="Book Page 3"
                  className="w-full h-auto object-cover "
                />
              </div>
            </div>
          </div>

          {/* Footer spacing */}
          <div className="mt-16"></div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
