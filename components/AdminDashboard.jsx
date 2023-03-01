import '../styles/AdminDashboard.css';

function AdminDashboard(){

    return(
        <>
        <div className = "admin_dashboard">
            <div className = "admin_header">
                <h1>WELCOME TO ADMIN DASH BOARD</h1>
            </div>
            <div className = "admin_container_one">
                <h1>At the Library this January</h1>
                <hr></hr>
                <p>By Erika Berlin on December 29, 2022</p>
                <p>Greenwich Library has a full schedule of (free!) enrichment events throughout January. Speak with a librarian or check the online…</p>
            </div>

            <div className = "admin_container_two">
                <h1>
                    AuthorsLive: Barbara Gage, author of “G-Man: J. Edgar Hoover and the Making of the American Century”
                </h1>
                <hr/>
                <p>By Erika Berlin on December 13, 2022</p>
                <p>Greenwich Library’s longest-running program—the Friends Friday Films series—is back with a full slate of movies, beginning on January 6. The…</p>
            </div>

            <div className = "admin_container_three">
                <h1>At the Library this December …</h1>
                <hr/>
                <p>By Erika Berlin on November 30, 2022</p>
                <p>Greenwich Library’s December Roundup of Events Features a Signature Series with Celebrity Editor Tina Brown, a Holiday Performance by the…</p>
            </div>
            <div style={{height:'1px'}}></div>
        </div>
        </>   
     )
}
export default AdminDashboard