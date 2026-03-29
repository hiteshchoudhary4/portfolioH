"use client";
import React, { useState } from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-20 w-full" id="certificates">
      <h1 className="heading">
        My <span className="text-purple">certificates</span>
      </h1>

      <div className="w-full mt-12 flex overflow-x-auto gap-8 snap-x snap-mandatory py-4" style={{ scrollbarWidth: 'none' }}>
        {workExperience.map((card) => (
          <Button
            key={card.id}
            onClick={() => setSelectedImage(card.thumbnail)}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-shrink-0 snap-center w-full min-w-full text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-full h-auto max-h-[50vh] lg:max-h-[65vh] object-contain rounded-lg shadow-lg"
              />
              <div className="lg:ms-5 text-center mt-4">
                <h1 className="text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button 
              className="absolute -top-12 right-0 md:-right-8 text-white text-4xl hover:text-gray-300 z-[10000]"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Certificate Full Size" 
              className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
