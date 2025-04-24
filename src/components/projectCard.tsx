import Link from "next/link";

import type { Project as ProjectType } from "@/types/projects";

interface Props {
	project: ProjectType;
}

export default function Project({ project }: Props) {
	return (
		<div className="card card-lg bg-base-100 shadow shadow-base-100 glass w-full sm:w-96 h-full">
			<div className="card-body flex flex-col justify-between">
				<div className="flex flex-col gap-2">
					<p className="card-title">{project.name}</p>

					{project.git ? (
						<div className="top-repo-info font-mono">
							<p className="me-2 text-warning">
								<Link
									href={`https://github.com/${project.git.fullName}/stargazers`}
								>
									<span className="me-1 icon-[tabler--star] -mb-1 size-5" />
									{project.git.stars}
								</Link>
							</p>
							<p className="me-2 text-success">
								<Link href={`https://github.com/${project.git.fullName}/forks`}>
									<span className="me-1 icon-[tabler--git-fork] -mb-1 size-5" />
									{project.git.forks}
								</Link>
							</p>
							<p className="me-2 text-error">
								<Link
									href={`https://github.com/${project.git.fullName}/issues`}
								>
									<span className="me-1 icon-[tabler--circle-dot] -mb-1 size-5" />
									{project.git.openIssues}
								</Link>
							</p>
							<p className="me-2 text-accent">
								<Link
									href={`https://github.com/${project.git.fullName}/watchers`}
								>
									<span className="me-1 icon-[tabler--eye] -mb-1 size-5" />
									{project.git.watchers}
								</Link>
							</p>
							{project.git.license && (
								<>
									<br />
									{project.git.license.url ? (
										<Link
											href={project.git.license.url as string}
											className="-mt-2 text-base-content/70 italic"
										>
											{project.git.license.name}
										</Link>
									) : (
										<p className="-mt-2 text-base-content/70 italic">
											{project.git.license.name}
										</p>
									)}
								</>
							)}
						</div>
					) : (
						<div className="h-0" />
					)}

					<p>{project.description}</p>
				</div>

				<div className="card-actions mt-4 -mb-4">
					{project.url && (
						<Link
							href={project.url}
							className="btn btn-soft btn-accent flex items-center"
						>
							<span className="icon-[tabler--link] size-5" />
							Project Link
						</Link>
					)}
					{project.source && (
						<Link
							href={project.source as string}
							className="btn btn-soft btn-accent flex items-center"
						>
							<span className="icon-[tabler--link] size-5" />
							Source Code
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
