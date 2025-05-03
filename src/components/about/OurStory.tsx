import Image from 'next/image';

const OurStory = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">Building excellence since 2010</p>
            <p className="mb-6 text-muted-foreground">
              JABAL BUILDERS was founded with a vision to create architectural masterpieces 
              that stand the test of time. Our journey began with a small team of passionate 
              architects and builders dedicated to excellence in design and construction.
            </p>
            <p className="mb-6 text-muted-foreground">
              Over the years, we have grown into a comprehensive architectural and construction 
              firm, delivering projects across residential, commercial, and institutional sectors. 
              Our integrated approach ensures seamless coordination between design and construction, 
              resulting in exceptional spaces that exceed client expectations.
            </p>
            <p className="text-muted-foreground">
              Today, JABAL BUILDERS stands as a symbol of architectural innovation and construction 
              excellence, with a portfolio of successful projects that reflect our commitment to 
              quality, creativity, and client satisfaction.
            </p>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 md:h-80 rounded-md overflow-hidden">
                <Image 
                  src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Architectural design" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-md overflow-hidden">
                <Image 
                  src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Construction work" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-md overflow-hidden col-span-2">
                <Image 
                  src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Building exterior" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;