setInterval(() => {
    
    date = new Date();    // current date
    
    hTime = date.getHours();         // taking current hour
    mTime = date.getMinutes();       // taking current minute
    sTime = date.getSeconds();       // taking current second


    // rotaion of hour hand 
    // 12hrs => 360* , 1hrs = 360/12 ,so 1hr = 30*, + , rotaion of Minute hand acc.
    hRotation = 30*hTime + mTime/2;   
    mRotation = 6*mTime;   // rotaion of min hand 
    sRotation = 6*sTime;   // rotaion of sec hand 

    hour.style.transform = `rotate(${hRotation}deg)`;  // linking to css to rotate the hands acc. to degrees. 
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

    console.log("sfd");
}, 1000);