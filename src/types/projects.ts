import type { FormattedRepo } from "./github";

export interface Project {
    name: string;
    url?: string | null;
    source?: string | null;
    description?: string | null;
    git?: FormattedRepo
}