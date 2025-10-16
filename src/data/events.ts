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
    title: "Mississauga Sports Card",
    date: "October 18, 2025",
    time: "11:00 AM - 5:00 PM",
    location: "1245 Eglinton Ave W, Mississauga",
    description: "",
    type: "show",
    color: "blue",
    link: "https://www.instagram.com/mississaugasportscard",
  },
  {
    id: "2",
    title: "North American Card Exchange",
    date: "November 23, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "2638 Steeles Ave E, Brampton",
    description: "",
    type: "show",
    color: "red",
    link: "https://www.instagram.com/northamericancardexchange/",
  },
  {
    id: "3",
    title: "Hobby Con",
    date: "December 13, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "2340 Meadowvale Blvd #14, Mississauga",
    description: "",
    type: "show",
    color: "purple",
    link: "https://www.instagram.com/thehobbycon",
  },
];
