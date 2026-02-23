import { features } from "./FeatureCards";

export default function HeroSlider() {
  const loopedCards = [...features, ...features];

  return (
    <div className="relative overflow-hidden w-full mt-28">
      <div className="flex gap-8 animate-slider">
        {loopedCards.map((card, index) => (
          <div
            key={index}
            className="min-w-[520px] h-[300px] relative rounded-xl overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <button className="mt-3 text-sm bg-white text-black px-4 py-2 rounded-md w-fit">
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
