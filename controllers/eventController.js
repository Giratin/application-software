
var events = [
    { id : 1, title : "event 1", date : "2020-09-25" },
    { id : 2, title : "event 2", date : "2020-09-26" },
];

var incrementId = function(){
    if(events.length == 0){
        return 1;
    }
    return events.length +1;
} 

module.exports = {
    getAll :(req,res,next)=>{
        res.render('events', { events })
    },
    showAddEvent :(req,res,next)=>{
        res.render('create', { events })
    },
    createEvent :(req,res,next)=>{
        var title = req.body.title;
        var {date} = req.body;

        events.push({ id : incrementId() , title : title, date : date })
        res.redirect('/events');
    },
    deleteEvent :(req,res,next)=>{
        const id = req.params.id;
        let position =-1;
        events.forEach((el)=>{
            if(!el.id == id){
                position ++;
            }
        });

        events.splice(position,1);
        res.json("OK")
    },
}