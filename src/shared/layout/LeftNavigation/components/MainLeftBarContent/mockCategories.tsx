import { IoMdGrid } from "react-icons/io";
import { LuArchive } from "react-icons/lu";

export const mockCategories = [
  { id: 3, name: "Web Development" },
  { id: 4, name: "Mobile Apps" },
];

export const mockCategoriesDefault = [
  { id: 1, name: "All Projects", icon: <IoMdGrid /> },
  { id: 2, name: "Archived Projects", icon: <LuArchive /> },
];
