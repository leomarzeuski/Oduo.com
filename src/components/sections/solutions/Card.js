import React, { useState } from 'react'

    export default function Card({ children, icon: Icon, title }) {
        const [isHovered, setIsHovered] = useState(false);
      
        return (
          <div
            className="h-[15rem] md:h-[18rem] lg:h-[12rem] p-4 flex flex-col justify-between rounded-md shadow-sm bg-primary hover:bg-white lg:odd:mt-[-3rem]"
            data-aos="zoom-out"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="w-10 h-12 flex items-center justify-center">
              <Icon
                className={`w-6 h-6 ${isHovered ? "text-primary" : "text-white"}`}
              />
            </div>
            <div className="h-full pt-4">
              <h3
                className={`mb-4 text-xl font-bold ${
                  isHovered ? "text-black" : "text-white"
                }`}
              >
                {title}
              </h3>
              <p
                className={`${
                  isHovered ? "text-gray" : "text-[#ededed]"
                } font-semibold`}
              >
                {children}
              </p>
            </div>
          </div>
        );
      }
      
