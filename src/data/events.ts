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
    title: "Hobby Con",
    date: "January 3, 2026",
    time: "9:00 AM - 3:00 PM",
    location: "Eros Convention Center, 2360 Lucknow Dr, Mississauga",
    description: "",
    type: "show",
    color: "green",
    link: "https://www.instagram.com/thehobbycon",
  },
  {
    id: "2",
    title: "Hobby Con Expo",
    date: "January 16-18, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "Venu Event Space, 2800 Hwy 7, Vaughan",
    description: "",
    type: "show",
    color: "red",
    link: "https://www.instagram.com/thehobbycon",
  },
  {
    id: "3",
    title: "Sport Card Expo x CSC",
    date: "February 13-15, 2026",
    time: "9:00 AM - 3:00 PM",
    location: "The International Centre, 6900 Airport Rd, Mississauga",
    description: "",
    type: "show",
    color: "purple",
    link: "https://www.instagram.com/csc.tcg",
  },
];
