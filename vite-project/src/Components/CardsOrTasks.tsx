import { useDrag } from "react-dnd";

interface CardsProps {
    id: string; // Crucial: Each card needs a unique ID to identify it when dragged
    title: string;
    description: string;
}

export function Cards({ id, title, description }: CardsProps) {
    // Connect this component to the react-dnd dragging system
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "CARD", // A unique string identifier for this draggable item type
        item: { id, title }, // The data passed along when dragging begins
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(), // Dynamically track if this specific card is being dragged
        }),
    }));

    return (
        <div 
            // Pass the dragRef hook directly to your element's ref
            ref={(node) => {
                dragRef(node);
            }} 
            style={{
                opacity: isDragging ? 0.3 : 1, // Dims the card when picked up
                border: "1px solid #e4e9ed", 
                borderRadius: "10px", 
                padding: "10px", 
                margin: "10px", 
                cursor: "grab", // Indicates it can be picked up
                backgroundColor: "#e4e9ed",
                transition: "opacity 0.2s ease"
            }}
        >
            <div style={{ margin: "10px", fontWeight: "bold" }}>
                {title}
            </div>
            <div style={{ height: "1px", width: "100%", background: "black" }}></div>
            <div style={{ margin: "10px" }}>
                {description}
            </div>
        </div>
    );
}
