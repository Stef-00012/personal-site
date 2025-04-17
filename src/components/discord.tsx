interface Props {
    discordID: string;
}

export default function DiscordStatus({ discordID }: Props) {
    return (
        <div className="card bg-base-100 my-4 shadow-base-200 shadow-lg">
            <div className="card-body">
                <p><em>Discord Status</em> <span className="status-success status"></span></p> 
                {/* in the above line, status-success for online, status-warning for idle, and status-error for do not disturb */}
                <p>Discord Activity</p>
            </div>
        </div>
    )
}