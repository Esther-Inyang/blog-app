import img1 from "@/public/img1.jpeg";
import img2 from "@/public/img2.jpg";
import img3 from "@/public/img2.jpg";
import img4 from "@/public/img4.jpg";
import img5 from "@/public/img5.jpg";
import img6 from "@/public/img6.jpg";
import img7 from "@/public/img7.jpg";
import medimg1 from "@/public/medimg1.jpg";
import medimg2 from "@/public/medimg2.jpg";
import medimg3 from "@/public/medimg3.jpg";
import { PostsDataProps } from "@/app/types";

export const postsData: PostsDataProps[] = [
  {
    id: 1,
    img: img6,
    category: "Education",
    title: "Why we need education",
    desc: "Education is the cornerstone of human progress. It empowers individuals, communities, and nations to reach their full potential. Through education, we acquire knowledge, develop skills, and cultivate critical thinking abilities.",
    author: "Maya Reuben",
    date: Date.now(),
  },
  {
    id: 2,
    img: img4,
    category: "Politics",
    title: "The role of social media",
    desc: "In recent years, social media platforms have played an increasingly significant role in political campaigns and elections. This blog post will explore how social media has transformed the political landscape and its potential impact on democratic processes.",
    author: "Eva Grey",
    date: Date.now(),
  },
  {
    id: 3,
    img: img2,
    category: "Programming",
    title: "Innovation in digital age",
    desc: "Programming is the process of creating instructions that computers can follow to perform specific tasks. It's a skill that's becoming increasingly valuable in today's digital age.",
    author: "Grace Maya",
    date: Date.now(),
  },
  {
    id: 4,
    img: img7,
    category: "Education",
    title: "Access to resources",
    desc: "Technology has revolutionized the way we learn and teach. From interactive textbooks to online courses, technology has opened up new possibilities for education.",
    author: "Marshal Rein",
    date: Date.now(),
  },
  {
    id: 5,
    img: img3,
    category: "Politics",
    title: "The digital politics",
    desc: "In recent years, social media platforms have played an increasingly significant role in political campaigns and elections. This blog post will explore how social media has transformed the political landscape and its potential impact on democratic processes.",
    author: "Maurice Abel",
    date: Date.now(),
  },
  {
    id: 6,
    img: img5,
    category: "Education",
    title: "Artificial intelligence impact",
    desc: "The world of work is undergoing a rapid transformation, driven by technological advancements and globalization. As automation and artificial intelligence continue to evolve, the nature of jobs and the skills required to succeed are changing.",
    author: "Eunice Pascal",
    date: Date.now(),
  },
  {
    id: 7,
    img: img1,
    category: "Programming",
    title: "Filtering the errors",
    desc: "Debugging is an essential skill for any programmer. It involves identifying and fixing errors in code. While it can be frustrating at times, debugging is also a rewarding process that can help you become a better programmer.",
    author: "Helen Mark",
    date: Date.now(),
  },
  {
    id: 8,
    img: medimg3,
    title: "The Future of Medicine",
    category: "Medicine",
    desc: "The field of medicine is rapidly evolving, with groundbreaking innovations transforming healthcare as we know it. From artificial intelligence to gene editing, advancements in technology are revolutionizing diagnosis, treatment, and patient care.",
    author: "Hossiah Peterson",
    date: Date.now(),
  },
  {
    id: 9,
    img: medimg1,
    title: "Mental Health Awareness",
    category: "Medicine",
    desc: "Mental health is just as important as physical health. Yet, mental health issues are often stigmatized and overlooked. It's crucial to raise awareness about mental health and encourage individuals to seek help when needed.",
    author: "Raphael Paul",
    date: Date.now(),
  },
  {
    id: 10,
    img: medimg2,
    title: "The Benefits of Telemedicine",
    category: "Medicine",
    desc: "Telemedicine, the delivery of healthcare services through telecommunications technology, has gained significant popularity in recent years. It offers numerous benefits for both patients and healthcare providers.",
    author: "Mary Jeffery",
    date: Date.now(),
  },
];
