import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "../domain/entities/Project";

export type FilterValue = "All" | ProjectCategory;

export function useProjectFilter(projects: Project[]) {
  const [filter, setFilter] = useState<FilterValue>("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects],
  );

  return { filter, setFilter, filtered };
}
