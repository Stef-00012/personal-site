import type { Project as ProjectType } from "@/types/projects";

interface Props {
	project: ProjectType
}

export default function Project({ project }: Props) {
	return (
		<div className="card card-lg bg-base-100 shadow shadow-base-100 glass w-full sm:w-96 h-full">
			<div className="card-body">
				<p className="card-title">{project.git?.fullName || project.name}</p>
				{project.git && (
                    <div className="top-repo-info font-mono">
                        <p className="me-2 text-warning">
                        <a href={`https://github.com/${project.git.fullName}/stargazers`}>
                            <span className="me-1 icon-[tabler--star] -mb-1 size-5" />
                            {project.git.stars}</a>
                        </p>
                        <p className="me-2 text-success">
                            <a href={`https://github.com/${project.git.fullName}/forks`}>
                            <span className="me-1 icon-[tabler--git-fork] -mb-1 size-5" />
                            {project.git.forks}</a>
                        </p>
                        <p className="me-2 text-error">
                            <a href={`https://github.com/${project.git.fullName}/issues`}>
                            <span className="me-1 icon-[tabler--circle-dot] -mb-1 size-5" />
                            {project.git.openIssues}</a>
                        </p>
                        <p className="me-2 text-accent">
                            <a href={`https://github.com/${project.git.fullName}/watchers`}>
                            <span className="me-1 icon-[tabler--eye] -mb-1 size-5" />
                            {project.git.watchers}</a>
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
				<p>{project.git?.description || project.description}</p>
				<div className="card-actions mt-4 -mb-4">
					{(project.git?.homepage || project.url) && (
                        <a
                            href={(project.git?.homepage || project.url) as string}
                            className="btn btn-soft btn-accent flex items-center"
                        >
                            <span className="icon-[tabler--link] size-5" />Project Link
                        </a>
                    )}
                    {(project.git?.homepage || project.url) && (
                        <a
                            href={(project.git?.homepage || project.url) as string}
                            className="btn btn-soft btn-accent flex items-center"
                        >
                            <span className="icon-[tabler--link] size-5" />Source Code
                        </a>
                    )}
				</div>
			</div>
		</div>
	);
}
