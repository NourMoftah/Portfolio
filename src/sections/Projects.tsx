import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import daniels from "@/assets/images/daniels.png";
import freshCart from "@/assets/images/FreshCart.png";
import devfolio from "@/assets/images/devfolio.png";
import mealify from "@/assets/images/mealify.png";
import weather from "@/assets/images/weather.png";
import yummy from "@/assets/images/yummy.png";

const portfolioProjects = [
  {
    year: "2025",
    title: "Fresh Cart",
    results: [
      { title: "Mobile-first design for modern users" },
      { title: "Integrated with modern APIs for scalability" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://fresh-cart-cgvps6ug6-nours-projects-457e5581.vercel.app",
    image: freshCart,
  },
  {
    year: "2025",
    title: "Daniels",
    results: [
      { title: "Simplified navigation for seamless browsing" },
      { title: "Improved site speed by 50%" },
      { title: "Clean, modern UI to boost trust" },
    ],
    link: "https://nourmoftah.github.io/Daniels/",
    image: daniels,
  },

  {
    year: "2025",
    title: "DevFolio",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Integrated with Stripe, mailchimp & Zapier" },
      { title: "GDPR-compliant to protect user privacy" },
    ],
    link: "https://nourmoftah.github.io/DevFolio/",
    image: devfolio,
  },
  {
    year: "2025",
    title: "Mealify",
    results: [
      { title: "Reduced bounce rate by 40%" },
      { title: "Automated key workflows to save time" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://nourmoftah.github.io/Mealify/",
    image: mealify,
  },
  {
    year: "2025",
    title: "Weather-App",
    results: [
      { title: "Simplified navigation for seamless browsing" },
      { title: "Improved site speed by 50%" },
      { title: "Clean, modern UI to boost trust" },
    ],
    link: "https://nourmoftah.github.io/Weather-App/",
    image: weather,
  },
  {
    year: "2025",
    title: "Yummy",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Cusomizable to fit any business need" },
      { title: "Easy integration with your existing tools" },
    ],
    link: "https://nourmoftah.github.io/Yummy/",
    image: yummy,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project">
      <div className="container">
        {/* Header */}
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See I transformed concepts into engaging digital experiences.
        </p>

        {/* Project Cards */}
        <div className="flex flex-col md:mt-20 mt-10 gap-20 ">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl overflow-hidden px-6 py-10 md:px-10 lg:px-16 lg:py-16 flex flex-col lg:flex-row items-center gap-10 border border-gray-400/50 sticky "
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              {/* Left: Text Content */}
              <div className="w-full lg:w-1/2">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold tracking-widest text-sm gap-2 bg-clip-text text-transparent">
                  <span>{project.year}</span>
                </div>

                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl text-white">
                  {project.title}
                </h3>

                <hr className="border-t-2 border-white/10 mt-4 md:mt-5" />

                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li
                      key={result.title}
                      className="flex gap-2 text-sm text-white/60 md:text-base"
                    >
                      <CheckCircleIcon className="size-5 md:size-6 text-emerald-300" />
                      <span>{result.title}</span>
                      <ArrowUpRightIcon className="size-4" />
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white md:w-auto px-6 text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 mb-10">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10 max-w-[500px] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1000}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
