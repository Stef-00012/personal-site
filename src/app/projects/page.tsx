"use client";

import { getRankedRepos } from "@/functions/githubRepos"
import type { Project as ProjectType } from "@/types/projects"
import { useEffect, useState } from "react"
import { projects } from "@/data/projects"
import Project from "@/components/projectCard"

export default function Projects() {
    const [projectList, setProjectList] = useState<ProjectType[]>(projects)

    useEffect(() => {
        async function fetchTopRepos() {
            const repos = await getRankedRepos()
            
            const projectRepos: ProjectType[] = repos.map(repo => ({
                name: repo.fullName,
                description: repo.description,
                url: repo.homepage,
                git: repo
            }))

            setProjectList(prevProjects => [...projectRepos, ...prevProjects])
        }

        fetchTopRepos()
    }, [])

    return (
        <div className="min-h-screen mx-4 sm:mx-[20vh] flex justify-center items-center">
            <div className="flex gap-4 flex-wrap justify-center">

                {/* Individual Project Card Template */}
                {projectList.map((project, index) => (
                    <Project
                        key={project.name}
                        project={project}
                    />
                ))}

            </div>
        </div>
    )
}