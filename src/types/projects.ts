import type { FormattedRepo } from "./github";

export interface Project {
    name: string;
    url: string | null;
    description: string | null;
    git?: FormattedRepo
}