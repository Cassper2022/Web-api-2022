// הפעלת פונקצייה מתוך ספריית אי אן וי שטוענת את ההגדרות מקובץ דואט אי אן וי
require('dotenv').config();
function sendEmail(u,p)
{
    console.log("sent Email to " + u);
    // קרא לגוגל והתחבר באמצעות השם והסיסמא
}
SendEmail(process.env.USER_EMAIL, process.env.EMAIL_PASS);
const http=require('http');
const app=require('./app');
const port=3000;
const srv=http.createServer(app);
srv.listen(port,()=>{console.log('Server Up')});