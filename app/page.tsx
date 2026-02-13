"use client";

import { useState } from "react";
import { scenarios, Scenario } from "../data/scenarios";

type EnergyLevel = Scenario["energy"];
type Mode = "setup" | "story";

/* =========================
   MAIN COMPONENT
========================= */

export default function Home() {
  const [mode, setMode] = useState<Mode>("setup");
  const [energy, setEnergy] = useState<EnergyLevel>("active");
  const [currentScenario, setCurrentScenario] =
    useState<Scenario | null>(null);
  const [animate, setAnimate] = useState(false);

  const generateScenario = () => {
    const matching = scenarios.filter(
      (s) => s.energy === energy || s.energy === "mixed"
    );
    if (!matching.length) return;

    const random =
      matching[Math.floor(Math.random() * matching.length)];

    setCurrentScenario(random);
    setMode("story");

    setAnimate(false);
    requestAnimationFrame(() => setAnimate(true));
  };

  const toggleEnergy = () => {
    const newEnergy = energy === "active" ? "low" : "active";
    setEnergy(newEnergy);

    const matching = scenarios.filter(
      (s) => s.energy === newEnergy || s.energy === "mixed"
    );

    if (matching.length) {
      const random =
        matching[Math.floor(Math.random() * matching.length)];
      setCurrentScenario(random);

      setAnimate(false);
      requestAnimationFrame(() => setAnimate(true));
    }
  };

  return (
    <div
      className={`
        min-h-screen px-5 pt-20 pb-20 flex items-center justify-center
        transition-colors duration-700
        ${
          energy === "active"
            ? "bg-gradient-to-br from-[#e8f4f8] to-[#b8dde8]"
            : "bg-gradient-to-br from-[#fce8e8] to-[#f8d4d4]"
        }
      `}
    >
      <div className="w-full max-w-[440px]">

        {/* SETUP MODE */}
        {mode === "setup" && (
          <div
            className={`
              bg-white rounded-[32px] px-8 py-10
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              transition-all duration-500
              ${animate ? "opacity-100 translate-y-0" : ""}
            `}
          >
            <h1 className="text-3xl font-semibold text-center mb-6">
              How's your energy tonight?
            </h1>

            <p className="text-center text-slate-600 mb-8 text-base leading-relaxed">
              Choose the vibe and we’ll create an adventure.
            </p>

            <div className="flex gap-4 mb-10">
              <EnergyButton
                label="🌟 Active"
                selected={energy === "active"}
                onClick={() => setEnergy("active")}
                activeColor="from-[#4a92c8] to-[#2c5f7f]"
              />
              <EnergyButton
                label="🌙 Cozy"
                selected={energy === "low"}
                onClick={() => setEnergy("low")}
                activeColor="from-[#e08b8b] to-[#c75d5d]"
              />
            </div>

            <button
              onClick={generateScenario}
              className={`
                w-full py-4 px-6 rounded-2xl
                text-white font-semibold text-lg
                transition-all duration-300
                ${
                  energy === "active"
                    ? "bg-gradient-to-r from-[#4a92c8] to-[#2c5f7f]"
                    : "bg-gradient-to-r from-[#e08b8b] to-[#c75d5d]"
                }
              `}
            >
              Create an adventure ✨
            </button>
          </div>
        )}

        {/* STORY MODE */}
        {mode === "story" && currentScenario && (
          <div className="space-y-4">
            <div
              className={`
                bg-white rounded-[32px] px-8 py-10
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                transition-all duration-500
                ${animate ? "opacity-100 translate-y-0" : ""}
              `}
            >
              <h1
                className="text-4xl font-semibold text-center mb-6"
                style={{
                  color:
                    energy === "active" ? "#2c5f7f" : "#8b4a4a",
                }}
              >
                {currentScenario.theme}
              </h1>

              {/* Roles */}
              <div
                className={`
                  rounded-[20px] px-6 py-5 mb-6 border
                  ${
                    energy === "active"
                      ? "bg-[#f0f9ff] border-[#8bb8e8]/30"
                      : "bg-[#fff0f0] border-[#e8b8b8]/30"
                  }
                `}
              >
                <p className="text-[16px] text-slate-700 mb-2">
                  <span className="font-semibold">You're</span>{" "}
                  {currentScenario.toddlerRole}
                </p>
                <p className="text-[16px] text-slate-700">
                  <span className="font-semibold">I'm</span>{" "}
                  {currentScenario.parentRole}
                </p>
              </div>

              {/* Mission */}
              <p className="text-[18px] leading-relaxed text-center mb-8 text-slate-700 italic">
                {currentScenario.mission}
              </p>

              {/* Story Beats */}
              <div className="space-y-3 mb-6">
                <StoryBeat
                  label={currentScenario.starterLabel}
                  content={currentScenario.starterLine}
                />
                <StoryBeat
                  label={currentScenario.twistLabel}
                  content={currentScenario.twistLine}
                />
                <StoryBeat
                  label={currentScenario.endingLabel}
                  content={currentScenario.endingLine}
                />
              </div>

              {/* CTA */}
              <button
                onClick={generateScenario}
                className={`
                  w-full py-4 px-6 rounded-2xl
                  text-white font-semibold text-base
                  transition-all duration-300
                  ${
                    energy === "active"
                      ? "bg-gradient-to-r from-[#4a92c8] to-[#2c5f7f]"
                      : "bg-gradient-to-r from-[#e08b8b] to-[#c75d5d]"
                  }
                `}
              >
                Give me another adventure
              </button>

              {/* Energy Toggle */}
              <button
                onClick={toggleEnergy}
                className="w-full mt-4 py-3 px-4 rounded-xl bg-white/70 text-sm text-slate-600"
              >
                Switch energy mode
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================
   COMPONENTS
========================= */

function EnergyButton({
  label,
  selected,
  onClick,
  activeColor,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  activeColor: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex-1 py-4 px-4 rounded-2xl
        transition-all duration-300
        ${
          selected
            ? `bg-gradient-to-br ${activeColor} text-white`
            : "bg-white shadow text-slate-700"
        }
      `}
    >
      {label}
    </button>
  );
}

function StoryBeat({
  label,
  content,
}: {
  label: string;
  content: string;
}) {
  return (
    <div className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-slate-100">
      <div className="font-semibold mb-1 text-slate-700">
        {label}
      </div>
      <div className="text-sm text-slate-600 leading-relaxed">
        {content}
      </div>
    </div>
  );
}
