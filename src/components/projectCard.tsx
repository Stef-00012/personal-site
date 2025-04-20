import type { Project as ProjectType } from "@/types/projects";

interface Props {
	project: ProjectType
}

export default function Project({ project }: Props) {
	return (
		<div className="card card-lg bg-base-100 shadow shadow-base-100">
			<div className="card-body">
				<p className="card-title">{project.git?.fullName || project.name}</p>
				{project.git && (
                    <div className="top-repo-info">
                        <p className="me-1">
                            <span className="-mb-1 icon-[tabler--star] size-5" />
                            <a href="github.com/stef/project/stargazers">{project.git.stars}</a>
                        </p>
                        <p className="me-1">
                            <span className="-mb-1 icon-[tabler--git-fork] size-5" />
                            <a href="github.com/stef/project/forks">{project.git.forks}</a>
                        </p>
                        <p className="me-1">
                            <span className="-mb-1 icon-[tabler--circle-dot] size-5" />
                            <a href="github.com/stef/project/issues">{project.git.openIssues}</a>
                        </p>
                        <p className="me-1">
                            <span className="-mb-1 icon-[tabler--eye] size-5" />
                            <a href="github.com/stef/project/watchers">{project.git.watchers}</a>
                        </p>
                        <br />
                        {project.git.license && (
                            project.git.license.url ? (
                                <a href={project.git.license.url as string} className="-mt-2 text-base-content/70 italic">
                                    {project.git.license.name}
                                </a>
                            ) : (
                                <p className="-mt-2 text-base-content/70 italic">
                                    {project.git.license.name}
                                </p>
                            )
                        )}
                    </div>
                )}
				{project.git?.description || project.description}
				<div className="card-actions mt-4 -mb-4">
					{(project.git?.homepage || project.url) && (
                        <a
                            href={(project.git?.homepage || project.url) as string}
                            className="btn btn-soft btn-accent flex items-center"
                        >
                            <span className="icon-[tabler--link] size-5" />Project Link
                        </a>
                    )}
				</div>
			</div>
		</div>
	);
}
