const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')

// initialize nodemailer
var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user: 'le.muiv91@gmail.com',
            pass: 'muibkdn1991'
        }
    }
);

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
};

// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions))


var mailOptions = {
    from: '"Mui Le" <le.muiv91@gmail.com>', // sender address
    to: 'mui.le@tpptechnology.com', // list of receivers
    // to: 'mui.le@disprz.com', // list of receivers
    // subject: 'Email-template!',
    template: 'email', // the name of the template file i.e email.handlebars
    context:{
        name: "Mui", // replace {{name}}
        company: 'Disprz' // replace {{company}}
    }
};

// trigger the sending of the E-mail
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
