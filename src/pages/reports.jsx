//Display records from both tables using list patterns (map, reduce, or filter)
//Reports: venues, airports, guest list

export default function showReports(){



    return (
        <>
            <div className="reportDisplay">
                <Venues />
                <Airports />
            </div>
            <div className="report-nav">
                <button>Desktop</button>
                <button>Home</button>
            </div>
        </>
    );  
}