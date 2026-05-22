import Image from "next/image";
import {
  Bot,
  Cpu,
  Factory,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaGoogleScholar,
  
} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f4ee] text-[#22201d]">
{/* Atmospheric Artwork Background */}

<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

  {/* Artwork Layer */}

  <div
    className="absolute inset-0 opacity-[0.72]"
    style={{
      backgroundImage: "url('/images/background-art.png')",
      backgroundSize: "cover",
      backgroundPosition: "center top",
      backgroundRepeat: "no-repeat",
    }}
  />

  {/* Paper texture */}

  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
    }}
  />

  {/* Soft white veil */}

  <div className="absolute inset-0 bg-[#f7f4ee]/55" />

</div>

{/* Top Color Strip */}

<div className="relative z-20 px-6 pt-6">

  <div className="mx-auto flex h-[2px] max-w-[1400px] overflow-hidden rounded-full">

    <div className="flex-1 bg-[#8ca779]" />
    <div className="flex-1 bg-[#7392c5]" />
    <div className="flex-1 bg-[#8d6d94]" />
    <div className="flex-1 bg-[#d2bf5d]" />
    <div className="flex-1 bg-[#c56f60]" />
    <div className="flex-1 bg-[#cf8a42]" />

  </div>

</div>

      {/* Hero */}

      <section className="relative z-10 px-6 pt-16 pb-10">

        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

          {/* Portrait */}

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-[#d7d0c5]/30 blur-2xl" />

            <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full border border-white/70 shadow-sm">

  <Image
    src="/images/deep.jpg"
    alt="Deep Paresh Patel"
    fill
    priority
    className="object-cover saturate-[0.92]"
  />

</div>

          </div>

          {/* Name */}

          <h1 className="serif mt-8 text-6xl font-light tracking-tight text-[#1f1d1a] md:text-[2.8rem]">
            Deep Paresh Patel
          </h1>

          {/* Identity */}

          <p className="mt-5 max-w-3xl text-[18px] leading-relaxed text-[#5a554f] md:text-[20px]">
            Postdoctoral Researcher · Mechatronics Engineer · Inventor
          </p>

          {/* Social Links */}

          <div className="mt-8 flex items-center justify-center gap-6 text-[#5f5a54]">

 

  <a
    href="mailto:deep.patel@ualberta.ca"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:opacity-60"
    aria-label="Email"
  >
    <MdOutlineMail size={24} />
  </a>

  <a
    href="https://github.com/deepmechatronics"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:opacity-60"
    aria-label="GitHub"
  >
    <FaGithub size={21} />
  </a>

  <a
    href="https://www.linkedin.com/in/deepresearch/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:opacity-60"
    aria-label="LinkedIn"
  >
    <FaLinkedin size={21} />
  </a>

  <a
    href="https://scholar.google.com/citations?user=3xVrdwEAAAAJ&hl=en"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:opacity-60"
    aria-label="Google Scholar"
  >
    <FaGoogleScholar size={21} />
  </a>
<a
  href="https://www.youtube.com/@DeepMechatronics"
  target="_blank"
  rel="noopener noreferrer"
  className="transition duration-300 hover:opacity-60"
  aria-label="YouTube"
>
  <FaYoutube size={21} />
</a>

</div>

          {/* Navigation */}

          <div className="mt-10 w-full overflow-x-auto">

            <div className="mx-auto inline-flex min-w-max items-center gap-8 rounded-full border border-[#e7e0d7] bg-[#fbfaf7]/90 px-8 py-4 shadow-sm backdrop-blur-sm">

              {[
  "Home",
    "Work",
  "Media",
  "Writing",
  "Publications",
  "Updates",
  "CV",
  "Contact",
].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[14px] text-[#3f3b36] transition hover:text-[#cf8a42]"
                >
                  {item}
                </a>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Main Content */}

      <section className="relative z-10 px-6 py-16">

        <div className="mx-auto grid max-w-6xl gap-20 lg:grid-cols-[1.4fr_0.8fr]">

          {/* Left Column */}

          <div>

{/* Welcome */}

<div>

  <h2 className="serif text-[3rem] font-light tracking-tight text-[#1f1d1a]">
    Welcome
  </h2>

  <div className="mt-4 h-px w-10 bg-[#cf8a42]" />

  <div className="mt-10 space-y-7 text-[1.18rem] leading-[2] text-justify text-[#514c46]">

    <p>
I help build technologies that empower people and industries toward smarter, safer, and more sustainable futures.
    </p>

    <p>
      Through robotics, intelligent manufacturing, digital twins, and industrial AI, my work focuses on developing systems that help people better understand, monitor, and navigate increasingly complex environments.
    </p>

    <p>
     I believe engineering can help illuminate complexity in ways that enable people to engage with technology more clearly, responsibly, and meaningfully.
    </p>

<div className="pt-6 text-[#6a6258]">
  <div className="inline-block">
    
    <p className="italic leading-[1.9]">
      “Born human;
      <br />
      May die awakened;
      <br />
      While alive, be useful.”
    </p>

    <div className="mt-3 pr-2 text-right text-[0.95rem] text-[#8a8176]">
      ~ Manuṣya
    </div>

  </div>
</div>

</div>

</div>

{/* Current Focus */}

<h2 className="serif text-[3rem] font-light tracking-tight text-[#1f1d1a]">
  Current Focus
</h2>

<div className="mt-4 h-px w-10 bg-[#cf8a42]" />

<div className="mt-12 space-y-8">

  {/* Intelligent Robotics */}

  <div className="flex items-start gap-6 border-b border-[#e7e0d6] pb-8">

    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#ddd6ca] bg-[#f7f4ee]">

      <Bot
        size={30}
        strokeWidth={1.4}
        className="text-[#8f6bb3]"
      />

    </div>

    <div>

      <h3 className="serif text-[1.65rem] text-[#1f1d1a]">
        Intelligent Robotics
      </h3>

      <p className="mt-2 text-[1rem] leading-[1.95] text-[#5a554f]">
        Autonomous and semi-autonomous robotic systems
        for industrial environments, adaptive fabrication,
        and human–robot collaboration.
      </p>

    </div>

  </div>

  {/* Manufacturing Intelligence */}

  <div className="flex items-start gap-6 border-b border-[#e7e0d6] pb-8">

    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#ddd6ca] bg-[#f7f4ee]">

      <Cpu
        size={30}
        strokeWidth={1.4}
        className="text-[#6f8fc7]"
      />

    </div>

    <div>

      <h3 className="serif text-[1.65rem] text-[#1f1d1a]">
        Manufacturing Intelligence
      </h3>

      <p className="mt-2 text-[1rem] leading-[1.95] text-[#5a554f]">
        Digital twins, industrial AI, and intelligent
        monitoring systems for data-driven manufacturing
        and operational decision support.
      </p>

    </div>

  </div>

  {/* Sustainable Industrial Systems */}

  <div className="flex items-start gap-6">

    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#ddd6ca] bg-[#f7f4ee]">

      <Factory
        size={30}
        strokeWidth={1.4}
        className="text-[#c58a4b]"
      />

    </div>

    <div>

      <h3 className="serif text-[1.65rem] text-[#1f1d1a]">
        Sustainable Industrial Systems
      </h3>

      <p className="mt-2 text-[1rem] leading-[1.95] text-[#5a554f]">
        Research toward scalable prefabrication,
        resource-efficient production, and next-generation
        industrial infrastructure.
      </p>

    </div>

  </div>

</div>





{/* Selected Publications */}

<div className="mt-28">

  <h2 className="serif text-[3rem] font-light tracking-tight text-[#1f1d1a]">
    Selected Publications
  </h2>

  <div className="mt-4 h-px w-10 bg-[#cf8a42]" />

  {/* Publication Item */}


{/* Publication Item */}

<div className="mt-16 border-b border-[#e7e0d6] pb-12">

  {/* Publication Image */}

 

  {/* Publication Content */}

  <div className="mt-8">

    <h3 className="serif text-[2.15rem] leading-[1.35] text-[#1f1d1a]">
      A Reliable Real-Time Tool Wear Monitoring Framework
      Based on Temporal Segmentation Using Domain-Informed
      Stacked AI Models with Physics-Constrained Predictions
    </h3>

    <p className="mt-4 text-[1rem] italic tracking-wide text-[#8a8178]">
      International Journal of Advanced Manufacturing Technology · 2026
    </p>

    <p className="mt-6 text-[1.03rem] leading-[2] text-justify text-[#5a554f]">
  Real-time tool wear monitoring is critical for maintaining
  machining quality and preventing unplanned industrial downtime,
  yet existing AI-based approaches often lack robustness,
  interpretability, and adaptability across evolving wear conditions.
  This work introduces the D-STL-MPK framework, integrating
  temporal segmentation, domain-informed stacked AI models,
  monotonicity enforcement, and physics-constrained Kalman smoothing
  to achieve interpretable and deployment-ready wear prediction
  with sub-2 ms inference latency, ultra-light computational cost,
  and strong generalization across public manufacturing datasets.
    </p>

     <img
    src="/images/dstlmpl-paper.png"
    alt="D-STL-MPK Tool Wear Monitoring Framework"
    className="w-full rounded-2xl border border-[#ddd6ca] bg-white object-cover"
  />

    <p className="mt-7 text-[0.92rem] leading-[1.9] text-[#7a746d]">

      Patel, D., Muthuswamy, S.
      <span className="italic">
        {" "}
        A Reliable Real-Time Tool Wear Monitoring Framework
        Based on Temporal Segmentation Using Domain-Informed
        Stacked AI Models with Physics-Constrained Predictions.
      </span>
      {" "}
      International Journal of Advanced Manufacturing Technology (2026).

    </p>

    <a
      href="https://doi.org/10.1007/s00170-026-18313-0"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-block text-[0.95rem] text-[#8a5a2b] underline underline-offset-4 decoration-[#d0b08c] transition hover:opacity-70"
    >
      View Publication
    </a>

  </div>

</div>


 

{/* Additional publication items would follow the same structure as above, with appropriate spacing and styling. */}


</div>
</div>







          {/* Right Column */}

          <aside className="border-l border-[#e7e0d7] pl-10">

{/* About */}

<div>

  <h2 className="serif text-[3rem] font-light tracking-tight text-[#1f1d1a]">
    About
  </h2>

  <div className="mt-4 h-px w-10 bg-[#cf8a42]" />

  <div className="mt-10 space-y-7 text-[1.05rem] leading-[1.95] text-justify text-[#514c46] hyphens-auto">

    <p>
      A researcher exploring the potential of robotics,
      smart sensing, machine vision, and digital twins
      to enable safer, more sustainable, and data-driven
      industrial systems.
    </p>

    <p>
      Research interests include intelligent automation,
      predictive maintenance, manufacturing intelligence,
      digital-twin decision support, industrial AI,
      and autonomous robotic systems.
    </p>

    <p>
      A decade of research and development experience,
      participation in 6 international robotics competitions,
      10+ peer-reviewed publications, 2 nationally funded
      projects, and a granted patent in robotics and
      smart manufacturing.
    </p>

  </div>

</div>
{/* Current Role */}

<div className="mt-16">

  <h3 className="serif text-4xl font-light text-[#1f1d1a]">
    Currently
  </h3>

  <div className="mt-4 h-px w-10 bg-[#cf8a42]" />

  <p className="mt-8 text-[1.05rem] leading-[1.95] text-justify text-[#5a554f]">

    Postdoctoral Research Fellow at the

    <a
      href="https://www.ualberta.ca/"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-1 text-[#3e3a35] underline underline-offset-4 decoration-[#b8a48c] transition hover:opacity-70"
    >
      University of Alberta
    </a>

    in Edmonton, Canada, working at the

    <a
      href="https://rafiqahmads.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-1 text-[#3e3a35] underline underline-offset-4 decoration-[#b8a48c] transition hover:opacity-70"
    >
      SMART Lab
    </a>

    under the supervision of

    <a
      href="https://apps.ualberta.ca/directory/person/rafiq1"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-1 text-[#3e3a35] underline underline-offset-4 decoration-[#b8a48c] transition hover:opacity-70"
    >
      Dr. Rafiq Ahmad
    </a>,

    exploring construction robotics, smart manufacturing,
    and intelligent industrial systems.

  </p>

</div>

            {/* Quick Links */}

            <div className="mt-16">

              <h3 className="serif text-4xl font-light text-[#1f1d1a]">
                Quick Links
              </h3>

              <div className="mt-4 h-px w-10 bg-[#cf8a42]" />

              <div className="mt-8 space-y-5">

                {[
                  "CV / Resume",
                  "Publications",
                  "Projects",
                  "Teaching",
                  "Mentorship",
                  "Notes",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex items-center justify-between border-b border-[#ebe5dc] pb-4 text-[16px] text-[#49443f] transition hover:text-[#cf8a42]"
                  >

                    <span>{item}</span>

                    <span>→</span>

                  </a>
                ))}

              </div>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}