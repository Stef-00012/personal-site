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
        <div className="min-h-screen mx-4 flex justify-center items-center p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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