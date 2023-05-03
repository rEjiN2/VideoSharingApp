import { createError } from "../error.js"
import User from "../models/Users.js"
import Video from "../models/Video.js"



export const update = async(req,res,next)=>{
    if(req.params.id === req.user.id){
try{
   const updatedUser = await User.findByIdAndUpdate(req.params.id,{
    $set:req.body
   },{
    new:true
   }
   )
res.status(200).json(updatedUser)
}catch(err){

}
    }else{
        return next(createError(403,"You can only Update your account"))
    }
}

export const deleteUser = async(req,res,next)=>{
    if(req.params.id === req.user.id){
        try{
          await User.findByIdAndDelete(req.params.id)
           res.status(200).json("User has been Deleted")

        }catch(err){
         next(err)
        }
    }
    else{
        return next(createError(403,"You Can only delete your account"))
    }
    
}
export const getUser = async(req,res,next)=>{
    try{
     const user = await User.findById(req.params.id)
     res.status(200).json(user)
    }catch(err){
        next(err)
    }
}
export const subscribeUser = async(req,res,next)=>{
    try{
        await User.findByIdAndUpdate(req.user.id,
        {$push:{subscribedUsers:req.params.id}
    })
    await User.findByIdAndUpdate(req.params.id,{
       $inc:{subscribers:1} 
    })
    res.status(200).json("Subscription Succesfull")
    }
    catch(err){
        next(err)
    }
    
}
export const unsubscribeUser = async(req,res,next)=>{
    try{
       
     await User.findByIdAndUpdate(req.user.id ,{
        $pull:{subscribedUsers:req.params.id}
     })
     await User.findByIdAndUpdate(req.params.id,{
        $inc:{subscribers:-1}
     })
     res.status(200).json("Unsubscription Succeful")
    }catch(err){
        next(err)
    }
}
export const likeVideo = async(req,res,next)=>{
    const id = req.user.id;
    const videoId = req.params.videoId
    
    try{
     await Video.findByIdAndUpdate(videoId,{
        $addToSet:{likes:id},
        $pull:{disLikes:id}
     })
     res.status(200).json("The video has been Liked")
    }catch(err){
        next(err)
    }
}
export const dislikeVideo = async(req,res,next)=>{
    const id = req.user.id;
    const videoId = req.params.videoId
    try{
        await Video.findByIdAndUpdate(videoId,{
            $addToSet:{disLikes:id},
            $pull:{likes:id}
         })
         res.status(200).json("The video has been Disliked")
    }catch(err){
        next(err)
    }
}