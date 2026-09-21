
import {Center} from "./CenterCard";
import {InputCard} from "./InputCard";
import {Button} from "./Button";

export function AuthCredentials(){
    return (
        <div  style = {{minHeight : "100vh", display:"flex", alignItems:"center"}}>
            <div style={{width:"100%"}}>
                <Center>
                    <div style={{fontSize:"100", fontWeight:"bold", fontFamily:"Inter",margin:"10", padding:"10" }}>
                        Login to Trello
                    </div>
                </Center>
                <Center>
                    <div style = {{margin:"10", padding:"10"}}>Continue with :</div>
                </Center>
                <Center>
                    <div>
                        <InputCard type="email" placeholder="Email" />
                    </div>
                </Center>
                <Center>
                    <div>
                        <InputCard type="password" placeholder="Password" />
                    </div>
                </Center>
                <Center>
                    <Button leftIcon = {<img style={{height:"25px"}} src="https://play-lh.googleusercontent.com/yHwgV_50VEro9qUK84UCyMh16DqLizUJlzY_9-WuK9ZYegts9t8gX6Gkh3EvciS8gHLwOj-Qmc7bRAKg2IH4=w240-h480-rw"/>}>Sign Up</Button>
                </Center>
            </div>
            {/* AuthCredentials Component */}
            
        </div>
    )
}