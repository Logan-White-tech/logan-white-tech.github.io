import { useState } from "react";

const hitDie = {
    punish:"1d4",
    bleeding:"1d4",
    leechToxin:"0",
    neuroToxin:"1d4"
};
function Target(targetNum, rolls, rollDie = 4){
    const [stacks, setStacks] = useState({
        punish:0,
        bleeding:0,
        leechToxin:0,
        neuroToxin:0
    });
    
    let rollCMD = "/roll ";
    for (const [key, value] of Object.entries(stacks)) {
        let numDie = parseInt(hitDie[key][0]);
        let index = -1;
        for(let i = 1; i < hitDie[key].length; i++){
            if(hitDie[key][i] == "d"){
                index = i;
                break;
            }
        }
        let rollDie = parseInt(hitDie[key].slice(++index) );
        rollCMD+= value*numDie +"d"+ rollDie + "+" ;
        // rollCMD+= value + "d" + rollDie + "+" + value + "+";
    }
    rollCMD = rollCMD.slice(0,rollCMD.length-1);
    
    function increment(key){
        stacks[key]++
        setStacks(stacks =>({...stacks}));
    }
    function decrement(key){ 
        if(stacks[key] == 0){
            return;
        }
        let keyVal =  {}[key] = stacks[key]--;
        let newState = {...stacks, ...keyVal};
        setStacks(stacks =>({...stacks, ...newState}));
    }
    function doom(){
        for (const [key, value] of Object.entries(stacks)) {
            stacks[key] = stacks[key]*2;
        }
        setStacks(stacks =>({...stacks}));
    }
    return(
        <div className="target" key={targetNum}> 
                <div>
                    <h2>Target </h2>
                    {Object.keys(stacks).map((x)=>(          
                        <div>
                            <label for={x}>{x+" Stacks: "}</label> 
                            <input type='number' id={x} value={stacks[x]} min={0} disabled></input>
                            <button onClick={()=>(increment(x))}>+</button>
                            <button onClick={()=>(decrement(x))}>-</button>
                        </div>    
                    ))}
                    
                </div>
                <div className="ability">
                        <button onClick={()=>(doom())}>Doom</button>
                </div>
                <div>
                    <h3>
                        <div>Roll command:{rollCMD}</div>
                        <button onClick={()=>(navigator.clipboard.writeText(rollCMD))} >Copy</button>
                    </h3>
                </div>
            </div>
        
    );
}
export default Target;