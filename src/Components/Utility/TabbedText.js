// Header with options to select
//below fixed full width text container 
// --tab--tab--tab--
// -----Content-----
import "../../CSS/general.css"

function TabbedText(contents){
    return(
        
        <div className="tabbed-text-container">
            <div className="tabbed-text-header">
                {
                    contents.map((x) =>(
                        <button>{x["tab"]}</button>
                    ))
                }
            </div>
            <div className="tabbed-text-content">
                
            </div>
        </div>
    );
}
export default TabbedText;