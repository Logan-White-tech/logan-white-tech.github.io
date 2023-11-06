import '../../CSS/navigation.css';
import '../../CSS/general.css';
import Dropdown from '../Utility/Dropdown';

function Navigation(){
    return(
        <div className="navigation-container">
            <div>
                <a href="#">
                    Home
                </a>
            </div>
            
            <Dropdown header={"Education"} contents={[{name: "Degree",link: "1"},{name: "Certification",link: "2"}]} />
            <Dropdown header={"Pages"} contents= {[{name: "Github",link: "https://github.com/Logan-White-tech"}, {name: "LinkedIn",link: "https://www.linkedin.com/in/logan-white-02bb01254/"}]}/>
            <Dropdown header={"Projects"} contents= {[{name: "3D Printing",link: "#"}, {name: "CNC",link: "#"}, {name: "Programming",link: "#"}]}/>
            
            <div>
                <a href="#">
                    About
                </a>
            </div>            
        </div>
    );
}
export default Navigation;