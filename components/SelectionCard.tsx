import { Scenario } from "../data/scenarios";
import { Lang } from "../hooks/useLanguage";

type Props = {
  scenario: Scenario;
  lang: Lang;
  isFavorite: boolean;
  onToggle: () => void;
  onClick: () => void;
};

export default function SelectionCard({
  scenario,
  lang,
  isFavorite,
  onToggle,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`bg-gradient-to-br ${scenario.cardColor} p-5 rounded-2xl shadow-md cursor-pointer
        transition-all duration-200 active:scale-[0.98] hover:shadow-lg`}
    >
      <div className="flex items-center gap-3">
        <span className="text-4xl leading-none">{scenario.icon}</span>

        <div className="flex-1 min-w-0">
          <div className="font-semibold text-slate-800">
            {scenario.theme[lang]}
          </div>
          <div className="text-sm text-slate-600 mt-1">
            {scenario.mission[lang]}
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          className="text-2xl shrink-0 transition-transform duration-200 active:scale-125"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}
