import { IconType } from "react-icons";
import { StaticImageData } from "next/image";

// For Dashboard sideNav
export interface SideNavDataProps {
  id: number;
  label: string;
  href: string;
  icon: IconType;
}

// For BlogPosts page
export interface PostsDataProps {
  id: number;
  img: StaticImageData;
  category: string;
  desc: string;
  author: string;
  date: number;
  title: string;
}

// for BlogList page
export interface ListDataProps {
  id: number;
  img: StaticImageData;
  author: string;
  title: string;
  category: string;
  date: string;
  edit: IconType;
  delete: IconType;
}
