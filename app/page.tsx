"use client";

import { useState } from "react";
import { scenarios, Scenario } from "../data/scenarios";

type EnergyLevel = Scenario["energy"];
type Mode = "setup" | "story";
type Language = "en" | "tr";

export default function Home() {
  const [mode, setMode] = useState<Mode>("setup");
  const [energy, setEnergy] = useState<EnergyLevel>("active");
  const [language, setLanguage] = useState<Language>("en");
  const [currentScenario, setCurrentScenario] =
    useState<Scenario | null>(null);
  const [animate, setAnimate] = useState(false);

  const t = {
    en: {
      energyTitle: "How's your energy tonight?",
      energyDesc: "Choose the vibe and we’ll create an adventure.",
      active: "🌟 Active",
      cozy: "🌙 Cozy",
      create: "Create an adventure ✨",
      another: "Give me another adventure",
      switchEnergy: "Switch energy mode",
      back: "Back",
      you: "You're",
      iAm: "I'm",
    },
    tr: {
      energyTitle: "Bu akşam enerjin nasıl?",
      energyDesc: "Enerjini seç, birlikte bir macera başlatalım.",
      active: "🌟 Aktif",
      cozy: "🌙 Sakin",
      create: "Bir macera oluştur ✨",
      another: "Başka bir macera ver",
      switchEnergy: "Enerjiyi değiştir",
      back: "Başa dön",
      you: "Sen",
      iAm: "Ben",
    },
  };

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
      <div className="w-full max-w-[440px] relative">

        {/* SETUP MODE */}
        {mode === "setup" && (
          <div className="bg-white rounded-[32px] px-8 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative">

            {/* Language Toggle */}
            <div className="absolute top-4 right-4 text-sm flex gap-2">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded ${
                  language === "en"
                    ? "bg-slate-800 text-white"
                    : "text-slate-600"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("tr")}
                className={`px-2 py-1 rounded ${
                  language === "tr"
                    ? "bg-slate-800 text-white"
                    : "text-slate-600"
                }`}
              >
                TR
              </button>
            </div>

            <h1 className="text-3xl font-semibold text-center mb-6">
              {t[language].energyTitle}
            </h1>

            <p className="text-center text-slate-600 mb-8 text-base leading-relaxed">
              {t[language].energyDesc}
            </p>

            <div className="flex gap-4 mb-10">
              <EnergyButton
                label={t[language].active}
                selected={energy === "active"}
                onClick={() => setEnergy("active")}
                activeColor="from-[#4a92c8] to-[#2c5f7f]"
              />
              <EnergyButton
                label={t[language].cozy}
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
                ${
                  energy === "active"
                    ? "bg-gradient-to-r from-[#4a92c8] to-[#2c5f7f]"
                    : "bg-gradient-to-r from-[#e08b8b] to-[#c75d5d]"
                }
              `}
            >
              {t[language].create}
            </button>
          </div>
        )}

        {/* STORY MODE */}
        {mode === "story" && currentScenario && (
          <div className="space-y-4">
            <div className="bg-white rounded-[32px] px-8 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

              {/* Back Button */}
              <button
                onClick={() => setMode("setup")}
                className="text-sm text-slate-500 mb-4"
              >
                ← {t[language].back}
              </button>

              <h1
                className="text-4xl font-semibold text-center mb-6"
                style={{
                  color:
                    energy === "active" ? "#2c5f7f" : "#8b4a4a",
                }}
              >
                {currentScenario.theme[language]}
              </h1>

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
                  <span className="font-semibold">
                    {t[language].you}
                  </span>{" "}
                  {currentScenario.toddlerRole[language]}
                </p>
                <p className="text-[16px] text-slate-700">
                  <span className="font-semibold">
                    {t[language].iAm}
                  </span>{" "}
                  {currentScenario.parentRole[language]}
                </p>
              </div>

              <p className="text-[18px] leading-relaxed text-center mb-8 text-slate-700 italic">
                {currentScenario.mission[language]}
              </p>

              <div className="space-y-3 mb-6">
                <StoryBeat
                  label={currentScenario.starterLabel[language]}
                  content={currentScenario.starterLine[language]}
                />
                <StoryBeat
                  label={currentScenario.twistLabel[language]}
                  content={currentScenario.twistLine[language]}
                />
                <StoryBeat
                  label={currentScenario.endingLabel[language]}
                  content={currentScenario.endingLine[language]}
                />
              </div>

              <button
                onClick={generateScenario}
                className={`
                  w-full py-4 px-6 rounded-2xl
                  text-white font-semibold text-base
                  ${
                    energy === "active"
                      ? "bg-gradient-to-r from-[#4a92c8] to-[#2c5f7f]"
                      : "bg-gradient-to-r from-[#e08b8b] to-[#c75d5d]"
                  }
                `}
              >
                {t[language].another}
              </button>

              <button
                onClick={toggleEnergy}
                className="w-full mt-4 py-3 px-4 rounded-xl bg-white/70 text-sm text-slate-600"
              >
                {t[language].switchEnergy}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* COMPONENTS */

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
