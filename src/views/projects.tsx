"use client";

import { getRankedRepos } from "@/functions/githubRepos"
import type { Project as ProjectType } from "@/types/projects"
import { useEffect, useState } from "react"
import { projects } from "@/data/projects"
import Project from "@/components/projectCard"

interface Props {
    topRepos: ProjectType[]
}

export default function Projects({ topRepos }: Props) {
    return (
        <div className="p-10">
            <h1 className="font-mono my-4 font-bold sm:mx-4 flex justify-center items-center mb-10"> &#47;&#47; Top GitHub Repositories</h1>
            {topRepos.length > 0 ? (
                <div className="sm:mx-4 flex justify-center items-center ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {topRepos.map((repo) => (
                            <Project
                                key={repo.git?.id}
                                project={repo}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <h1 className="text-center text-2xl my-10"><span className="loading loading-spinner text-accent" /> Loading top GitHub repositories...</h1>
            )}
            
            <h1 className="font-mono my-4 font-bold sm:mx-4 flex justify-center items-center mt-10"> &#47;&#47; Other Projects</h1>
            <div className="sm:mx-4 flex justify-center items-center ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
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