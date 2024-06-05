// .files[0].title = "index.html"
// .files[1].title = "README.txt"

export const projects = [
  {
    id: 1,
    title: "Holidaze",
    files: [
      {
        date: "28/05/2024",
      },
      {
        date: "27/05/2024",
        content:
          "This is a fictional accommodation booking site for users looking to book holidays and for venue managers to manage their properties. The application includes a customer-facing side where users can search, view, and book venues, as well as an admin-facing side where venue managers can add and manage venues.",
        thumbnail: {
          src: "thumbnails/holidaze.jpg",
          alt: "Holidaze homepage",
        },
      },
    ],
    netlify: "https://holydaze.netlify.app/",
    github: "https://github.com/sindrebenjamin/holidaze",
    figma:
      "https://www.figma.com/design/QcYDzt2AhyZtYzuSllkGBw/Project-Exam-02---Sindre-Skoglund-Hansen?node-id=1-4&t=wJJLKWFwKnC499Cy-1",
  },
  {
    id: 2,
    title: "Bidnet",
    files: [
      {
        date: "28/11/2023",
      },
      {
        date: "15/11/2023",
        content:
          "This is a fictional online auction app. You can create a user by making a @stud.noroff.no email and filling out the other required fields. Once you have a user, you can create listings and bid on other users' listings.",
        thumbnail: {
          src: "thumbnails/bidnet.jpg",
          alt: "Bidnet homepage",
        },
      },
    ],
    netlify: "https://darling-hamster-2c4e31.netlify.app",
    github: "https://github.com/sindrebenjamin/semester-project-2",
    figma:
      "https://www.figma.com/design/PuwPrwWjfleDTozpVBqGkN/Semester-Project-02---Sindre-Skoglund-Hansen?node-id=17-2",
  },
  {
    id: 3,
    title: "Ekte Skrot",
    files: [
      {
        date: "14/04/2024",
      },
      {
        date: "12/04/2024",
        content:
          "This is a fictional ecommerce application. You can view products and add them to your cart.",
        thumbnail: {
          src: "thumbnails/ekte_skrot.jpg",
          alt: "Ekte Skrot homepage",
        },
      },
    ],
    netlify: "https://fanciful-dolphin-87bfd0.netlify.app/",
    github: "https://github.com/sindrebenjamin/ekteskrot",
  },
];
