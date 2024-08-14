const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/biography',
{

});

const cminfoSchema = new mongoose.Schema({
	cmname:
	{
	type:String,
	require:true
    },
	cmid:
	{
	type:Number,
	require:true
    },
	cmdob:
	{
	type:String,
	require:true
	},
	mstatus:
	{
	type:Boolean,
	default:false
	},
	cmaddress:{
	type:[{
		city:{
			type:Array,
			require:true
	},
	pincode:{
		type:Number,
		require:true
		}
	}],
	require:true
	},
	cmemail:
	{
	type:Array,
	require:true
	}



});
const Cminfo = mongoose.model('Cminfo',cminfoSchema);

app.get('/cminfo',async(req,res) => {
	const cminfo = await Cminfo.find();
	res.send(cminfo);
});

app.get('/cminfo/:id',async(req,res) => {
	const cminfo = await Cminfo.findOne();
	res.send(cminfo);
}); 

app.post('/cminfo',async(req,res) =>{
	const cminfo= new Cminfo({cmname:req.body.cmname,cmid:req.body.cmid,cmdob:req.body.cmdob,mstatus:req.body.mstatus,cmaddress:req.body.cmaddress,cmemail:req.body.cmemail});
	await cminfo.save();
	res.send(cminfo);
});


app.put('/cminfo/:id',async(req, res)=>{
	const cminfo = await Cminfo.findByIdAndUpdate(req.params.id, req.body,{new:true});
	res.send(cminfo); 
});

app.delete('/cminfo/:id',async (req,res)=>{
	await Cminfo.findByIdAndDelete(req.params.id);
	res.send({ message:'Cminfo deleted'});
});

app.listen(5000,() =>{
	console.log('Server is running on port 5000');
});


