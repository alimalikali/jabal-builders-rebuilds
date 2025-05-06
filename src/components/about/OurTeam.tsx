import Image from 'next/image';

type TeamMember = { id: number, name: string, position: string, image: string };

const OurTeam = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  return (
    <section className="section bg-jabal-light">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-in">
          <span className="inline-block text-jabal-gold mb-4 tracking-wider text-sm">OUR TEAM</span>
          <h2 className="section-title">Meet The <span className="gold-gradient">Experts</span></h2>
          <p className="section-subtitle mx-auto">Our talented team combines decades of experience...</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 slide-in">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-jabal border border-jabal-light hover:border-jabal-gold/30 transition-all rounded-sm overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <Image  src={member.image} alt={member.name} width={1770} height={1080} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-jabal-gold">{member.name}</h3>
                <p className="text-jabal-muted">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;