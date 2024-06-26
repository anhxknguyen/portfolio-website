/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import BackToExperience from "../../Components/buttons/BackToExperience";
import { useState } from "react";

const TA = () => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    if (width <= 1184) {
      document.getElementById("csc-title").style.fontSize = "1.875rem";
    } else {
      document.getElementById("csc-title").style.fontSize = "3rem";
    }
  });

  return (
    <div>
      <BackToExperience />
      <div className="flex flex-col items-center justify-center w-full gap-6 px-0 px-5 pt-6 mt-5 lg:items-start msm:mt-2 sm:px-5 lg:mt-0 sm:pt-16">
        <div>
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateX(-20px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateX(0px)",
              transition: { delay: 0.1, duration: 0.25 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            className="flex flex-col w-full gap-3 text-center font-neueBold msm:text-xl sm:text-3xl lg:text-5xl lg:items-start"
          >
            <h1 id="csc-title">CSC 171 Workshop Teaching Assistant</h1>
            <p className="text-lg text-center font-neueBold lg:text-start sm:text-xl">
              Skills: Java, Leadership
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            transform: "translateX(-20px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateX(0px)",
            transition: { delay: 0.2, duration: 0.25 },
          }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          className="flex flex-col gap-3 lg:w-2/3 sm:text-lg"
        >
          <p className="leading-relaxed">
            During my time as a workshop TA, I was responsible for leading two
            groups of 12-15 students in a 75 minutes weekly workshop/recitation
            session. In these sessions, I assisted students in solving complex
            object-oriented programming problems and reviewed key programming
            concepts in the Java programming language.
          </p>
          <p className="leading-relaxed">
            As a workshop TA, I was also responsible for conducting a
            semester-long research project on how to improve on the
            effectiveness of the current workshop program. I worked alongside
            Sherry Zhao, a friend and fellow workshop TA, to identify whether or
            not icebreaker activities increased student engagement. You can read
            more about it here:{" "}
            <a
              className="underline text-amber-300 hover:text-amber-700"
              href="https://sites.google.com/u.rochester.edu/icebreakers/home"
            >
              Workshop Research Project
            </a>
          </p>
          <p>
            Working as a workshop TA not only allowed me to continue to hone my
            programming and leadership skills, but it also allowed me to create
            valuable bonds with both my students and fellow TAs. I have had the
            honor of leading not one, but two groups of hard-working and
            passionate, aspiring programmers like myself and have had the
            priviledge of working with some of the most talented
            leaders/programmers I had ever met in my group of workshop TAs, some
            of whom I now call friends. If anyone of you are reading this
            (whether you're a student or a fellow workshop TA), thank you for
            making my first real job so memorable!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TA;
