import Link from "../components/Link";

export const metadata = {
  title: "Resources | Martin Sit",
  description:
    "Tools, reading, and references I keep coming back to for building, learning, and finding work.",
};

const sections = [
  {
    title: "building",
    items: [
      {
        name: "CS50",
        href: "https://cs50.harvard.edu/x/",
        description: "Harvard's intro to computer science, free and still the best place to start",
      },
      {
        name: "MIT OpenCourseWare",
        href: "https://ocw.mit.edu/",
        description: "free lectures and notes from nearly every MIT course",
      },
      {
        name: "The Missing Semester",
        href: "https://missing.csail.mit.edu/",
        description: "shell, git, and editor skills",
      },
      {
        name: "Teach Yourself CS",
        href: "https://teachyourselfcs.com/",
        description: "one book and one course for each core CS subject",
      },
      {
        name: "Build Your Own X",
        href: "https://github.com/codecrafters-io/build-your-own-x",
        description: "rebuild git, Redis, a database, or a compiler from scratch to see how they work",
      },
      {
        name: "Hack the North",
        href: "https://hackthenorth.com/",
        description: "Canada's biggest hackathon, go build something in a weekend",
      },
    ],
  },
  {
    title: "reading",
    items: [
      {
        name: "How to Do Great Work",
        href: "https://paulgraham.com/greatwork.html",
        description: "Paul Graham on curiosity, delight, and working on what you love",
      },
      {
        name: "How to Be Successful",
        href: "https://blog.samaltman.com/how-to-be-successful",
        description: "Sam Altman's 13 rules, compounding and self-belief especially",
      },
      {
        name: "How to Get Rich",
        href: "https://nav.al/rich",
        description: "Naval on leverage, specific knowledge, and playing long-term games",
      },
      {
        name: "Luck Surface Area",
        href: "https://sammatla.com/luck-surface-area/",
        description: "why doing things and telling people about them compounds",
      },
      {
        name: "Why Have a Blog",
        href: "https://guzey.com/personal/why-have-a-blog/",
        description: "Alexey Guzey on writing in public",
      },
      {
        name: "David Perell",
        href: "https://perell.com/",
        description: "writing, agency, and just doing things",
      },
    ],
  },
  {
    title: "careers",
    items: [
      {
        name: "Argo",
        href: "https://www.argoapply.com/",
        description:
          "finds jobs that match your goals, tailors your resume, and applies for you",
      },
      {
        name: "Jake's Resume",
        href: "https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs",
        description: "the resume template everyone at Waterloo uses, for good reason",
      },
      {
        name: "Work at a Startup",
        href: "https://www.workatastartup.com/",
        description: "open roles at YC companies, if you'd rather play the startup game",
      },
    ],
  },
];

export default function Resources() {
  return (
    <div className="flex flex-col gap-8 max-w-2xl mx-auto font-extralight">
      <p className="text-stone-600 dark:text-stone-400">
        a few tools and references i keep coming back to for building, learning,
        and finding work.
      </p>
      {sections.map((section) => (
        <section key={section.title} className="flex flex-col gap-3">
          <h2 className="text-stone-600 dark:text-stone-400 italic font-medium">
            {section.title}
          </h2>
          <ul className="grid gap-2">
            {section.items.map((item) => (
              <li
                key={item.name}
                className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200"
              >
                <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
                <span className="text-stone-600 dark:text-stone-400">
                  <Link href={item.href} className="font-medium">
                    {item.name}
                  </Link>
                  <span className="text-stone-500 dark:text-stone-500">
                    {" "}
                    — {item.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
