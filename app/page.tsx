"use client";

import { useState } from "react";
import { scenarios, Scenario } from "../data/scenarios";
import { useLanguage } from "../hooks/useLanguage";
import { useFavorites } from "../hooks/useFavorites";
import SelectionCard from "../components/SelectionCard";

type Mode = "setup" | "select" | "story" | "favorites";
type Energy = "active" | "low";

export default function Home() {
  const [mode, setMode] = useState<Mode>("setup");
  const [energy, setEnergy] = useState<Energy>("active");
  const [options, setOptions] = useState<Scenario[]>([]);
  const [current, setCurrent] = useState<Scenario | null>(null);
  const [storyStep, setStoryStep] = useState(0);

  const { lang, setLang, t, hydrated } = useLanguage();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  /* ================= LOGIC ================= */

  const shuffle = (array: Scenario[]) => {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const generateOptions = () => {
    const matching = scenarios.filter((s) => s.energy === energy);
    setOptions(shuffle(matching).slice(0, 3));
    setMode("select");
  };

  const selectScenario = (scenario: Scenario) => {
    setCurrent(scenario);
    setStoryStep(0);
    setMode("story");
  };

  const favoriteScenarios = favorites
    .map((id) => scenarios.find((s) => s.id === id))
    .filter(Boolean) as Scenario[];

  const storyBeats = current
    ? [
        {
          label: t(current.starterLabel),
          line: t(current.starterLine),
          color: "from-emerald-50 to-green-50",
          accent: "bg-emerald-500",
          number: 1,
        },
        {
          label: t(current.twistLabel),
          line: t(current.twistLine),
          color: "from-amber-50 to-yellow-50",
          accent: "bg-amber-500",
          number: 2,
        },
        {
          label: t(current.endingLabel),
          line: t(current.endingLine),
          color: "from-blue-50 to-indigo-50",
          accent: "bg-blue-500",
          number: 3,
        },
      ]
    : [];

  /* ================= UI ================= */

  if (!hydrated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#e8f4f8] to-[#b8dde8]" />
    );
  }

  return (
    <div
      className={`min-h-screen px-5 py-6 flex flex-col items-center ${
        energy === "active"
          ? "bg-gradient-to-br from-[#e8f4f8] to-[#b8dde8]"
          : "bg-gradient-to-br from-[#fce8e8] to-[#f8d4d4]"
      }`}
    >
      {/* ================= HEADER ================= */}
      <div className="w-full max-w-[440px] flex justify-end items-center gap-3 mb-6">
        <button
          onClick={() => setMode("favorites")}
          className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-white/50 text-sm font-medium text-slate-700"
        >
          ⭐ {lang === "en" ? "Favorites" : "Favoriler"}
          {favoriteScenarios.length > 0 && (
            <span className="bg-slate-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {favoriteScenarios.length}
            </span>
          )}
        </button>

        {mode !== "story" && (
          <div className="flex bg-white/80 backdrop-blur rounded-full shadow-sm border border-white/50 overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                lang === "en"
                  ? "bg-slate-800 text-white"
                  : "text-slate-600"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("tr")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                lang === "tr"
                  ? "bg-slate-800 text-white"
                  : "text-slate-600"
              }`}
            >
              TR
            </button>
          </div>
        )}
      </div>

      <div className="w-full max-w-[440px]">
        {/* ================= SETUP ================= */}
        {mode === "setup" && (
          <div className="bg-white rounded-[32px] px-8 py-10 shadow-xl animate-fade-in">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">
                {energy === "active" ? "🌟🚀✨" : "🌙🧸💤"}
              </div>
              <h1 className="text-2xl font-semibold text-slate-800">
                {lang === "en"
                  ? "How's your energy tonight?"
                  : "Bu akşam enerjin nasıl?"}
              </h1>
              <p className="text-sm text-slate-500 mt-2">
                {lang === "en"
                  ? "Pick a mood and we'll find the perfect adventure"
                  : "Bir mod seç, sana en iyi macerayı bulalım"}
              </p>
            </div>

            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setEnergy("active")}
                className={`flex-1 py-4 rounded-2xl text-base font-medium transition-all duration-200 ${
                  energy === "active"
                    ? "bg-gradient-to-br from-[#4a92c8] to-[#2c5f7f] text-white shadow-lg scale-[1.02]"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                🌟 {lang === "en" ? "Active" : "Hareketli"}
              </button>

              <button
                onClick={() => setEnergy("low")}
                className={`flex-1 py-4 rounded-2xl text-base font-medium transition-all duration-200 ${
                  energy === "low"
                    ? "bg-gradient-to-br from-[#e08b8b] to-[#c75d5d] text-white shadow-lg scale-[1.02]"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                🌙 {lang === "en" ? "Cozy" : "Sakin"}
              </button>
            </div>

            <button
              onClick={generateOptions}
              className="w-full py-4 px-6 rounded-2xl text-white font-semibold text-lg bg-slate-800 transition-all duration-200 active:scale-[0.98] hover:bg-slate-700"
            >
              {lang === "en"
                ? "Create an adventure ✨"
                : "Bir macera oluştur ✨"}
            </button>
          </div>
        )}

        {/* ================= SELECT ================= */}
        {mode === "select" && (
          <div className="space-y-4 animate-fade-in">
            <p className="text-center text-sm font-medium text-slate-600 mb-2">
              {lang === "en"
                ? "Pick an adventure to play tonight"
                : "Bu gece oynayacağın bir macera seç"}
            </p>

            {options.map((s) => (
              <SelectionCard
                key={s.id}
                scenario={s}
                lang={lang}
                isFavorite={isFavorite(s.id)}
                onToggle={() => toggleFavorite(s.id)}
                onClick={() => selectScenario(s)}
              />
            ))}

            <button
              onClick={generateOptions}
              className="w-full mt-4 py-4 rounded-2xl bg-slate-800 text-white font-semibold transition-all duration-200 active:scale-[0.98] hover:bg-slate-700"
            >
              {lang === "en"
                ? "Shuffle new adventures 🔀"
                : "Yeni maceralar karıştır 🔀"}
            </button>

            <button
              onClick={() => setMode("setup")}
              className="w-full mt-2 py-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              ← {lang === "en" ? "Change energy" : "Enerjiyi değiştir"}
            </button>
          </div>
        )}

        {/* ================= FAVORITES ================= */}
        {mode === "favorites" && (
          <div className="space-y-4 animate-fade-in">
            <p className="text-center text-sm font-medium text-slate-600 mb-2">
              ⭐ {lang === "en" ? "Your Favorites" : "Favorilerin"}
            </p>

            {favoriteScenarios.length === 0 ? (
              <div className="bg-white rounded-[32px] px-8 py-12 shadow-xl text-center">
                <div className="text-5xl mb-4">💫</div>
                <p className="text-slate-600 font-medium">
                  {lang === "en"
                    ? "No favorites yet"
                    : "Henüz favori yok"}
                </p>
                <p className="text-sm text-slate-400 mt-2">
                  {lang === "en"
                    ? "Tap the heart on any adventure to save it here"
                    : "Bir maceraya kalp simgesine dokunarak buraya kaydet"}
                </p>
              </div>
            ) : (
              favoriteScenarios.map((s) => (
                <SelectionCard
                  key={s.id}
                  scenario={s}
                  lang={lang}
                  isFavorite={true}
                  onToggle={() => toggleFavorite(s.id)}
                  onClick={() => selectScenario(s)}
                />
              ))
            )}

            <button
              onClick={() => setMode("setup")}
              className="w-full mt-4 py-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              ← {lang === "en" ? "Back" : "Geri"}
            </button>
          </div>
        )}

        {/* ================= STORY ================= */}
        {mode === "story" && current && (
          <div className="bg-white rounded-[32px] px-8 py-10 shadow-xl animate-fade-in">
            {/* Back button */}
            <button
              onClick={() => setMode("select")}
              className="mb-4 text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              ← {lang === "en" ? "Back to adventures" : "Maceralara dön"}
            </button>

            {/* Story Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{current.icon}</span>
              <div className="flex-1">
                <h1 className="text-2xl font-semibold text-slate-800">
                  {t(current.theme)}
                </h1>
              </div>
              <button
                onClick={() => toggleFavorite(current.id)}
                aria-label={isFavorite(current.id) ? "Remove from favorites" : "Add to favorites"}
                className="text-2xl transition-transform duration-200 active:scale-125"
              >
                {isFavorite(current.id) ? "❤️" : "🤍"}
              </button>
            </div>

            {/* Roles */}
            <div className={`rounded-2xl p-4 mb-6 bg-gradient-to-br ${current.cardColor}`}>
              <p className="mb-1 text-sm text-slate-700">
                <strong>
                  {lang === "en" ? "🧒 You're:" : "🧒 Sen:"}
                </strong>{" "}
                {t(current.toddlerRole)}
              </p>
              <p className="text-sm text-slate-700">
                <strong>
                  {lang === "en" ? "🧑 I'm:" : "🧑 Ben:"}
                </strong>{" "}
                {t(current.parentRole)}
              </p>
            </div>

            {/* Mission */}
            <p className="italic text-slate-600 mb-6 text-center">
              &ldquo;{t(current.mission)}&rdquo;
            </p>

            {/* Story Beats — progressive reveal */}
            <div className="space-y-3">
              {storyBeats.map((beat, index) => {
                const isVisible = index <= storyStep;
                const isCurrent = index === storyStep;

                if (!isVisible) return null;

                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${beat.color} rounded-xl p-4 transition-all duration-300 ${
                      isCurrent ? "ring-2 ring-slate-300 shadow-md" : "opacity-75"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`${beat.accent} text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center`}
                      >
                        {beat.number}
                      </span>
                      <span className="font-semibold text-slate-800 text-sm">
                        {beat.label}
                      </span>
                    </div>
                    <div className="text-sm text-slate-600 pl-8">
                      {beat.line}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-6 mb-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i <= storyStep ? "bg-slate-800 scale-110" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Action Buttons */}
            {storyStep < 2 ? (
              <button
                onClick={() => setStoryStep((prev) => prev + 1)}
                className="w-full py-4 rounded-2xl bg-slate-800 text-white font-semibold transition-all duration-200 active:scale-[0.98] hover:bg-slate-700"
              >
                {storyStep === 0
                  ? lang === "en"
                    ? "What happens next? 👀"
                    : "Sonra ne oluyor? 👀"
                  : lang === "en"
                    ? "How does it end? ✨"
                    : "Nasıl bitiyor? ✨"}
              </button>
            ) : (
              <div className="space-y-3">
                <button
                  onClick={() => setStoryStep(0)}
                  className="w-full py-4 rounded-2xl bg-slate-800 text-white font-semibold transition-all duration-200 active:scale-[0.98] hover:bg-slate-700"
                >
                  {lang === "en"
                    ? "Play again 🔁"
                    : "Tekrar oyna 🔁"}
                </button>
                <button
                  onClick={() => {
                    generateOptions();
                  }}
                  className="w-full py-4 rounded-2xl bg-white text-slate-800 font-semibold border-2 border-slate-200 transition-all duration-200 active:scale-[0.98] hover:bg-slate-50"
                >
                  {lang === "en"
                    ? "New adventures 🔀"
                    : "Yeni maceralar 🔀"}
                </button>
                <button
                  onClick={() => setMode("setup")}
                  className="w-full py-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
                >
                  ← {lang === "en" ? "Change energy" : "Enerjiyi değiştir"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
