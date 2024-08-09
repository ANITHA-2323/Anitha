const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tajmahal',
{

});

const storySchema = new mongoose.Schema({
	sid:Number,
	sname:String,
	author:String,
	address:String
});
const Story = mongoose.model('Story',storySchema);

app.get('/stories',async(req,res) => {
	const story = await Story.find();
	res.send(story);
});

app.get('/stories/:id',async(req,res) => {
	const story = await Story.findOne();
	res.send(story);
}); 

app.post('/stories',async(req,res) =>{
	const story= new Story({sid:req.body.sid,sname:req.body.sname,author:req.body.authour,address:req.body.address});
	await story.save();
	res.send(story);
});


app.put('/stories/:id',async(req, res)=>{
	const story = await Story.findByIdAndUpdate(req.params.id, req.body,{new:true});
	res.send(story); 
});

app.delete('/stories/:id',async (req,res)=>{
	await Story.findByIdAndDelete(req.params.id);
	res.send({ message:'Story deleted'});
});

app.listen(5000,() =>{
	console.log('Server is running on port 5000');
});