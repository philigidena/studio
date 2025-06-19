import ProjectCard from '../shared/ProjectCard';
import { SectionTitle } from '../shared/SectionTitle';

const projects = [
  {
    id: '1',
    projectName: 'Commercial Building Facade - Addis Ababa',
    description: 'State-of-the-art aluminum and glass facade for a new multi-story office complex in the city center.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'modern building',
  },
  {
    id: '2',
    projectName: 'Luxury Residential Villa - Bole',
    description: 'Complete installation of premium aluminum windows, sliding doors, and balustrades for a luxury villa.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'luxury house',
  },
  {
    id: '3',
    projectName: 'Shopping Mall Skylight & Entrance - CMC Area',
    description: 'Design and installation of a large-span aluminum skylight and impressive main entrance for a new shopping mall.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'shopping mall',
  },
   {
    id: '4',
    projectName: 'University Campus Renovation',
    description: 'Upgrading an existing university campus with energy-efficient aluminum windows and modern curtain walling.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'university building',
  },
  {
    id: '5',
    projectName: 'Boutique Hotel - Kazanchis',
    description: 'Custom aluminum solutions including uniquely designed window frames and decorative elements for a boutique hotel.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'hotel exterior',
  },
  {
    id: '6',
    projectName: 'Industrial Park Warehouses',
    description: 'Robust and functional aluminum doors and windows for large-scale industrial warehouses, ensuring security and durability.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'industrial warehouse',
  },
];

const ProjectPortfolio = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-6 md:px-10">
        <SectionTitle subtitle="Browse through some of our successfully completed aluminum projects, showcasing our commitment to quality, precision, and innovative design.">
          Our Portfolio
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              projectName={project.projectName}
              imageUrl={project.imageUrl}
              description={project.description}
              imageHint={project.imageHint}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPortfolio;
