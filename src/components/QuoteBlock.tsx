export default function QuoteBlock() {
  return (
    <div className="grid grid-cols-12 gap-6 my-48 reveal-up in-view">
      <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
        <blockquote className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-foreground mb-12">
          "Most designers use AI to move faster. I use it to think harder."
        </blockquote>
        <div className="text-xl md:text-2xl text-metadata leading-relaxed space-y-4">
          <p>Prototyping with it. Pressure-testing problems with it. Building products on top of it.</p>
          <p>The result is a design practice that questions more, assumes less, and ships with more confidence.</p>
        </div>
      </div>
    </div>
  );
}
