export interface Skill {
  name: string;
  category: "Mobile" | "Backend" | "Frontend" | "Architecture";
  blurb: string;
  /** Long-form description shown when a card is opened. */
  detail?: string;
  /** Short bullet highlights shown alongside the detail. */
  highlights?: string[];
}
