export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: "show";
  color: string;
  link: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Mewtopia",
    date: "December 6, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Queen's Manor Event Center, Brampton",
    description: "",
    type: "show",
    color: "red",
    link: "https://www.instagram.com/mewtopiacanada",
  },
  {
    id: "2",
    title: "Hobby Con",
    date: "December 13, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Eros Convention Center, 2360 Lucknow Dr, Mississauga",
    description: "",
    type: "show",
    color: "purple",
    link: "https://www.instagram.com/thehobbycon",
  },
  {
    id: "3",
    title: "Hobby Con",
    date: "January 3, 2026",
    time: "9:00 AM - 3:00 PM",
    location: "Eros Convention Center, 2360 Lucknow Dr, Mississauga",
    description: "",
    type: "show",
    color: "green",
    link: "https://www.instagram.com/thehobbycon",
  },
];
