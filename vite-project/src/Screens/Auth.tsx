import {AuthBanner} from "../Components/AuthBanner";
import {AuthCredentials} from "../Components/AuthCredentials";

function Auth() {
  // const [count, setCount] = useState(0)

  return (
    <div style={{display:"flex"}}>
        <div  style={{flex : 4 }}>
            <AuthBanner />
        </div>
        <div  style={{flex : 6}}>
            <AuthCredentials /> 
        </div>
      
    </div>
  )
}

export default Auth