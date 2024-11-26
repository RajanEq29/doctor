import { Image, Text ,View } from "react-native"


export default Topnavbar = ()=>{
 
          return (
            <View  style={{  height: 130 ,borderBottomLeftRadius:30,borderBottomRightRadius:30,backgroundColor:'white',}}>
              <Image
                source={{ uri: 'https://doctor.shatayu.online/assets/logo6-668d3c61.png' }}
           style={{height:150,width:400}}
               
              />
              
            </View>
          );
      
 
}