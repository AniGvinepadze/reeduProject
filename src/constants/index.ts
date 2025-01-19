export const categoires = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "UI",
  },
  {
    id: 3,
    name: "UX",
  },
  {
    id: 4,
    name: "Enhancement",
  },
  {
    id: 5,
    name: "Bug",
  },
  {
    id: 6,
    name: "Feature",
  },
];

export const suggestions = [
  {
    id: 1,
    number: 112,
    title: "Add tags for solutions",
    desc: "Easier to search for solutions based on a specific stack.",
    feedBack: "Enhancement",
    message: 4,
  },
  {
    id: 2,
    number: 99,
    title: "Add a dark theme option",
    desc: "It would help people with light sensitivities and who prefer dark mode.",
    feedBack: "Feature",
    message: 3,
  },
  {
    id: 3,
    number: 65,
    title: "Q&A within the challenge hubs",
    desc: "Challenge-specific Q&A would make for easy reference.",
    feedBack: "Feature",
    message: 2,
  },
  {
    id: 4,
    number: 51,
    title: "Allow image/video upload to feedback",
    desc: "Images and screencasts can enhance comments on solutions.",
    feedBack: "Enhancement",
    message: 1,
  },
  {
    id: 5,
    number: 42,
    title: "Ability to follow others",
    desc: "Stay updated on comments and solutions other people post.",
    feedBack: "Feature",
    message: 4,
  },
  {
    id: 6,
    number: 3,
    title: "Preview images not loading",
    desc: "Challenge preview images are missing when you apply a filter.",
    feedBack: "Bug",
    message: 0,
  },
];
export const roadmap = [
  {
    id: 1,
    title: "More comprehensive reports",
    category: "feature",
    upvotes: 123,
    status: "planned",
    description:
      "It would be great to see a more detailed breakdown of solutions.",
    comments: [
      {
        id: 10,
        content:
          "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
        user: {
          image: "./assets/user-images/image-victoria.jpg",
          name: "Victoria Mejia",
          username: "arlen_the_marlin",
        },
      },
      {
        id: 11,
        content:
          "Yeah, this would be really good. I'd love to see deeper insights into my code!",
        user: {
          image: "./assets/user-images/image-jackson.jpg",
          name: "Jackson Barker",
          username: "countryspirit",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Learning paths",
    category: "feature",
    upvotes: 28,
    status: "planned",
    description:
      "Sequenced projects for different goals to help people improve.",
    comments: [
      {
        id: 12,
        content:
          "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
        user: {
          image: "./assets/user-images/image-george.jpg",
          name: "George Partridge",
          username: "soccerviewer8",
        },
      },
    ],
  },

  {
    id: 4,
    title: "One-click portfolio generation",
    category: "feature",
    upvotes: 62,
    status: "in-progress",
    description:
      "Add ability to create professional looking portfolio from profile.",
    comments: [
      {
        id: 13,
        content:
          "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
        user: {
          image: "./assets/user-images/image-ryan.jpg",
          name: "Ryan Welles",
          username: "voyager.344",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Bookmark challenges",
    category: "feature",
    upvotes: 31,
    status: "in-progress",
    description: "Be able to bookmark challenges to take later on.",
    comments: [
      {
        id: 14,
        content:
          "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
        user: {
          image: "./assets/user-images/image-suzanne.jpg",
          name: "Suzanne Chang",
          username: "upbeat1811",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Animated solution screenshots",
    category: "bug",
    upvotes: 9,
    status: "in-progress",
    description:
      "Screenshots of solutions with animations don’t display correctly.",
    comments: [],
  },
  {
    id: 7,
    title: "Add micro-interactions",
    category: "enhancement",
    upvotes: 71,
    status: "live",
    description: "Small animations at specific points can add delight.",
    comments: [
      {
        id: 15,
        content:
          "I'd love to see this! It always makes me so happy to see little details like these on websites.",
        user: {
          image: "./assets/user-images/image-victoria.jpg",
          name: "Victoria Mejia",
          username: "arlen_the_marlin",
        },
        replies: [
          {
            content:
              "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
            replyingTo: "arlen_the_marlin",
            user: {
              image: "./assets/user-images/image-suzanne.jpg",
              name: "Suzanne Chang",
              username: "upbeat1811",
            },
          },
        ],
      },
    ],
  },
];
export const formFields = [
  {
    type: "input",
    description: "Add a short, descriptive headline",
    label: "Feedback Title",
  },
  {
    type: "select",
    description: "Choose a category for your feedback",
    label: "Category",
    options: ["Feature", "UI", "UX", "Enhancement", "Bug"],
  },
  {
    type: "textarea",
    label: "Feedback Detail",
    description:
      "Include any specific comments on what should be improved, added, etc.",
  },
];

export const EditFormFileds = [
  {
    type: "input",
    description: "Add a short, descriptive headline",
    label: "Feedback Title",
  },
  {
    type: "select",
    description: "Choose a category for your feedback",
    label: "Category",
    options: ["Feature", "UI", "UX", "Enhancement", "Bug"],
  },
  {
    type: "select",
    description: "Change feature state",
    label: "Status",
    options: ["Suggestion", "Planned", "In-Progress", "Live"],
  },
  {
    type: "textarea",
    label: "Feedback Detail",
    description:
      "Include any specific comments on what should be improved, added, etc.",
  },
];
