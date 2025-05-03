import { Target, ShieldCheck, Users, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: <Lightbulb size={40} className="text-secondary" />,
    title: 'Innovation',
    description: 'We constantly push the boundaries of architectural design and construction techniques to create spaces that are ahead of their time.',
  },
  {
    icon: <ShieldCheck size={40} className="text-secondary" />,
    title: 'Quality',
    description: 'We are committed to delivering the highest standards of quality in every aspect of our work, from design to final construction.',
  },
  {
    icon: <Target size={40} className="text-secondary" />,
    title: 'Precision',
    description: 'We approach each project with meticulous attention to detail, ensuring that every element meets our exacting standards.',
  },
  {
    icon: <Users size={40} className="text-secondary" />,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and close collaboration with our clients to achieve exceptional results.',
  },
];

const OurValues = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground">The principles that guide our work and define our approach</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-md border border-border hover:border-secondary transition-all duration-300"
            >
              <div className="mb-6">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;