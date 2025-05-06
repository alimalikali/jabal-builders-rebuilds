
type TimelineEvent = {
  year: string;
  description: string;
};

const Timeline = ({ timelineEvents }: { timelineEvents: TimelineEvent[] }) => {
  return (
    <section className="section bg-jabal">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16 slide-in">
        <span className="inline-block text-jabal-gold mb-4 tracking-wider text-sm">OUR JOURNEY</span>
        <h2 className="section-title">Company <span className="gold-gradient">Timeline</span></h2>
        <p className="section-subtitle mx-auto">Over the years, we've grown from a small firm to a comprehensive building provider...</p>
      </div>
      <div className="max-w-4xl mx-auto slide-in relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-jabal-gold/30 transform md:translate-x-px"></div>
        {timelineEvents.map((item, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12 relative`}>
            <div className={`md:w-1/2 pl-4 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-8 ' : 'md:pl-8'} mb-4 md:mb-0 `}>
              <div className="text-2xl font-bold text-jabal-gold">{item.year}</div>
            </div>
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-jabal-gold rounded-full transform -translate-x-1.5 md:-translate-x-2.2 mt-2"></div>
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'} pl-6 md:pl-0`}>
              {/* <p className="text-white text-lg">{item.title}</p> */}
              <p className="text-jabal-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Timeline;