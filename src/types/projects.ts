import type { FormattedRepo, RepoLicense } from "./github";

export interface Project {
    name: string;
    url?: string | null;
    source?: string | null;
    description?: string | null;
    git?: FormattedRepo;
    slug: string;
    license?: RepoLicense | null;
}