export type RoadmapStatus =
  | "completed"
  | "in-progress"
  | "future";

export interface RoadmapItem {
  name: string;
  status: RoadmapStatus;
}

export interface RoadmapSection {
  title: string;
  status: RoadmapStatus;
  items: RoadmapItem[];
}