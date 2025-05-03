import useScrollAnimation from "../ui/useScrollAnimation";




const VisionMission = () => {
    useScrollAnimation();
    return (
    <section className="section bg-jabal">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div className="slide-in">
            <span className="inline-block text-jabal-gold mb-4 tracking-wider text-sm">OUR MISSION</span>
            <h2 className="section-title mb-6">Building Excellence</h2>
            <p className="text-jabal-muted mb-6">At Jabal Builders, our mission is to create architectural excellence...</p>
            <p className="text-jabal-muted">We approach each project with a commitment to sustainability...</p>
          </div>
          {/* Vision */}
          <div className="slide-in">
            <span className="inline-block text-jabal-gold mb-4 tracking-wider text-sm">OUR VISION</span>
            <h2 className="section-title mb-6">Defining the Future</h2>
            <p className="text-jabal-muted mb-6">Our vision is to be recognized globally as a leader in architectural innovation...</p>
            <p className="text-jabal-muted">Through our work, we aspire to leave a legacy...</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VisionMission;