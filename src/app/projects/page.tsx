export default function Projects() {
    return (
        <div className="min-h-screen mx-4 sm:mx-[20vh] flex justify-center items-center">
            <div className="flex gap-4 flex-wrap justify-center">

                {/* Individual Project Card Template */}
                <div className="card card-lg bg-base-100 shadow shadow-base-100">
                    <div className="card-body">
                        <p className="card-title">Project Title</p>
                        {/* for this div element below, only show it for top repos */}
                        <div className="top-repo-info">
                            <p>
                                <p className="me-1"><span className="-mb-1 icon-[tabler--star] size-5"></span><a href="github.com/stef/project/stargazers">3</a></p>
                                <p className="me-1"><span className="-mb-1 icon-[tabler--git-fork] size-5"></span><a href="github.com/stef/project/forks">3</a></p>
                                <p className="me-1"><span className="-mb-1 icon-[tabler--circle-dot] size-5"></span><a href="github.com/stef/project/issues">3</a></p>
                                <p className="me-1"><span className="-mb-1 icon-[tabler--eye] size-5"></span><a href="github.com/stef/project/watchers">3</a></p>
                            </p> <br />
                            <p className="-mt-2 text-base-content/70 italic">License: GNU AGPLv3</p>
                        </div>
                        About this project...
                        <div className="card-actions mt-4 -mb-4">
                            <a href="https://example.com" className="btn btn-soft btn-accent flex items-center"><span className="icon-[tabler--link] size-5"></span>Project Link</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}