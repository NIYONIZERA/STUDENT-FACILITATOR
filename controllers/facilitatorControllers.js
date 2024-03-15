import facilitatorModel from "../models/facilitatorModel.js";
const facilitatorController = {
  createNewFacilitator: async (req, res) => {
    try {
      const newFacilitator = await facilitatorModel.create(req.body);
      res.status(201).json({
        message: "facilitator created successfully!!!",
        student: newFacilitator,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  getAllFacilitator: async (req, res) => {
    try {
      const getFacilitator = await facilitatorModel.find();
      res.status(200).json({
        message: "facilitator retrieved successfully!!!",
        students: getFacilitator,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  getFacilitatorById:  (req, res) => {
    facilitatorModel.findOne(req.params._id)
            .then((result) => {
                res.status(201).json({ msg: "Here is the facilitator matching this id", student: result});
        })
  },
  getFacilitatorByEmail:  (req, res) => {
    const email=  req.params.email
      facilitatorModel.findOne({"email":email})
            .then((result) => {
                res.status(201).json({ msg: "Here is the facilitator matching this email", student: result});
        })
  },

  updateFacilitator:  (req, res) => {
    
    
      facilitatorModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((facilitator) => {
        if (!facilitator) {
            return res
                .status(404)
                .json({ msg: 'No facilitator with this id was found.' });
        }
        res.json({ facilitator });
    })
    .catch((err) => {
        res.status(400).send(err);
    });
  
  },

  deleteFacilitator:  (req, res) => {
    facilitatorModel.findByIdAndDelete
        (req.params.id)
        .then(() => {
            res.json({ msg: `facilitator removed` });
        }).catch((err) => {
            res.status(400).send("Unable to delete");
        })
} 
  }
export default facilitatorController;
