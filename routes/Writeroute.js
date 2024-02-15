const writemodel=require("../model/Write")
// const multer =require('multer');
// const storage =multer.memoryStorage();
// const upload =multer({storage: storage});



const app = require('express').Router()


app.post ('/writeview', async (request, response) => {
    const {title,write} = request.body;
    try {
    
    const newUser = new writemodel({ title,write});
      await newUser.save();
  
      response.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: 'Internal Server Error' });
    }
});

// app.post('/writeview', upload.single('photo'), async (request, response) => {
//   // try {
//               const { title, write } = request.body
//               const writes = new writemodel({
//                  title,
//                  write,
//                  photo: {
//                       data: request.file.buffer,
//                       contentType: request.file.mimetype,
//                   }
                  
//               })
//               console.log(writes)
//               await writes.save();
//               response.status(200).json({ message: 'post added successfully' });
//       // }
//   // catch (error) 
//   // {
//   //             response.status(500).json({ error: 'Internal Server Error' });
//   // }
// }
// )


// //view
// app.get('/postview', async (request, response) => {

//   const result = await writemodel.aggregate([
//     {
//       $lookup: {
//         from: 'write', // Name of the other collection
//         localField: 'title', // field of item
//         foreignField: '_id', //field of category
//         as: 'writeschema'
//     },
//   },
//   ]);

//   response.send(result)
// })




module.exports=app
