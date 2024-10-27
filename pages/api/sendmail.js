require('dotenv').config()
import nodemailer from "nodemailer";

export default async function (req, res) {
    console.log(req.body)
    let { email, subject, message } = req.body
    if (!email || !subject || !message) return res.json({ error: { message: "Fields Should not be empty !" } })

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL, // generated ethereal user
            pass: process.env.GMAIL_PASSWORD, // generated ethereal password
        },
    });

    // // send mail with defined transport object
    // transporter.sendMail({
    //     from: email, // sender address
    //     to: "zahidumair042@gmail.com", // list of receivers
    //     subject: subject, // Subject line
    //     text: message, // plain text body
    // }).then((data, err) => {
    //     if (err) {
    //         console.log(err)
    //         res.status(501).json({ error: { message: err } })
    //     }
    //     else {
    //         console.log(data)
    //         res.status(200).json({ success: { message: "Glad we're connected!" } })
    //     }
    // })

    console.log(email)
    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail({
            from: email, // sender address
            to: "zahidumair042@gmail.com", // list of receivers
            subject: subject, // Subject line
            text: `Email:${email} Msg:${message}` , // plain text body
        }, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
                res.status(501).json({ error: { message: "error" } })

            } else {
                console.log(info);
                resolve(info);
            res.status(200).json({success:{message:"Glad we're connected!"}})

            }
        })

    });




    // (err, info) => {
    //     if (err) {
    //         console.log(err)
    //         res.status(501).json({error:{message:err}})
    //     } else {
    //         res.status(200).json({success:{message:"Glad we're connected!"}})
    //     }
    // }



}
