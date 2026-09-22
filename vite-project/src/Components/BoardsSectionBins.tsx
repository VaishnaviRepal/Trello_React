import { useDrop } from 'react-dnd';
//All of our react dnd happens in this section 
export function BoardsSectionBins(props: any) {
    const [{ isOver, canDrop }, drop] = useDrop({
        // FIX: Match the exact uppercase type "CARD" specified in your Cards component
        //useDrop is a hook in react-dnd lib or statevar and dragRef is called on the item which is being droped -> 
        accept: ["CARD"], 
        drop: (item) => props.onDrop(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),
    });

    return (
        <div 
          ref={drop} 
          style={{ 
            flex: "1", 
            minHeight: "100vh", 
            borderRight: "1px dotted black", 
            // Your custom layout coloring will activate flawlessly now
            background: isOver ? "green" : canDrop ? "lightBlue" : "transparent" 
          }}
        >
            {props.children}
        </div>
    );
}



// =====================
// Explanation : 
// Here is a step-by-step explanation of how these two components work together to build your drag-and-drop system.
// ------------------------------
// ## 1. The Column Blueprint (BoardsSectionBins)
// This component acts as an intelligent drop zone (a trash bin, a status lane, etc.). Its primary job is to listen for any draggable item flying over it and change colors to guide the user.

// const [{isOver, canDrop}, drop] = useDrop({
//     accept : ["CARD"],
//     drop : props.onDrop,
//     collect : (monitor) => ({
//         isOver : monitor.isOver(),
//         canDrop : monitor.canDrop()
//     }),
// })


// * accept: ["CARD"]: This tells the column, "Only pay attention to items labeled exactly as 'CARD'." If you try to drag an item with a different label type, this column will ignore it entirely.
// * drop: props.onDrop: When a valid card is physically released inside this container, it immediately fires the onDrop callback function passed down by its parent (Boards.tsx).
// * collect and monitor: This is a state-gathering machine. The monitor object continuously calculates if a card is currently floating directly above this column (isOver) and checks if that card is eligible to be dropped here (canDrop).
// * ref={drop}: By attaching this reference to the wrapper <div>, you tell React, "This specific visual section on the screen is officially an interactive drop target."
// * Dynamic Styling: The background color switches instantly between green, light blue, or transparent depending on the true/false values of isOver and canDrop.

// ------------------------------
// ## 2. The Board Orchestrator (Boards)
// This component acts as the brain. It holds the data, orchestrates the state changes, splits tasks into visual groups, and feeds them into the columns.
// ## Managing the Application State

// const [tasks, setTasks] = useState([
//   { id: "1", title: "Task1", description: "This is task 1", status: "pending" },
//   // ... rest of data
// ]);

// Instead of separate arrays, keeping tasks in a single source-of-truth array with a status field makes moving them trivial. We then use .filter() to split this single list into three columns smoothly.
// ## Updating the Data on Drop

// const handleDrop = (item: { id: string }, targetStatus: string) => {
//   setTasks((prevTasks) =>
//     prevTasks.map((t) => (t.id === item.id ? { ...t, status: targetStatus } : t))
//   );
// };

// When react-dnd alerts this function that a drag action finished:

//    1. It takes the unique id of the card you dragged.
//    2. It loops through your tasks until it finds a match.
//    3. It updates that matching item's status to the new target status (pending, ongoing, or completed), causing React to automatically re-render the card into its new column column right away.

// ## Rendering the Lanes

// <BoardsSectionBins onDrop={(item) => handleDrop(item, "pending")}>
//   {pendingTasks.map((task) => (
//     <Cards key={task.id} id={task.id} title={task.title} description={task.description} />
//   ))}</BoardsSectionBins>

// Each lane calls the exact same BoardsSectionBins blueprint but configures a unique instruction ("pending", "ongoing", or "completed") so that cards instantly know where they landed.
// Would you like to explore how to add animations when a card shifts between columns, or should we look at saving this board state to localStorage so the tasks don't reset when you refresh the page?

