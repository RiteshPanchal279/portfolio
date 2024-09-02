import { motion } from "framer-motion";

const Links=()=>{


   const variants={
      open:{
         transition: {
            staggerChildren:0.1,
          },
      },
      closed:{
         transition: {
            staggerChildren:0.08,
            staggerDirection:-2,
          },
      }
   }
   const itemVariants={
      open:{
         x:0,
         opacity:1,
      },
      closed:{
         x:50,
         opacity:0,
      }
   }

   const items=[
      "Homepage",
      "Services",
      "Portfolio",
      "Contact",
      "About",
   ]



   return <motion.div className="links" variants={variants}>
      {items.map((item)=>(
         <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}} >{item}</motion.a>
      ))}
   </motion.div>

}
export default Links;