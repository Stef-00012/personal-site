"use client";

import { getRankedRepos } from "@/functions/githubRepos"
import type { Project as ProjectType } from "@/types/projects"
import { useEffect, useState } from "react"
import { projects } from "@/data/projects"
import Project from "@/components/projectCard"

export default function Projects() {
    const [topRepos, setTopRepos] = useState<ProjectType[]>([])
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

            setTopRepos(projectRepos)
        }

        fetchTopRepos()
    }, [])

    return (
        <div className="p-10">
            <h1 className="font-mono ml-5 my-2 font-bold"> &#47;&#47; Top GitHub Repositories</h1>
            <div className="min-h-screen sm:mx-4 flex justify-center items-center ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {topRepos.map((repo) => (
                        <Project
                            key={repo.git?.id}
                            project={repo}
                        />
                    ))}
                </div>
            </div>
            
            <h1 className="font-mono ml-5 my-2 font-bold"> &#47;&#47; Other Projects</h1>
            <div className="min-h-screen sm:mx-4 flex justify-center items-center ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projectList.map((project) => (
                        <Project
                            key={project.name}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
    
}