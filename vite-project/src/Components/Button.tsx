import type { PropsWithChildren, MouseEventHandler, ReactNode } from "react";

// // Extend PropsWithChildren to include the onClick function
// interface ButtonProps extends PropsWithChildren {
//     onClick?: MouseEventHandler<HTMLButtonElement>;
// }

// export function Button({ children, onClick }: ButtonProps) {
//     return (
//         <div>
//             {/* Now you can call onClick directly */}
//             <button className="button" onClick={onClick}>
//                 {children}
//             </button>
//         </div>
//     );
// }
interface ButtonProps extends PropsWithChildren {
    onClick?: MouseEventHandler<HTMLDivElement>;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export function Button(props: ButtonProps) {
    return (
        <div className="button" onClick={props.onClick} style={{display:"flex"}}>
            {/* Now you can call onClick directly */}
            
            
                <div style={{display:"flex",  paddingRight:"10px"}}>
                    {props.leftIcon}
                </div>
                    {props.children}
                <div style={{display:"flex",  paddingLeft:"10px"}}>
                    {props.rightIcon}
                </div>
            
            
        </div>
    );
}