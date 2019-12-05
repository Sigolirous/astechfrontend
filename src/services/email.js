const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user:'contato.augustosigolo@gmail.com',
        clientId: '657488525085-g3lt1gp0b7o9nsrh4pckntia06meksve.apps.googleusercontent.com',
        clientSecret: 'UdJiRYtZNWX-bkORPKZmTsxL',
        refreshToken: '1//04Dn-7jvUfRD4CgYIARAAGAQSNwF-L9Ir0ftXv3Pb7_Ddw7OTnosRVWiDTFwZwX2q9mex6vd_kN7JjJaUTBr4a7aQsUXrh88WRoM',
        accessToken: 'ya29.Il-zB9e4jhE8ZtXG-zrR83e-5rTXRICGDuCTjaEycLT5SghXslqJwz7vOIIdmHT7qZRPOM7p_VYmFU0NVH0kX91yDw9mC-YgL3EN1FMub8URQBXYc0ZFuH2EbO2KHwpxuw',
    },
  });

const mail = {
    from:'contato.augustosigolo@gmail.com',
    to:'contato.augustosigolo@gmail.com',
    subject:'test',
    text:'Test test test :D!'
}

transporter.sendMail(mail, (err, data)=>{
    if(err){
        throw err
    }else{
        console.log('Success!')
    }
})