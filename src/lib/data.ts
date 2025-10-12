
export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  coverImage: string;
  rating: number;
  reviewCount: number;
  description: string;
  tags: string[];
  bestSeller?: boolean;
  newRelease?: boolean;
  featured?: boolean;
  discount?: number;
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Design of Everyday Things",
    author: "Don Norman",
    price: 17.99,
    originalPrice: 24.99,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewCount: 428,
    description: "The Design of Everyday Things shows that good, usable design is possible. The rules are simple: make things visible, exploit natural relationships that couple function and control, and make intelligent use of constraints. The goal: guide the user effortlessly to the right action on the right control at the right time.",
    tags: ["Design", "Psychology", "Non-fiction"],
    bestSeller: true,
    featured: true,
    discount: 25
  },
  {
    id: "2",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 15.99,
    coverImage: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    reviewCount: 537,
    description: "In the highly anticipated Thinking, Fast and Slow, Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical.",
    tags: ["Psychology", "Economics", "Non-fiction"],
    bestSeller: true
  },
  {
    id: "3",
    title: "Atomic Habits",
    author: "James Clear",
    price: 21.99,
    coverImage: "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviewCount: 845,
    description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    tags: ["Self-help", "Productivity", "Psychology"],
    bestSeller: true,
    featured: true
  },
  {
    id: "4",
    title: "Educated: A Memoir",
    author: "Tara Westover",
    price: 14.99,
    originalPrice: 19.99,
    coverImage: "https://images.unsplash.com/photo-1495640388908-15c012e90a6c?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviewCount: 723,
    description: "Educated is an account of the struggle for self-invention. It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With the acute insight that distinguishes all great writers, Westover has crafted a universal coming-of-age story that gets to the heart of what an education is and what it offers: the perspective to see one's life through new eyes and the will to change it.",
    tags: ["Memoir", "Biography", "Education"],
    discount: 25
  },
  {
    id: "5",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 23.99,
    coverImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviewCount: 648,
    description: "In Sapiens, Dr. Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions.",
    tags: ["History", "Anthropology", "Science"],
    featured: true
  },
  {
    id: "6",
    title: "The Four Winds",
    author: "Kristin Hannah",
    price: 18.99,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    reviewCount: 412,
    description: "From the number-one bestselling author of The Nightingale and The Great Alone comes a powerful American epic about love and heroism and hope, set during the Great Depression, a time when the country was in crisis and at war with itself, when millions were out of work and even the land seemed to have turned against them.",
    tags: ["Fiction", "Historical Fiction", "Drama"],
    newRelease: true
  },
  {
    id: "7",
    title: "Dune",
    author: "Frank Herbert",
    price: 16.99,
    coverImage: "https://images.unsplash.com/photo-1531072901881-d644216d4bf9?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviewCount: 923,
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the 'spice' melange, a drug capable of extending life and enhancing consciousness.",
    tags: ["Science Fiction", "Fantasy", "Classic"],
    bestSeller: true
  },
  {
    id: "8",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 13.99,
    originalPrice: 18.99,
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=800",
    rating: 4.4,
    reviewCount: 569,
    description: "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be 'positive' all the time so that we can truly become better, happier people.",
    tags: ["Self-help", "Personal Growth", "Psychology"],
    discount: 30
  },
  {
    id: "9",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 15.49,
    coverImage: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviewCount: 683,
    description: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl.",
    tags: ["Fiction", "Mystery", "Drama"],
    newRelease: true,
    featured: true
  },
  {
    id: "10",
    title: "Becoming",
    author: "Michelle Obama",
    price: 19.99,
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviewCount: 754,
    description: "In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America, she helped create the most welcoming and inclusive White House in history.",
    tags: ["Autobiography", "Memoir", "Politics"],
    bestSeller: true
  },
  {
    id: "11",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 14.49,
    coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    reviewCount: 512,
    description: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
    tags: ["Thriller", "Mystery", "Psychological Fiction"],
    newRelease: true
  },
  {
    id: "12",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 16.49,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviewCount: 589,
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
    tags: ["Fiction", "Fantasy", "Science Fiction"],
    featured: true
  }
];

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  avatar: string;
  message: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Emma Thompson",
    title: "Avid Reader",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    message: "BookBazaar has completely transformed my reading experience. The selection is unmatched, and the interface is so intuitive that finding my next favorite book is always just a few clicks away.",
    rating: 5
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Book Club Organizer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    message: "As someone who runs a monthly book club, I rely on BookBazaar for all our selections. The detailed descriptions and reviews make it easy to find books that will spark great discussions.",
    rating: 5
  },
  {
    id: "3",
    name: "Sophia Rodriguez",
    title: "Literature Professor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    message: "The academic literature section on BookBazaar is exceptional. I frequently recommend it to my students as a reliable source for both required texts and supplementary reading materials.",
    rating: 4
  }
];

export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Categories",
    href: "/catalog",
    children: [
      {
        title: "Fiction",
        href: "/catalog?category=fiction"
      },
      {
        title: "Non-Fiction",
        href: "/catalog?category=non-fiction"
      },
      {
        title: "Science Fiction",
        href: "/catalog?category=science-fiction"
      },
      {
        title: "Biography",
        href: "/catalog?category=biography"
      },
      {
        title: "Self-Help",
        href: "/catalog?category=self-help"
      }
    ]
  },
  {
    title: "Best Sellers",
    href: "/catalog?filter=bestsellers"
  },
  {
    title: "New Releases",
    href: "/catalog?filter=new-releases"
  },
  {
    title: "Offers",
    href: "/catalog?filter=offers"
  }
];
