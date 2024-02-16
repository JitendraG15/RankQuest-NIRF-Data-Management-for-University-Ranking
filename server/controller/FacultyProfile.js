const Faculty = require("../models/Faculty");


// change ROle Of Faculty
exports.changeFacultyRole = async (req, res)=>{
    try{
        const {facultyID, role} = req.body;

        const faculty = await Faculty.findByIdAndUpdate({_id:facultyID},{
            role:role
        },{new:true});

        if(faculty){
            console.log("Updated Faculty:", faculty);
        }

        return res.status(200).json({
            success:true,
            message:"Faculty Role Updated Successfully",
            faculty
        })

    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Error Occured While Changing Student Role"
        })
    }
}