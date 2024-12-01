import { useState } from 'react';
import './App.css';
import './style.css';
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function App() {
  const [user, setuser] = useState("");
  const [task, settask] = useState([]);
  const[num,setnum]=useState([]);
  const Adding=()=>{
    alert("Task Added Successfully");
  }
  const handleCompleted=()=>{
    setnum([]);
  }
  const handleleft=(curPek)=>{
    console.log(curPek);
    console.log(num);
    const updatepeak=task.filter((curValue)=>curValue===curPek);
    const updatedfellow=task.filter((curValue)=>curValue!==curPek);

    setnum((prevnum)=>[...prevnum, 
      updatepeak]);
    settask(updatedfellow);
  }
  const PopUp=()=>{
    alert(`Do you want to delete the task`)
  }
  const handleright = (curValue) => {
    console.log(task);
    console.log(curValue);

    const updatedtask = task.filter((curteam) => curteam !== curValue);
    settask(updatedtask);
    PopUp();
  };

  const handleInputChange = (value) => {
    setuser(value);
  };
  
  const handleclear=()=>{
    settask([]);
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!user) return;

    if (task.includes(user)) {
      setuser("");
      return;
    }

    settask((prevTask) => [...prevTask, user]);
    setuser("");
  };

  return (
    <div className="First">
      <div className="second">
        <h1 style={{color:"#6667AB"}}>Task Manager App</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="search"
            value={user}
            onChange={(event) => handleInputChange(event.target.value)}
          />
          <button onClick={Adding}>Add it!</button>
        </form>
      </div>
      <section className="Fourth">
        <ul>
          {task.map((curelem, index) => {
            return (
              <li key={index}>
                <span
                  style={{
                    color: "red",
                  }}
                >
                  {curelem}
                  <MdDone onClick={()=>handleleft(curelem)}
                    style={{
                      position: "absolute",
                      fontSize: "30px",
                      top: "5px",
                      left: "200px",
                      border: "1px solid red",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                 />
                  <IoMdClose 
                    onClick={() => handleright(curelem)}
                    style={{
                      position: "absolute",
                      fontSize: "30px",
                      top: "5px",
                      left: "250px",
                      color: "red",
                      backgroundColor: "violet",
                      cursor: "pointer",
                    }}
                  />
                  <select className='statue'>
                    <option value="par">20%</option>
                    <option>40%</option>
                    <option>60%</option>
                    <option>80%</option>
                    <option>100%</option>
                  </select>
                </span>
              </li>
            );
          })}
        </ul>
      </section>
      <button className='data' onClick={handleclear}>
        Clear All
      </button>
      <section className='completed'>
        <h1 className='paka'>Task Completed</h1>
        <ul>
          {num.map((curelem,index)=>{
            return(
              <li key={index}>
                <span id="krishna" style={{color:"green"}}>
                  {curelem}
                </span>
                <select className='balaji'>
                  <option>100%</option>
                </select>
              </li>
            )
          })}
        </ul>
        <button id="mongo"  onClick={handleCompleted}>Clear All</button>
      </section>
    </div>
  );
}

export default App;
