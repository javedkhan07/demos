import *as motion  from "motion/react-client"
const Home = () => {
  return (
    <div>
      {/* <motion.div className="box" animate={{skewX:20}}/>
      <motion.div className="box" animate={{skewY:20}}/>
      <motion.div className="box" animate={{skew:20}}/>
      <motion.div className="box" animate={{rotate:20}}/>
      <motion.div className="box" animate={{rotateX:20}}/> */}
      <motion.div className="box" 
      animate={{
        scale :[1,2,3,4,3,2,1],
        rotate:[0,0,270,270,0,0],
        borderRadius:["20%","20%","50%","50%","20%","20%"],
        backgroundColor:["#ff008c","#7700ff","#29d5ff","#7700ff","#ff008c"],
      }}
      transition={{
        duration:4,
        ease:"easeInOut",
        repeat:Infinity,
        repeatType:"reverse",
        repeatDelay:1,
      }}
      />
     
      
    </div>
    
    );
};

export default Home;
