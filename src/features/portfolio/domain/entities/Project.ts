export type ProjectCategory = "Mobile Apps" | "Web Apps";

export type MediaItem = string | { type: "youtube"; url: string };

export interface Project {
  id: string;
  title: string;
  appIdea: string;
  position: string;
  platform: "Android" | "web";
  category: ProjectCategory;
  startDate: string;
  endDate: string;
  year: string; // primary year for the rail (derived from endDate)
  descriptionPoints: string[];
  stack: string[];
  github?: string;
  link?: string;
  images: MediaItem[];
}
