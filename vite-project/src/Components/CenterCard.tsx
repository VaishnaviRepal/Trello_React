import type { PropsWithChildren } from "react";

export function Center({ children }: PropsWithChildren) {
    return (
        // To horizontally align in center
        // For aligning vertically, use alignItems: "center" on the parent div
        <div style={{  display:"flex", justifyContent: "center" }}>
            {children}
         </div>
    )
}