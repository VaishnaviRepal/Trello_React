import { Appbar } from "../Components/Appbar";
import {useState} from "react";
import { BoardsSectionBins } from "../Components/BoardsSectionBins";
import { Cards } from "../Components/CardsOrTasks";

function Boards() {
  //Arr of objects for tasks 
  const [pendingTasks, setPendingTasks] = useState([
    {
      id : "1",
      title : "Task1",
      description  : "This is task 1"
    },
    
    {
      id : "4",
      title : "Task4",
      description  : "This is task 4"
    },
    
    {
      id : "6",
      title : "Task6",
      description  : "This is task 6"
    }
  ]) 
    
  

  const [onGoingTasks, setOngoingTasks] = useState([
    {
      id : "7",
      title : "Task7",
      description  : "This is task 7"
    },
    
    {
      id : "2",
      title : "Task2",
      description  : "This is task 2"
    }
  ])

  const [completedTasks, setCompletedTasks] = useState([
    
    {
      id : "3",
      title : "Task3",
      description  : "This is task 3"
    },
    
    {
      id : "5",
      title : "Task5",
      description  : "This is task 5"
    }

  ]);

  return (
    <div>
        <Appbar />
        <div style={{ display: "flex" }}>
          <BoardsSectionBins onDrop={
            (item : any)=>{
              setPendingTasks(bin => bin.filter(t => t.id !== item.id))
              setOngoingTasks(bin => bin.filter(t => t.id !== item.id))
              setCompletedTasks(bin => bin.filter(t => t.id !== item.id))

              setPendingTasks(t => [...t, item])
            }
          }>
            {/* Added unique ids */}
            {
              pendingTasks.map((task)=>
                <Cards 
                  id={task.id} 
                  title={task.title} 
                  description={task.description} 
                />

              )
            }
          </BoardsSectionBins>

          <BoardsSectionBins onDrop={
            (item : any)=>{
              //Remove this curr task choosen from all bins
              setPendingTasks(bin => bin.filter(t => t.id !== item.id))
              setOngoingTasks(bin => bin.filter(t => t.id !== item.id))
              setCompletedTasks(bin => bin.filter(t => t.id !== item.id))
              //Then add it to the target bin
              setOngoingTasks(t => [...t, item])
            }
          }>
            {
              onGoingTasks.map((task)=>
                <Cards 
                  id={task.id} 
                  title={task.title} 
                  description={task.description} 
                />

              )
            }
          </BoardsSectionBins>


          <BoardsSectionBins onDrop={
            (item : any)=>{
              setPendingTasks(bin => bin.filter(t => t.id !== item.id))
              setOngoingTasks(bin => bin.filter(t => t.id !== item.id))
              setCompletedTasks(bin => bin.filter(t => t.id !== item.id))

              setCompletedTasks(t => [...t, item])
            }
          }>
            {
              completedTasks.map((task)=>
                <Cards 
                  id={task.id} 
                  title={task.title} 
                  description={task.description} 
                />

              )
            }
          </BoardsSectionBins>
      </div>
    </div>
  );
}

export default Boards;
